import mongoose from 'mongoose'

const AttendeesSchema = new mongoose.Schema({
  eventName: {
    type: mongoose.Types.ObjectId,
    ref: 'EventInfo'
  },
  attendeeInfo: {
    type: Map,
    of: String
  }
})

export default mongoose.model('Attendee', AttendeesSchema)
