import mongoose from 'mongoose'

const EventInfoSchema = new mongoose.Schema({
  eventName: {
    type: String
  },
  attendees: [
    {
      type: mongoose.Types.ObjectId
    }
  ]
})

export default mongoose.model('EventInfo', EventInfoSchema)
