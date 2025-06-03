const express = require('express');
const router = express.Router();
const tutorialController = require('../controllers/tutorialController');
const { authenticate, authorize } = require('../middleware/authMiddleware');
const tutorialValidation = require('../validations/tutorialValidation');

router.post('/', authenticate, authorize('admin', 'contributor'), tutorialValidation, tutorialController.createTutorial);
router.get('/', tutorialController.getTutorials); // Public access
router.get('/:id', tutorialController.getTutorialById);
router.put('/:id', authenticate, authorize('admin', 'contributor'), tutorialValidation, tutorialController.updateTutorial);
router.delete('/:id', authenticate, authorize('admin'), tutorialController.deleteTutorial);

module.exports = router;
