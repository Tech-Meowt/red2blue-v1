import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import {
  BadRequestError,
  UnAuthenticatedError,
  NotFoundError,
} from '../errors/index.js';
import prisma from '../lib/prisma.js';
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
  
  // prisma
  const id = user._id.toString()
  const userPrisma = await prisma.user.create({
    data: {
      id,
      firstName,
      lastName,
      email,
      volunteer: {
        connectOrCreate: [
          {
            create: {
              firstName: firstName,
              lastName: lastName,
              email: email,
            },
            where: {
              email: email,
            }
          }
        ]
      },
    },
    include: {
      volunteer: true,
    }
  });

  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName
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
    const resetUrl = `http://localhost:8000/api/v1/auth/passwordReset/${resetToken}`;

    // html message
    const message = `
    <h1>You have requested to reset your password.</h1>
    <p>Click <a href=${resetUrl}>here</a> to reset your password.</p>
    <br />
    <p>If you did not request to reset your password, you can ignore this email.</p>
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
  const { email, firstName, lastName, approved, usersDb, volunteersDb, role } =
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
  user.role = role;

  await user.save();

  const token = user.createJWT();

  res.status(StatusCodes.OK).json({ user, token });

  const updateUserPrisma = async (req, res) => {
    const { id } = req.params;

    const {
      firstName,
      lastName,
      email,
      role,
      approved,
      usersDb,
      volunteersDb,
    } = req.body

    const updatePrisma = await prisma.user.update({
      where: {
        id,
      },
      data: {
        firstName,
        lastName,
        email,
        role,
        approved,
        usersDb,
        volunteersDb,
      },
    });
    res.status(200).json({ updatePrisma })
  }
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
  
    const { id } = req.params;
    const {
      firstName,
      lastName,
      email,
      approved,
      usersDb,
      volunteersDb,
      createdAt,
      updatedAt,
      avatarUrl,
      isActive,
      lastLoggedIn,
      role,
    } = req.body
  
  const adminUpdateUser = await prisma.user.update({
    where: {
      id,
    },
    data: {
      firstName,
      lastName,
      email,
      approved,
      usersDb,
      volunteersDb,
      createdAt,
      updatedAt,
      avatarUrl,
      isActive,
      lastLoggedIn,
      role,
      updatedAt,
      volunteer: {
        update: {
          where: {
            email: email,
          },
          data: {
            firstName: firstName,
            lastName: lastName,
            email: email
          }
        }
      },
    },
    include: {
      volunteer: true,
    },
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
  const { id } = req.params
  await prisma.user.delete({
    where: {
      id,
    }
  })
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
