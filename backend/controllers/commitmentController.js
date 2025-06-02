const Commitment = require('../models/Commitment');
const { validationResult } = require('express-validator');

// Create a new commitment
exports.createCommitment = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const commitment = new Commitment(req.body);
    await commitment.save();
    res.status(201).json(commitment);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get all commitments
exports.getCommitments = async (req, res) => {
  try {
    const commitments = await Commitment.find();
    res.json(commitments);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get a single commitment by ID
exports.getCommitmentById = async (req, res) => {
  try {
    const commitment = await Commitment.findById(req.params.id);
    if (!commitment) {
      return res.status(404).json({ message: 'Commitment not found' });
    }
    res.json(commitment);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update a commitment by ID
exports.updateCommitment = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const commitment = await Commitment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!commitment) {
      return res.status(404).json({ message: 'Commitment not found' });
    }
    res.json(commitment);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Delete a commitment by ID
exports.deleteCommitment = async (req, res) => {
  try {
    const commitment = await Commitment.findByIdAndDelete(req.params.id);
    if (!commitment) {
      return res.status(404).json({ message: 'Commitment not found' });
    }
    res.json({ message: 'Commitment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
