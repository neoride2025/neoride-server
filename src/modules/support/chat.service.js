const repo = require('./chat.repository');

module.exports = {
  startChat(data) {
    return repo.create(data);
  },

  listChats() {
    return repo.findAll();
  },

  getChat(id) {
    return repo.findById(id);
  }
};
