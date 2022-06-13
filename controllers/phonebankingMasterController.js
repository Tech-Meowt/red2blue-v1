import PhonebankingMaster from '../models/PhonebankingMaster.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';

const create = async (req, res) => {
  let {
    firstName,
    lastName,
    email,
    phone,
    event,
  } = req.body;
  try {
    let phonebankingMaster = new PhonebankingMaster({
      firstName,
      lastName,
      email,
      phone,
      event,
    });
    let newPhonebankingMaster = await phonebankingMaster.save();
    res.status(200).json({
      status: 'Success',
      data: phonebankingMaster,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAll = (req, res) => {
  PhonebankingMaster.find(function (err, records) {
    res.json(records);
  });
};

const updatePhonebankingMaster = async (req, res) => {
  const { id: recordId } = req.params;
  const { firstName, lastName, email, phone, event } = req.body;

  const record = await PhonebankingMaster.findOne({ _id: recordId });

  if (!record) {
    throw new NotFoundError(`No record found`);
  }

  const updatedRecord = await PhonebankingMaster.findOneAndUpdate(
    { _id: recordId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(StatusCodes.OK).json({ updatedRecord });
};

const deletePhonebankingMaster= (req, res) => {
  PhonebankingMaster.findById(req.params.id, function (err, deletedPhonebankingMaster) {
    if (!deletedPhonebankingMaster) {
      res.status(404).send('Record not found');
    } else {
      PhonebankingMaster.findByIdAndRemove(req.params.id)
        .then(function () {
          res.status(200).json('Record deleted!');
        })
        .catch(function (err) {
          res.status(400).send('Delete failed.');
        });
    }
  });
};

export { create, getAll, updatePhonebankingMaster, deletePhonebankingMaster };
