const repo = require('./notification.repository');

module.exports = {
  createNotification(data) {
    return repo.create(data);
  },

  listNotifications() {
    return repo.findAll();
  }
};
