import mongoose from 'mongoose';

const VolunteersSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: [true, `Please provide first name`]
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, `Please provide last name`]
    },
    email: {
      type: String,
      unique: true,
      required: [true, `Please provide email`]
    },
    city: {
      type: String
    },
    state: {
      type: String
    },
    zip: {
      type: String
    },
  },
  { timestamps: true }
);

export default mongoose.model('Volunteer', VolunteersSchema)
