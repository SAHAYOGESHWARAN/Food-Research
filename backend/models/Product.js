const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
    trim: true,
  },
  specifications: {
    type: String, // Can be changed to an object for detailed specs
  },
  nutritionalContent: {
    type: String, // Can be changed to an object for detailed breakdown
  },
  safetyGuidelines: {
    type: String,
  },
  productCategory: {
    type: String,
    enum: ['food', 'beverage', 'nutraceutical', 'cosmeceutical'],
    required: true,
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
  ingredients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ingredient',
    }
  ],
  regulations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Regulation',
    }
  ],
  commitments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Commitment',
    }
  ],
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
