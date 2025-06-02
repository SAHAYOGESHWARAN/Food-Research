const Regulation = require('../models/Regulation');
const { validationResult } = require('express-validator');

exports.createRegulation = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const regulation = new Regulation(req.body);
    await regulation.save();
    res.status(201).json(regulation);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.getRegulations = async (req, res) => {
  try {
    const regulations = await Regulation.find();
    res.json(regulations);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.getRegulationById = async (req, res) => {
  try {
    const regulation = await Regulation.findById(req.params.id);
    if (!regulation) {
      return res.status(404).json({ message: 'Regulation not found' });
    }
    res.json(regulation);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.updateRegulation = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const regulation = await Regulation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!regulation) {
      return res.status(404).json({ message: 'Regulation not found' });
    }
    res.json(regulation);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.deleteRegulation = async (req, res) => {
  try {
    const regulation = await Regulation.findByIdAndDelete(req.params.id);
    if (!regulation) {
      return res.status(404).json({ message: 'Regulation not found' });
    }
    res.json({ message: 'Regulation deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
