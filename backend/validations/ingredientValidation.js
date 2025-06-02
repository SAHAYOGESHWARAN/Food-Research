const { body } = require('express-validator');

const ingredientValidation = [
  body('ingredientName')
    .notEmpty()
    .withMessage('Ingredient name is required'),
  body('nutritionalContent')
    .optional()
    .isString()
    .withMessage('Nutritional content must be a string'),
  body('safetyGuidelines')
    .optional()
    .isString()
    .withMessage('Safety guidelines must be a string'),
  body('studies')
    .optional()
    .isArray()
    .withMessage('Studies must be an array of IDs'),
  body('regulations')
    .optional()
    .isArray()
    .withMessage('Regulations must be an array of IDs'),
  body('commitments')
    .optional()
    .isArray()
    .withMessage('Commitments must be an array of IDs'),
];

module.exports = ingredientValidation;
