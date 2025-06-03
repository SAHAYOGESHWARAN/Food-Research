const Study = require('../models/Study');
const { validationResult } = require('express-validator');

exports.createStudy = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const study = new Study(req.body);
    await study.save();
    res.status(201).json(study);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.getStudies = async (req, res) => {
  try {
    const studies = await Study.find();
    res.json(studies);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.getStudyById = async (req, res) => {
  try {
    const study = await Study.findById(req.params.id);
    if (!study) {
      return res.status(404).json({ message: 'Study not found' });
    }
    res.json(study);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.updateStudy = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const study = await Study.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!study) {
      return res.status(404).json({ message: 'Study not found' });
    }
    res.json(study);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.deleteStudy = async (req, res) => {
  try {
    const study = await Study.findByIdAndDelete(req.params.id);
    if (!study) {
      return res.status(404).json({ message: 'Study not found' });
    }
    res.json({ message: 'Study deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
