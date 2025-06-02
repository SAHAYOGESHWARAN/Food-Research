const mongoose = require('mongoose');

const CommitmentSchema = new mongoose.Schema({
  companyID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  commitmentType: {
    type: String,
    enum: ['sustainability', 'quality standards', 'ethics', 'other'],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  },
  progressReports: [
    {
      type: String, // Could be URLs or references to report documents
    }
  ],
  productIDs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    }
  ],
  ingredientIDs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ingredient',
    }
  ],
}, { timestamps: true });

module.exports = mongoose.model('Commitment', CommitmentSchema);
