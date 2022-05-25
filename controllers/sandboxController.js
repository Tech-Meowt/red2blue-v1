import Sandbox from '../models/Sandbox.js';
import { StatusCodes } from 'http-status-codes';
import {
  BadRequestError,
  NotFoundError,
} from '../errors/index.js';

const create = async (req, res) => {
  let { firstName,
  lastName,
  email,
  street,
  city,
  state,
  zip,
  phone,
  interests } = req.body
  try {
    let sandbox = new Sandbox({
      firstName,
      lastName,
      email,
      street,
      city,
      state,
      zip,
      phone,
      interests,
    })
    let newSandbox = await sandbox.save()
    res.status(200).json({
      status: 'Success',
      data: sandbox
    })
  } catch (err) {
    console.log(err)
  }
};

const getAll = (req, res) => {
  Sandbox.find(function(err, records) {
    res.json(records);
  });
}

const updateSandbox = async (req, res) => {
  const { id: recordId } = req.params;
  const { firstName, lastName, email, street, city, state, zip, phone, interests } = req.body;

  const record = await Sandbox.findOne({ _id: recordId });

  if (!record) {
    throw new NotFoundError(`No record found`);
  }

  const updatedRecord = await Sandbox.findOneAndUpdate({ _id: recordId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.OK).json({ updatedRecord });
    
}

export {
  create, getAll, updateSandbox
}
