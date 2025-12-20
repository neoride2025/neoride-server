const repo = require('./permission.repository');

module.exports = {
  createPermission(data) {
    return repo.create(data);
  },

  listPermissions() {
    return repo.findAll();
  },

  getPermission(id) {
    return repo.findById(id);
  },

  updatePermission(id, data) {
    return repo.update(id, data);
  },

  deletePermission(id) {
    return repo.remove(id);
  }
};
