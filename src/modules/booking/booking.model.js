const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  rideId: mongoose.Types.ObjectId,
  amount: Number,
  status: String
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);
