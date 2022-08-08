import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

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
      type: Boolean,
      default: false,
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
      type: Boolean,
      default: false
    },
    volunteersDb: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: true
    },
    lastLoggedIn: {
      type: Date,
      default: Date.now,
    },
    role: {
      type: String,
      default: 'viewer',
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

UserSchema.pre('save', async function () {
  // console.log(this.modifiedPaths())
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// same fxn, different name
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};


// UserSchema.methods.createJWT = function () {
//   return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_LIFETIME,
//   });
// };

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

UserSchema.methods.getResetPasswordToken = function() {
  const resetToken = crypto.randomBytes(20).toString('hex')

  // hash token and save to db
  this.resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  
  // set token expiry (10 min)
  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000)

  return resetToken;
}

export default mongoose.model('User', UserSchema);
