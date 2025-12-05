const Ride = require("../models/ride.model");

exports.create = async (rideData) => {
  const ride = new Ride(rideData);
  return ride.save();
};

exports.findById = async (id) => {
  return Ride.findById(id).lean();
};

exports.update = async (id, update) => {
  return Ride.findByIdAndUpdate(id, update, { new: true }).lean();
};

exports.findNearbyDrivers = async (location, radiusMeters = 5000) => {
  // placeholder - implement geo queries in real app (with 2dsphere index)
  // For now return an empty array
  return [];
};
