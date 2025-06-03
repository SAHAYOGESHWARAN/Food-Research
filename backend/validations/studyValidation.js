const { body } = require('express-validator');

const studyValidation = [
  body('title').notEmpty().withMessage('Title is required'),
  body('abstract').optional().isString(),
  body('keywords').optional().isArray(),
  body('publicationDate').optional().isISO8601(),
  body('authors').optional().isArray(),
  body('link').optional().isString(),
  body('ingredientIDs').optional().isArray(),
  body('productIDs').optional().isArray(),
];

module.exports = studyValidation;
