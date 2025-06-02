const express = require('express');
const router = express.Router();
const regulationController = require('../controllers/regulationController');
const { authenticate, authorize } = require('../middleware/authMiddleware');
// Add validation middleware if needed

router.post('/', authenticate, authorize('admin', 'contributor'), regulationController.createRegulation);
router.get('/', authenticate, regulationController.getRegulations);
router.get('/:id', authenticate, regulationController.getRegulationById);
router.put('/:id', authenticate, authorize('admin', 'contributor'), regulationController.updateRegulation);
router.delete('/:id', authenticate, authorize('admin'), regulationController.deleteRegulation);

module.exports = router;
