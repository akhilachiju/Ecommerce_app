const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// POST /api/orders - Process purchase
router.post('/', async (req, res) => {
  const { items } = req.body; // [{ productId, quantity }]
  
  try {
    const results = [];
    
    for (const item of items) {
      const product = await Product.findById(item.productId);
      
      if (!product) {
        return res.status(404).json({ message: `Product ${item.productId} not found` });
      }
      
      if (!product.isActive) {
        return res.status(400).json({ message: `Product ${product.title} is not available` });
      }
      
      if (product.stock < item.quantity) {
        return res.status(400).json({ 
          message: `Insufficient stock for ${product.title}. Available: ${product.stock}` 
        });
      }
      
      // Update stock atomically
      const updatedProduct = await Product.findByIdAndUpdate(
        item.productId,
        {
          $inc: {
            stock: -item.quantity,
            soldQuantity: item.quantity
          }
        },
        { new: true }
      );
      
      results.push({
        productId: item.productId,
        title: product.title,
        quantity: item.quantity,
        remainingStock: updatedProduct.stock
      });
    }
    
    res.json({
      message: 'Purchase successful',
      items: results
    });
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
