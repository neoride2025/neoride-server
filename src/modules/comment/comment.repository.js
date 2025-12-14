const Comment = require('./comment.model');

module.exports = {
  create(data) {
    return Comment.create(data);
  },

  findByRef(refId) {
    return Comment.find({ refId });
  }
};
