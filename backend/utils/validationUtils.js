const { body, param, query } = require('express-validator');

// Example reusable validation chains
const validateIdParam = param('id').isMongoId().withMessage('Invalid ID');

const validateEmail = body('email')
  .isEmail()
  .withMessage('Invalid email address');

const validatePassword = body('password')
  .isLength({ min: 6 })
  .withMessage('Password must be at least 6 characters');

// Add more reusable validators as needed

module.exports = {
  validateIdParam,
  validateEmail,
  validatePassword,
};
