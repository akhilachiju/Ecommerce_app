const mongoose = require('mongoose');

const syncLogSchema = new mongoose.Schema({
  syncType: { type: String, enum: ['manual', 'scheduled'], required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date },
  status: { type: String, enum: ['running', 'completed', 'failed'], default: 'running' },
  productsUpdated: { type: Number, default: 0 },
  productsInserted: { type: Number, default: 0 },
  errors: { type: Number, default: 0 },
  errorMessages: [String],
  duration: { type: Number }, // milliseconds
}, {
  timestamps: true
});

module.exports = mongoose.model('SyncLog', syncLogSchema);
