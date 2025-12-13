const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  userId: mongoose.Types.ObjectId,
  amount: Number,
  status: { type: String, enum: ['received', 'refunded', 'failed'] }
}, { timestamps: true });

module.exports = mongoose.model('Payment', PaymentSchema);
