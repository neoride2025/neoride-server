const repo = require('./policy.repository');

module.exports = {
  savePolicy(type, content) {
    return repo.upsert(type, content);
  },

  getPolicies() {
    return repo.findAll();
  },

  getPolicy(type) {
    return repo.findByType(type);
  }
};
