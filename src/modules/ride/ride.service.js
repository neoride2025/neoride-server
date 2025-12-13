const repo = require('./ride.repository');

module.exports = {
  createRide(data) {
    return repo.create(data);
  },

  getRideHistory(userId) {
    return repo.findByUser(userId);
  }
};
