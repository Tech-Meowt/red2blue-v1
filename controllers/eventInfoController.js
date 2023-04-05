import { StatusCodes } from 'http-status-codes';
import EventInfo from '../models/EventInfo.js';
import Attendee from '../models/Attendees.js';

const createEvent = async (req, res) => {
  const { eventName, attendees } = req.body;

  const newEvent = await EventInfo.create({ eventName, attendees });
};

const getEvent = async (req, res) => {
  const event = await EventInfo.findOne({ _id: req.body._id })

  const attendees = event.attendees
  
  const info = attendees.map((data) => {
    return data
  })

  const attendeeNames = await Attendee.find({ _id: info })
  const oneAttendee = attendeeNames.map((data) => {
    console.log(data.attendeeInfo)
  })

};

export { createEvent, getEvent };
