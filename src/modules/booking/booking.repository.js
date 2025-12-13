const Booking = require('./booking.model');

module.exports = {
  create(data) {
    return Booking.create(data);
  },

  findAll() {
    return Booking.find();
  }
};
