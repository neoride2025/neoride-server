const mongoose = require('mongoose');

const ServiceTypeSchema = new mongoose.Schema(
  {
    key: { type: String, required: true, unique: true }, // eg: ride, delivery
    label: { type: String, required: true },             // eg: Ride Booking
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('ServiceType', ServiceTypeSchema, 'service_types');
