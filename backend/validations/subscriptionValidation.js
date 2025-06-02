const { body } = require('express-validator');

const subscriptionValidation = [
  body('userID')
    .notEmpty()
    .withMessage('User ID is required')
    .isMongoId()
    .withMessage('Invalid User ID'),
  body('modules')
    .isArray({ min: 1 })
    .withMessage('Modules must be a non-empty array')
    .custom((modules) => {
      const allowed = [
        'marketInsights',
        'productData',
        'commitments',
        'regulations',
        'studies',
        'tutorials',
      ];
      return modules.every((m) => allowed.includes(m));
    })
    .withMessage('Invalid module(s) in subscription'),
  body('startDate')
    .optional()
    .isISO8601()
    .withMessage('Start date must be a valid date'),
  body('endDate')
    .optional()
    .isISO8601()
    .withMessage('End date must be a valid date'),
  body('isActive')
    .optional()
    .isBoolean()
    .withMessage('isActive must be a boolean'),
];

module.exports = subscriptionValidation;
