const Ride = require('./ride.model');

module.exports = {
  create(data) {
    return Ride.create(data);
  },

  findByUser(userId) {
    return Ride.find({ userId });
  }
};
