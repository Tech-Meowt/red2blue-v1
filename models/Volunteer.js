import mongoose from 'mongoose';
import validator from 'validator';

const VolunteerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    minlength: 2,
    maxlength: 20,
    trim: true,
  },
  lastName: {
    type: String,
    minlength: 2,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email',
    },
  },
  street: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zip: {
    type: String,
  },
  phone: {
    type: String,
  },
},
{ timestamps: true }
);

export default mongoose.model('Volunteer', VolunteerSchema)
