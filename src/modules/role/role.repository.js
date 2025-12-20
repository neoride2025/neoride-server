const Role = require('./role.model');

module.exports = {
  create(data) {
    return Role.create(data);
  },

  findAll() {
    return Role.find();
  },

  findById(id) {
    return Role.findById(id);
  },

  update(id, data) {
    return Role.findByIdAndUpdate(id, data, { new: true });
  },

  remove(id) {
    return Role.findByIdAndDelete(id);
  }
};
