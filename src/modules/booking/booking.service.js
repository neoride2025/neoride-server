const repo = require('./booking.repository');

module.exports = {
  createBooking(data) {
    return repo.create(data);
  },

  listBookings() {
    return repo.findAll();
  }
};
