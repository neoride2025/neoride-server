const Notification = require('./notification.model');

module.exports = {
  create(data) {
    return Notification.create(data);
  },

  findAll() {
    return Notification.find();
  }
};
