import prisma from '../lib/prisma.js';
import { index } from '../lib/algolia.js';
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

  // algolia
  const api_sandbox = [
    {
      firstName: sandbox.firstName,
      lastName: sandbox.lastName,
      email: sandbox.email,
      street: sandbox.street,
      city: sandbox.city,
      state: sandbox.state,
      zip: sandbox.zip,
      phone: sandbox.phone,
      interests: sandbox.interests,
      id: sandbox.id,
      objectID: sandbox.id,
    },
  ];
  index
    .saveObjects(api_sandbox, { autoGenerateObjectIDIfNotExist: true })
    .then(({ objectIds }) => {
      console.log(objectIds);
    })
    .catch((err) => {
      console.log(err);
    });
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

  // algolia
  const api_sandbox = {
    firstName: sandbox.firstName,
    lastName: sandbox.lastName,
    email: sandbox.email,
    street: sandbox.street,
    city: sandbox.city,
    state: sandbox.state,
    zip: sandbox.zip,
    phone: sandbox.phone,
    interests: sandbox.interests,
    id: sandbox.id,
    objectID: sandbox.objectID,
  };

  index
    .partialUpdateObject(api_sandbox, {
      createIfNotExists: true,
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(api_sandbox);
};

const deleteSandbox = async (req, res) => {
  const { id } = req.params;

  const sandbox = await prisma.sandbox.delete({
    where: {
      id,
    },
  });
  res.status(200).json({});

  // algolia
  index.deleteObject(req.params.id).then(() => {
    console.log('removed')
  })
};

export { create, getAll, updateSandbox, deleteSandbox };
