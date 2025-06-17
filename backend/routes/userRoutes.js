const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticate, authorize } = require('../middleware/authMiddleware');
// Add validation middleware if needed

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/', authenticate, authorize('admin'), userController.getUsers);
router.get('/:id', authenticate, userController.getUserById);
router.put('/:id', authenticate, userController.updateUser);
router.delete('/:id', authenticate, authorize('admin'), userController.deleteUser);

module.exports = router;
