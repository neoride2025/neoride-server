const repo = require('./module.repository');

module.exports = {
  createModule(data) {
    return repo.create(data);
  },

  listModules() {
    return repo.findAll();
  },

  getModule(id) {
    return repo.findById(id);
  },

  updateModule(id, data) {
    return repo.update(id, data);
  },

  deleteModule(id) {
    return repo.remove(id);
  }
};
