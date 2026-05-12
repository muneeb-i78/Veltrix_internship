// routes/dataRoutes.js
// Full CRUD — Create, Read, Update, Delete

const express = require('express');
const Data    = require('../models/Data');
const protect = require('../middleware/auth');

const router = express.Router();

// All routes below are protected — user must be logged in

// ── POST /api/data — Create a new item ──
router.post('/', protect, async (req, res) => {
  const { title, description, category } = req.body;

  try {
    const item = await Data.create({
      title,
      description,
      category,
      createdBy: req.user.id
    });

    res.status(201).json({ message: 'Item created', item });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ── GET /api/data — Get all items for logged in user ──
router.get('/', protect, async (req, res) => {
  try {
    const items = await Data.find({ createdBy: req.user.id });
    res.json(items);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ── GET /api/data/:id — Get single item ──
router.get('/:id', protect, async (req, res) => {
  try {
    const item = await Data.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json(item);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ── PUT /api/data/:id — Update an item ──
router.put('/:id', protect, async (req, res) => {
  try {
    const item = await Data.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return updated item
    );

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json({ message: 'Item updated', item });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ── DELETE /api/data/:id — Delete an item ──
router.delete('/:id', protect, async (req, res) => {
  try {
    const item = await Data.findByIdAndDelete(req.params.id);

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json({ message: 'Item deleted successfully' });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
