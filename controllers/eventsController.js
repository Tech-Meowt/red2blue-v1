import Event from '../models/Event.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';

const create = async (req, res) => {
  let { eventName, eventType, eventDate, eventYear, volunteers } =
    req.body;
  try {
    let event= new Event({
      eventName,
      eventType,
      eventDate,
      eventYear,
      volunteers,
    });
    let newEvent= await event.save();
    res.status(200).json({
      status: 'Record created!',
      data: event,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAll = (req, res) => {
  Event.find(function (err, records) {
    res.json(records);
  });
};

const getOne = async (req, res) => {
  Event.findById(req.params.id, function(err, foundRecord) {
    if (!foundRecord) {
      res.status(404).send('Record not found')
    }
    res.status(200).json('Record found')
  })
}

const updateEvent = async (req, res) => {
  const { id: recordId } = req.params;
  const { eventName, eventType, eventDate, eventYear, volunteers } = req.body;

  const record = await Event.findOne({ _id: recordId });

  if (!record) {
    throw new NotFoundError(`No record found`);
  }

  const updatedRecord = await Event.findOneAndUpdate(
    { _id: recordId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(StatusCodes.OK).json({ updatedRecord });
};

const deleteEvent = (req, res) => {
  Event.findById(req.params.id, function (err, deletedRecord) {
    if (!deletedRecord) {
      res.status(404).send('Record not found');
    } else {
      Event.findByIdAndRemove(req.params.id)
        .then(function () {
          res.status(200).json('Record deleted!');
        })
        .catch(function (err) {
          res.status(400).send('Delete failed.');
        });
    }
  });
};

export { create, getAll, updateEvent, deleteEvent, getOne };
