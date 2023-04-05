import Sandbox from '../models/Sandbox.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import mongoose from 'mongoose';

const create = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    favoriteColor,
    favoriteMovie,
  } = req.body;

  const sandbox = await Sandbox.create(req.body);

  res.status(StatusCodes.CREATED).json({ sandbox });
};

const getAll = async (req, res) => {
  const sandbox = await Sandbox.find({}).sort({ updatedAt: 'desc' });

  res.status(StatusCodes.OK).json({ sandbox });
};

const updateSandbox = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    favoriteColor,
    favoriteMovie,
  } = req.body;

  const sandbox = await Sandbox.findOne({ _id: req.params.id }, req.body);

  sandbox.firstName = firstName;
  sandbox.lastName = lastName;
  sandbox.email = email;
  sandbox.phoneNumber = phoneNumber;
  sandbox.favoriteColor = favoriteColor;
  sandbox.favoriteMovie = favoriteMovie;

  await sandbox.save();

  res.status(StatusCodes.OK).json({ sandbox });
};

const deleteSandbox = async (req, res) => {
  const { id: sandboxId } = req.params;

  const sandbox = await Sandbox.findOne({ _id: sandboxId });

  if (!sandbox) {
    throw new NotFoundError(`No record with id: ${sandboxId}`);
  }

  await sandbox.remove();

  res.status(StatusCodes.OK).json({ msg: `Record deleted` });
};

export { create, getAll, updateSandbox, deleteSandbox };
