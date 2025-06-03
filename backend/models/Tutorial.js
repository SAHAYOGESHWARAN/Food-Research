const mongoose = require('mongoose');

const TutorialSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  difficultyLevel: { type: String },
  publishedDate: { type: Date },
  duration: { type: String },
  link: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Tutorial', TutorialSchema);
