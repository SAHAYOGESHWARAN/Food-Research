const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
  ingredientName: {
    type: String,
    required: true,
    trim: true,
  },
  nutritionalContent: {
    type: String,
  },
  safetyGuidelines: {
    type: String,
  },
  studies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Study',
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

module.exports = mongoose.model('Ingredient', IngredientSchema);
