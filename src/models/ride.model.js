const mongoose = require("mongoose");

const RideSchema = new mongoose.Schema({
  riderId: { type: String, required: true },
  driverId: { type: String },
  from: {
    lat: Number,
    lng: Number,
    address: String
  },
  to: {
    lat: Number,
    lng: Number,
    address: String
  },
  fare: { type: Number },
  status: { type: String, enum: ["requested","accepted","ongoing","completed","cancelled"], default: "requested" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Ride", RideSchema);
