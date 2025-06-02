const express = require('express');
const router = express.Router();
const commitmentController = require('../controllers/commitmentController');
const { authenticate, authorize } = require('../middleware/authMiddleware');
// Add validation middleware if needed

router.post('/', authenticate, authorize('admin', 'contributor'), commitmentController.createCommitment);
router.get('/', authenticate, commitmentController.getCommitments);
router.get('/:id', authenticate, commitmentController.getCommitmentById);
router.put('/:id', authenticate, authorize('admin', 'contributor'), commitmentController.updateCommitment);
router.delete('/:id', authenticate, authorize('admin'), commitmentController.deleteCommitment);

module.exports = router;
