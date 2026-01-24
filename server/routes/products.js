const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET /api/products - Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    // Transform MongoDB _id to id for frontend compatibility
    const transformedProducts = products.map(product => ({
      ...product.toObject(),
      id: product.externalId || product._id // Use externalId if available, fallback to _id
    }));
    res.json(transformedProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/products/:id - Get single product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findOne({ 
      $or: [
        { externalId: parseInt(req.params.id) },
        { _id: req.params.id }
      ]
    });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    // Transform for frontend compatibility
    const transformedProduct = {
      ...product.toObject(),
      id: product.externalId || product._id
    };
    res.json(transformedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
