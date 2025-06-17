const { body } = require('express-validator');

const userValidation = [
  body('email')
    .isEmail()
    .withMessage('A valid email is required'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  body('name')
    .optional()
    .isString()
    .withMessage('Name must be a string'),
  body('role')
    .optional()
    .isIn(['admin', 'contributor', 'subscriber'])
    .withMessage('Invalid user role'),
  body('isActive')
    .optional()
    .isBoolean()
    .withMessage('isActive must be a boolean'),
];

module.exports = userValidation;
