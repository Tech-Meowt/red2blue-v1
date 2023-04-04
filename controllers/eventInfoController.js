import EventInfo from '../models/EventInfo.js';

const createEvent = async (req, res) => {
  const { eventName, attendees } = req.body

  const newEvent = await EventInfo.create({ eventName, attendees })
}

export { createEvent }
