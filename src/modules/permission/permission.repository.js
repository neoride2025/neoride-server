const Permission = require('./permission.model');

module.exports = {
  create(data) {
    return Permission.create(data);
  },

  findAll() {
    return Permission.find();
  },

  findById(id) {
    return Permission.findById(id);
  },

  update(id, data) {
    return Permission.findByIdAndUpdate(id, data, { new: true });
  },

  remove(id) {
    return Permission.findByIdAndDelete(id);
  }
};
