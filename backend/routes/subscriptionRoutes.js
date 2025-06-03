const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');
const { authenticate, authorize } = require('../middleware/authMiddleware');
// Add validation middleware if needed

router.post('/', authenticate, authorize('admin', 'subscriber'), subscriptionController.createSubscription);
router.get('/', authenticate, authorize('admin'), subscriptionController.getSubscriptions);
router.get('/:id', authenticate, subscriptionController.getSubscriptionById);
router.put('/:id', authenticate, authorize('admin', 'subscriber'), subscriptionController.updateSubscription);
router.delete('/:id', authenticate, authorize('admin'), subscriptionController.deleteSubscription);
router.get('/me', authenticate, subscriptionController.getMySubscriptions);

module.exports = router;
