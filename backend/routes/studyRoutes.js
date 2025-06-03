const express = require('express');
const router = express.Router();
const studyController = require('../controllers/studyController');
const { authenticate, authorize } = require('../middleware/authMiddleware');
const studyValidation = require('../validations/studyValidation');

router.post('/', authenticate, authorize('admin', 'contributor'), studyValidation, studyController.createStudy);
router.get('/', studyController.getStudies); // Public access
router.get('/:id', studyController.getStudyById);
router.put('/:id', authenticate, authorize('admin', 'contributor'), studyValidation, studyController.updateStudy);
router.delete('/:id', authenticate, authorize('admin'), studyController.deleteStudy);

module.exports = router;
