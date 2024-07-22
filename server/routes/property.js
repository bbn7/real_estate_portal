const express = require('express');
const { protect, authorize } = require('../middleware/auth');
const Property = require('../models/property');

const router = express.Router();

// Add Property
router.post('/', protect, authorize('Admin', 'Agent'), async (req, res) => {
  const { title, description, price, location } = req.body;

  try {
    const property = new Property({
      title,
      description,
      price,
      location,
      user: req.user._id,
    });

    await property.save();

    res.status(201).json(property);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get All Properties
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find().populate('user', 'name email');
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
