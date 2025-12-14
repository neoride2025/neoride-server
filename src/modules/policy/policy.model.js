const mongoose = require('mongoose');

const PolicySchema = new mongoose.Schema({
  type: { type: String, enum: ['privacy', 'terms'], required: true },
  content: String
}, { timestamps: true });

module.exports = mongoose.model('Policy', PolicySchema);
