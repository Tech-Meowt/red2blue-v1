import mongoose from 'mongoose';
import validator from 'validator'

const SandboxSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please provide first name'],
    minlength: 2,
    maxlength: 20,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Please provide last name'],
    minlength: 2,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email',
    },
    unique: true,
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
  interests: {
    type: String
  },
});

export default mongoose.model('Sandbox', SandboxSchema);
