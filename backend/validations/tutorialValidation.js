const { body } = require('express-validator');

const tutorialValidation = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').optional().isString(),
  body('category').optional().isString(),
  body('difficultyLevel').optional().isString(),
  body('publishedDate').optional().isISO8601(),
  body('duration').optional().isString(),
  body('link').optional().isString(),
];

module.exports = tutorialValidation;
