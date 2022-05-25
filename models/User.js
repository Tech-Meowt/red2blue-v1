import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const UserSchema = new mongoose.Schema(
  {
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
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: 8,
      select: false,
    },
    approved: {
      type: String,
      default: 'no',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    avatarUrl: {
      type: String,
      default: '',
    },
    usersDb: {
      type: String,
      default: 'no',
    },
    volunteersDb: {
      type: String,
      default: 'no',
    },
    isActive: {
      type: String,
      default: 'yes',
    },
    lastLoggedIn: {
      type: Date,
      default: Date.now,
    },
    isViewer: {
      type: String,
      default: 'yes',
    },
    isEditor: {
      type: String,
      default: 'no',
    },
    isAdmin: {
      type: String,
      default: 'no',
    },
  },
  { timestamps: true }
);

UserSchema.pre('save', async function () {
  // console.log(this.modifiedPaths())
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

export default mongoose.model('User', UserSchema);
