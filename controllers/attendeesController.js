import Attendee from '../models/Attendees.js';
import EventInfo from '../models/EventInfo.js';

const createAttendee = async (req, res) => {
  const { eventName, attendeeInfo } = req.body

  const newAttendee = await Attendee.create({ eventName, attendeeInfo })
  
  const event = await EventInfo.findOne({ _id: eventName })
  const eventId = event._id
  
  await EventInfo.findByIdAndUpdate(eventId, { $push: { attendees: newAttendee._id } }, { safe: true, upsert: true })
}

export { createAttendee }
