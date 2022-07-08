import prisma from '../lib/prisma.js';
import { index } from '../lib/algolia.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';

const create = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    state,
    phone,
    interests,
  } = req.body;

  const sandbox = await prisma.sandbox.create({
    data: {
      firstName,
      lastName,
      email,
      state,
      phone,
      interests,
    },
  })
    res.status(200).json({ sandbox });
  

  // algolia
  const api_sandbox = [
    {
      firstName: sandbox.firstName,
      lastName: sandbox.lastName,
      email: sandbox.email,
      state: sandbox.state,
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
  const { id, objectID } = req.params;
  const {
    firstName,
    lastName,
    email,
    state,
    phone,
    interests,
  } = req.body;

  const sandbox = await prisma.sandbox.update({
    where: {
      id,
      objectID,
    },
    data: {
      id,
      objectID,
      firstName,
      lastName,
      email,
      state,
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
    state: sandbox.state,
    phone: sandbox.phone,
    interests: sandbox.interests,
    objectID: sandbox.id,
    id: sandbox.id,
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
