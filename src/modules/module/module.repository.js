const Module = require('./module.model');

module.exports = {
  create(data) {
    return Module.create(data);
  },

  findAll() {
    return Module.find();
  },

  findById(id) {
    return Module.findById(id);
  },

  update(id, data) {
    return Module.findByIdAndUpdate(id, data, { new: true });
  },

  remove(id) {
    return Module.findByIdAndDelete(id);
  }
};
