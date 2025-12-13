const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({
  userId: mongoose.Types.ObjectId,
  status: String,
  source: String,
  destination: String
}, { timestamps: true });

module.exports = mongoose.model('Ride', RideSchema);
