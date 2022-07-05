import prisma from '../lib/prisma.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';

const create = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    street,
    city,
    state,
    zip,
    phone,
    interests,
  } = req.body;

  const sandbox = await prisma.sandbox.create({
    data: {
      firstName,
      lastName,
      email,
      street,
      city,
      state,
      zip,
      phone,
      interests,
    },
  });
  res.status(200).json({ sandbox });
};

const getAll = async (req, res) => {
  const sandbox = await prisma.sandbox.findMany();
  res.status(200).json({ sandbox });
};

const updateSandbox = async (req, res) => {
  const { id } = req.params;
  const {
    firstName,
    lastName,
    email,
    street,
    city,
    state,
    zip,
    phone,
    interests,
  } = req.body;

  const sandbox = await prisma.sandbox.update({
    where: {
      id,
    },
    data: {
      firstName,
      lastName,
      email,
      street,
      city,
      state,
      zip,
      phone,
      interests,
    },
  });
  res.status(200).json({ sandbox });
};

const deleteSandbox = async (req, res) => {
  const { id } = req.params;

  await prisma.sandbox.delete({
    where: {
      id,
    },
  });
  res.status(200).json({});
};

export { create, getAll, updateSandbox, deleteSandbox };
