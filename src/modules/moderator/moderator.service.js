const repo = require('./moderator.repository');

module.exports = {
  createModerator(data) {
    return repo.create(data);
  },

  listModerators() {
    return repo.findAll();
  },

  getModerator(id) {
    return repo.findById(id);
  },

  updateModerator(id, data) {
    return repo.update(id, data);
  },

  deleteModerator(id) {
    return repo.remove(id);
  }
};
