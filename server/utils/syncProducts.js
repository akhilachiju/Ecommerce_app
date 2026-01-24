const mongoose = require('mongoose');
const Product = require('../models/Product');
require('dotenv').config();

async function syncProducts() {
  try {
    console.log('Starting product sync...');
    await mongoose.connect(process.env.MONGODB_URI);
    
    console.log('Fetching latest products from API...');
    const response = await fetch('https://dummyjson.com/products?limit=0');
    const data = await response.json();
    
    let updated = 0;
    let inserted = 0;
    let errors = 0;
    
    for (const apiProduct of data.products) {
      try {
        const existingProduct = await Product.findOne({ externalId: apiProduct.id });
        
        if (existingProduct) {
          // Update non-critical fields only (preserve stock)
          await Product.findByIdAndUpdate(existingProduct._id, {
            title: apiProduct.title,
            description: apiProduct.description,
            price: apiProduct.price,
            discountPercentage: apiProduct.discountPercentage,
            rating: apiProduct.rating,
            brand: apiProduct.brand,
            category: apiProduct.category,
            thumbnail: apiProduct.thumbnail,
            images: apiProduct.images,
            tags: apiProduct.tags,
            weight: apiProduct.weight,
            dimensions: apiProduct.dimensions,
            warrantyInformation: apiProduct.warrantyInformation,
            shippingInformation: apiProduct.shippingInformation,
            returnPolicy: apiProduct.returnPolicy,
            reviews: apiProduct.reviews,
            apiStock: apiProduct.stock, // Update API stock for reference
            lastSyncedAt: new Date()
            // Note: stock and soldQuantity are NOT updated
          });
          updated++;
        } else {
          // New product - insert with initial stock
          await Product.create({
            ...apiProduct,
            externalId: apiProduct.id,
            soldQuantity: 0,
            apiStock: apiProduct.stock,
            isActive: true,
            lastSyncedAt: new Date()
          });
          inserted++;
        }
      } catch (error) {
        console.error(`Error processing product ${apiProduct.id}:`, error.message);
        errors++;
      }
    }
    
    console.log('Sync completed:');
    console.log(`- Updated: ${updated} products`);
    console.log(`- Inserted: ${inserted} new products`);
    console.log(`- Errors: ${errors}`);
    console.log(`- Last sync: ${new Date().toISOString()}`);
    
    process.exit(0);
  } catch (error) {
    console.error('Sync failed:', error);
    process.exit(1);
  }
}

syncProducts();
