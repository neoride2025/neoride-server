const Policy = require('../policy/policy.model');

module.exports = {
  async getSetting(type) {
    return Policy.findOne({ type });
  }
};
