const mongoose = require('mongoose');
const Product = require('../models/Product');
require('dotenv').config();

async function seedProducts() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    
    console.log('Clearing existing products...');
    await Product.deleteMany({});
    console.log('Existing products cleared');
    
    console.log('Fetching products from DummyJSON...');
    const response = await fetch('https://dummyjson.com/products?limit=0');
    const data = await response.json();
    console.log(`Fetched ${data.products.length} products`);
    
    console.log('Processing products for initial seed...');
    const processedProducts = data.products.map(product => ({
      ...product,
      externalId: product.id, // Store original API ID
      soldQuantity: 0, // Initialize sold quantity
      apiStock: product.stock, // Store API stock for reference
      isActive: true,
      lastSyncedAt: new Date()
    }));
    
    console.log('Inserting products into database...');
    await Product.insertMany(processedProducts);
    
    console.log(`Successfully seeded ${processedProducts.length} products`);
    console.log('Initial stock values set from API');
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

seedProducts();
