const mongoose = require('mongoose');

const StudySchema = new mongoose.Schema({
  title: { type: String, required: true },
  abstract: { type: String },
  keywords: [{ type: String }],
  publicationDate: { type: Date },
  authors: [{ type: String }],
  link: { type: String },
  ingredientIDs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }],
  productIDs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
}, { timestamps: true });

module.exports = mongoose.model('Study', StudySchema);
