const MarketInsight = require('../models/MarketInsight');

// Get all market insights
exports.getMarketInsights = async (req, res) => {
  try {
    const insights = await MarketInsight.find();
    res.json(insights);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Create a new market insight
exports.createMarketInsight = async (req, res) => {
  try {
    const insight = new MarketInsight(req.body);
    await insight.save();
    res.status(201).json(insight);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
