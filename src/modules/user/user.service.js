const repo = require('./user.repository');

module.exports = {
  createUser(data) {
    return repo.create(data);
  },

  listUsers() {
    return repo.findAll();
  },

  getUser(id) {
    return repo.findById(id);
  },

  updateUser(id, data) {
    return repo.update(id, data);
  },

  deleteUser(id) {
    return repo.remove(id);
  }
};
