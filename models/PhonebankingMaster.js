import mongoose from 'mongoose';
import validator from 'validator';

const PhonebankingMasterSchema = new mongoose.Schema({
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
  phone: {
    type: String,
  },
  event: {
    type: String,
  },
});

export default mongoose.model('PhonebankingMaster', PhonebankingMasterSchema);
