const { body } = require('express-validator');

const productValidation = [
  body('productName')
    .notEmpty()
    .withMessage('Product name is required'),
  body('specifications')
    .optional()
    .isString()
    .withMessage('Specifications must be a string'),
  body('nutritionalContent')
    .optional()
    .isString()
    .withMessage('Nutritional content must be a string'),
  body('safetyGuidelines')
    .optional()
    .isString()
    .withMessage('Safety guidelines must be a string'),
  body('productCategory')
    .notEmpty()
    .withMessage('Product category is required')
    .isIn(['food', 'beverage', 'nutraceutical', 'cosmeceutical'])
    .withMessage('Invalid product category'),
  body('ingredients')
    .optional()
    .isArray()
    .withMessage('Ingredients must be an array of IDs'),
  body('regulations')
    .optional()
    .isArray()
    .withMessage('Regulations must be an array of IDs'),
  body('commitments')
    .optional()
    .isArray()
    .withMessage('Commitments must be an array of IDs'),
];

module.exports = productValidation;
