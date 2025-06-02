const express = require('express');
const router = express.Router();
const ingredientController = require('../controllers/ingredientController');
const { authenticate, authorize } = require('../middleware/authMiddleware');
// Add validation middleware if needed

router.post('/', authenticate, authorize('admin', 'contributor'), ingredientController.createIngredient);
router.get('/', authenticate, ingredientController.getIngredients);
router.get('/:id', authenticate, ingredientController.getIngredientById);
router.put('/:id', authenticate, authorize('admin', 'contributor'), ingredientController.updateIngredient);
router.delete('/:id', authenticate, authorize('admin'), ingredientController.deleteIngredient);

module.exports = router;
