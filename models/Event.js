import mongoose from 'mongoose';

// const VolSchema = new mongoose.Schema({ volFirstName: String, volLastName: String, volEmail: String })

const EventSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
    },
    eventType: {
      type: String,
      required: true,
    },
    eventDate: {
      type: String,
    },
    eventYear: {
      type: String,
      required: true,
    },
    // volunteers: [VolSchema]
    // volunteers: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Volunteer',
    //   },
    // ],
  },
  { timestamps: true }
);

export default mongoose.model('Event', EventSchema);
