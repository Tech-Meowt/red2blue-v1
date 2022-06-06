import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import {
  BadRequestError,
  UnAuthenticatedError,
  NotFoundError,
} from '../errors/index.js';

// user managed data
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
  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token });
};

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
};

// admin managed data
const getUsers = (req, res) => {
  User.find(function(err, allUsers) {
    res.json(allUsers);
  });
};

const createUser = (req, res) => {
  let newUser = new User(req.body);
  newUser
    .save()
    .then((newUser) => {
      res.send(newUser);
    })
    .catch(function (err) {
      res.status(422).send('User not added!');
    });
};

const getUserDetails = (req, res) => { 
  User.findById(req.params.id, function(err, oneUser) {
    if (!oneUser) {
      res.status(404).send('No user found')
    } else {
      res.json(oneUser)
    }
  })
};

const updateDbUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(function () {
      res.json('User updated');
    })
    .catch(function (err) {
      res.status(422).send('User update failed.');
    });
};

const deleteUser = (req, res) => {
  User.findById(req.params.id, function (err, deletedUser) {
    if (!deletedUser) {
      res.status(404).send('User not found');
    } else {
      User.findByIdAndRemove(req.params.id)
        .then(function () {
          res.status(200).json('User deleted');
        })
        .catch(function (err) {
          res.status(400).send('User delete failed.');
        });
    }
  });
};

export {
  register,
  login,
  updateUser,
  createUser,
  deleteUser,
  updateDbUser,
  getUsers,
  getUserDetails
};
