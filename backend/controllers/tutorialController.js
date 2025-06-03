const Tutorial = require('../models/Tutorial');
const { validationResult } = require('express-validator');

exports.createTutorial = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const tutorial = new Tutorial(req.body);
    await tutorial.save();
    res.status(201).json(tutorial);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.getTutorials = async (req, res) => {
  try {
    const tutorials = await Tutorial.find();
    res.json(tutorials);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.getTutorialById = async (req, res) => {
  try {
    const tutorial = await Tutorial.findById(req.params.id);
    if (!tutorial) {
      return res.status(404).json({ message: 'Tutorial not found' });
    }
    res.json(tutorial);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.updateTutorial = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const tutorial = await Tutorial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!tutorial) {
      return res.status(404).json({ message: 'Tutorial not found' });
    }
    res.json(tutorial);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.deleteTutorial = async (req, res) => {
  try {
    const tutorial = await Tutorial.findByIdAndDelete(req.params.id);
    if (!tutorial) {
      return res.status(404).json({ message: 'Tutorial not found' });
    }
    res.json({ message: 'Tutorial deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
