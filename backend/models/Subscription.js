const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  modules: [
    {
      type: String,
      enum: [
        'marketInsights',
        'productData',
        'commitments',
        'regulations',
        'studies',
        'tutorials',
      ],
      required: true,
    }
  ],
  startDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  endDate: {
    type: Date,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Subscription', SubscriptionSchema);
