const Chat = require('./chat.model');

module.exports = {
  create(data) {
    return Chat.create(data);
  },

  findAll() {
    return Chat.find();
  },

  findById(id) {
    return Chat.findById(id);
  }
};
