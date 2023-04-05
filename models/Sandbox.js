import mongoose from 'mongoose';

const SandboxSchema = new mongoose.Schema(
  {
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
      unique: true,
    },
    favoriteColor: {
      type: String,
    },
    favoriteMovie: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Sandbox', SandboxSchema);
