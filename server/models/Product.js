const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  // External API fields (can be updated by sync)
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  discountPercentage: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
  brand: String,
  category: { type: String, required: true },
  thumbnail: String,
  images: [String],
  tags: [String],
  weight: Number,
  dimensions: {
    width: Number,
    height: Number,
    depth: Number
  },
  warrantyInformation: String,
  shippingInformation: String,
  returnPolicy: String,
  reviews: [{
    rating: Number,
    comment: String,
    date: { type: Date, default: Date.now },
    reviewerName: String,
    reviewerEmail: String
  }],
  
  // Business-critical fields (DB is source of truth)
  stock: { type: Number, required: true, min: 0 },
  soldQuantity: { type: Number, default: 0, min: 0 },
  
  // Optional: API stock for reference
  apiStock: { type: Number },
  
  // Management fields
  isActive: { type: Boolean, default: true },
  lastSyncedAt: { type: Date },
  externalId: { type: Number, unique: true, sparse: true } // DummyJSON ID
}, {
  timestamps: true
});

// Index for performance
productSchema.index({ category: 1, isActive: 1 });
productSchema.index({ externalId: 1 });

module.exports = mongoose.model('Product', productSchema);
