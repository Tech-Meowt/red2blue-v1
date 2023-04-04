import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import {
  BadRequestError,
  UnAuthenticatedError,
  NotFoundError,
} from '../errors/index.js';
import crypto from 'crypto';
import sendEmail from '../lib/sendEmail.js'

// user managed data

// create account
// mongodb
const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    throw new BadRequestError('please provide all values');
  }
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError('Email already in use');
  }

  const user = await User.create({ firstName, lastName, email, password });

  // html message
  const message = `
    <div style='text-align: center;'>
      <a href="https://www.red2blue.org" style='cursor: pointer;'><img src="https://i.imgur.com/F9jwnec.png" alt='redblue header image' width='250' /></a>
    </div>
    <h3>Hello Red2Blue Admin,</h3>
    <p>You've received a new database access request from ${user.firstName} ${user.lastName}.</p>
    <h4>Instructions:</h4>
    <ol>
    <li>
    Log in to your account and navigate to the <strong>User Accounts Database</strong>.
    </li>
    <li>
    <strong>Edit</strong> each unapproved account by <strong>clicking on 'View As Table'. Scroll through the table to the 'Approval Status' column and filter by 'waiting on approval'. Finally, click on 'Edit'.</strong>.
    <ul>
    <li><strong>*Note that the screen will jump to the 'list view'</strong> of the record you want to edit.</li>
    </ul>
    </li>
    <li>
    <strong>Grant access</strong> to the appropriate databases. <strong>*Note that all users have access to the Sandbox Database.</strong>
    </li>
    <li>
    Assign the user a <strong>role</strong>.
    <ul>
    <li><strong>Admins</strong> can create, view, edit, and delete records.</li>
    <li><strong>Editors</strong> can only view and edit records.</li>
    <li><strong>Viewers</strong> can only view records.</li>
    </ul>
    </li>
    <li>Log in to the <strong>Red2Blue Admin Gmail account.</strong></li>
    <li>Reply to each new account email with the <strong>'Red2Blue Database Access' template</strong> by following the instructions below:
    <ol>
    <li>
    Click on <strong>'Reply'</strong>.
    </li>
    <li>Opposite of the 'Send' button at the bottom of the screen, click on the <strong>3 vertical dots</strong>.</li>
    <li>Click on <strong>'Templates'</strong> and then click on the <strong>'Red2Blue Database Access'</strong> template.</li>
    </ol>
    <li><strong>🙌 Your work here is done! The user's email address will be pre-populated for you. All you need to do is click on 'Send'.</strong></li>
    </ol>
    <p>--</p>
    <p>Cheers,</p>
    <p>The Red2Blue Database Management System</p>
    <a href="https://www.red2blue.org" style='cursor: pointer;'><img src="https://i.imgur.com/UqGIhfO.png" alt='redblue small favicon' /></a>
    `;

  try {
    await sendEmail({
      to: process.env.FROM_EMAIL,
      subject: `New Account Request: ${user.firstName} ${user.lastName}`,
      text: message,
      replyTo: user.email,
    });
  } catch (err) {
    console.log(err);
  }

  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    },
    token,
  });
};

// login
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError('Please provide all values');
  }
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new UnAuthenticatedError('Invalid Credentials');
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError('Invalid Credentials');
  }
  const token = sendToken(user, 200, res);
  user.password = undefined;
  // res.status(StatusCodes.OK).json({ user, token });
};

// forgot password initialization
const forgotPassword = async (req, res) => {
  // check if user exists and then send email to email provided
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw new UnAuthenticatedError('Incorrect email');
    }

    // reset token and add hashed version to db (mongodb only)
    const resetToken = user.getResetPasswordToken();

    await user.save();

    // create reset url to add to email
    const resetUrl = `https://r2bdb.herokuapp.com/reset-password/${resetToken}`;

    // html message
    const message = `
    <div style='text-align: center;'>
      <a href="https://www.red2blue.org" style='cursor: pointer;'><img src="https://i.imgur.com/F9jwnec.png" alt='redblue header image' width='250' /></a>
    </div>
    <h3>Reset your password</h3>
    <p>Click <a href=${resetUrl}>here</a> to create a new password.</p>
    <p>You received this email because you requested to reset your password. If this wasn't you—ignore this email.</p>
    <br />
    <p>--</p>
    <p>Cheers,</p>
    <p>Red2Blue</p>
    <a href="https://www.red2blue.org" style='cursor: pointer;'><img src="https://i.imgur.com/UqGIhfO.png" alt='redblue small favicon' /></a>
    `;

    try {
      await sendEmail({
        to: user.email,
        subject: 'Reset Your Password',
        text: message,
      });

      res.status(200).json({ success: true, data: 'Email sent' });
    } catch (err) {
      console.log(err);

      user.getResetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();

      throw new BadRequestError('Email could not be sent');
    }
  } catch (err) {
    console.log(err);
  }
};

const resetPassword = async (req, res) => {
  // compare token in url params to hashed token
  const resetPasswordToken = crypto
    .createHash('sha256')
    .update(req.params.resetToken)
    .digest('hex');
  
  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() }
    });

    if (!user) {
      throw new UnAuthenticatedError('Invalid Token');
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(201).json({
      success: true,
      data: 'Password updated successfully',
      token: user.getSignedJwtToken(),
    });

  } catch (err) {
    console.log(err);
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  res.status(StatusCodes.OK).json({ user, token });
}

const updateUser = async (req, res) => {
  const { email, firstName, lastName, approved, usersDb, volunteersDb, sandboxDb, skillsDb, isActive, role, eventsDb } =
    req.body;
  if (!email || !firstName || !lastName ) {
    throw new BadRequestError('Please provide all values');
  }
  const user = await User.findOne({ _id: req.user.userId });

  user.email = email;
  user.firstName = firstName;
  user.lastName = lastName;
  user.approved = approved;
  user.usersDb = usersDb;
  user.volunteersDb = volunteersDb;
  user.sandboxDb = sandboxDb;
  user.skillsDb = skillsDb;
  user.eventsDb = eventsDb;
  user.isActive = isActive;
  user.role = role;

  await user.save();

  const token = user.createJWT();

  res.status(StatusCodes.OK).json({ user, token });
};

// admin managed data
const getUsers = (req, res) => {
  User.find(function(err, allUsers) {
    res.json(allUsers);
  });
};

const updateDbUser = async (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(function() {
      console.log('updated')
      // res.json('User updated');
    })
    .catch(function(err) {
      console.log('failed')
      // res.status(422).send('User update failed.');
    });
};

const deleteUser = async (req, res) => {
  User.findById(req.params.id, function (err, deletedUser) {
    if (!deletedUser) {
      console.log('not found')
      // res.status(404).send('User not found');
    } else {
      User.findByIdAndRemove(req.params.id)
        .then(function() {
          console.log('deleted')
          // res.status(200).json('User deleted');
        })
        .catch(function(err) {
          console.log(err)
          // res.status(400).send('User delete failed.');
        });
    }
  });
};

export {
  register,
  login,
  updateUser,
  deleteUser,
  updateDbUser,
  getUsers,
  forgotPassword,
  resetPassword,
  sendToken,
};
