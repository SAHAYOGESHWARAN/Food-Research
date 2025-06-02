const mongoose = require('mongoose');

const RegulationSchema = new mongoose.Schema({
  regulationName: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  applicableRegions: {
    type: [String],
    required: true,
  },
  complianceStandards: {
    type: String,
  },
  effectiveDate: {
    type: Date,
    required: true,
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
  ingredientIDs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ingredient',
    }
  ],
  productIDs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    }
  ],
}, { timestamps: true });

module.exports = mongoose.model('Regulation', RegulationSchema);
