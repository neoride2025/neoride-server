const repo = require('./comment.repository');

module.exports = {
  addComment(data) {
    return repo.create(data);
  },

  listComments(refId) {
    return repo.findByRef(refId);
  }
};
