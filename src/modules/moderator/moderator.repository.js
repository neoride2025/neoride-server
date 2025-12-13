const Moderator = require('./moderator.model');

module.exports = {
  create(data) {
    return Moderator.create(data);
  },

  findAll() {
    return Moderator.find();
  },

  findById(id) {
    return Moderator.findById(id);
  },

  update(id, data) {
    return Moderator.findByIdAndUpdate(id, data, { new: true });
  },

  remove(id) {
    return Moderator.findByIdAndDelete(id);
  }
};
