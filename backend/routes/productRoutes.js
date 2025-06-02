const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { authenticate, authorize } = require('../middleware/authMiddleware');
// Add validation middleware if needed

router.post('/', authenticate, authorize('admin', 'contributor'), productController.createProduct);
router.get('/', productController.getProducts); // Public access
router.get('/:id', authenticate, productController.getProductById);
router.put('/:id', authenticate, authorize('admin', 'contributor'), productController.updateProduct);
router.delete('/:id', authenticate, authorize('admin'), productController.deleteProduct);

module.exports = router;
