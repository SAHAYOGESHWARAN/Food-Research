const express = require('express');
const router = express.Router();
const marketInsightController = require('../controllers/marketInsightController');

// Public: Get all market insights
router.get('/', marketInsightController.getMarketInsights);
// (Optional) Add authentication/authorization for POST if needed
router.post('/', marketInsightController.createMarketInsight);

module.exports = router;
