const Policy = require('./policy.model');

module.exports = {
  upsert(type, content) {
    return Policy.findOneAndUpdate(
      { type },
      { content },
      { upsert: true, new: true }
    );
  },

  findAll() {
    return Policy.find();
  },

  findByType(type) {
    return Policy.findOne({ type });
  }
};
