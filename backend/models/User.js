const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'contributor', 'user'],
    default: 'user',
    required: true,
  },
  subscriptions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subscription',
    }
  ],
  isActive: {
    type: Boolean,
    default: true,
  },
  mobile: {
    type: String,
    trim: true,
    default: '',
  },
  profilePicture: {
    type: String,
    default: '',
  },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
