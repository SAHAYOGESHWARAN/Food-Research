const mongoose = require('mongoose');

const MarketInsightSchema = new mongoose.Schema({
  trendName: { type: String, required: true },
  description: { type: String, required: true },
  sector: { type: String },
  consumerBehavior: { type: String },
  competitiveLandscape: { type: String },
  dateReported: { type: Date },
  source: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('MarketInsight', MarketInsightSchema);
