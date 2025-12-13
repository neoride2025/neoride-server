const User = require('./user.model');

module.exports = {
  create(data) {
    return User.create(data);
  },

  findById(id) {
    return User.findById(id);
  },

  findAll() {
    return User.find();
  },

  update(id, data) {
    return User.findByIdAndUpdate(id, data, { new: true });
  },

  remove(id) {
    return User.findByIdAndDelete(id);
  }
};
