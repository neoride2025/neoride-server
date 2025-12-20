const repo = require('./role.repository');

module.exports = {
  createRole(data) {
    return repo.create(data);
  },

  listRoles() {
    return repo.findAll();
  },

  getRole(id) {
    return repo.findById(id);
  },

  updateRole(id, data) {
    return repo.update(id, data);
  },

  deleteRole(id) {
    return repo.remove(id);
  }
};
