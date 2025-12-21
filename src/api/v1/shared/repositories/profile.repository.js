const Moderator = require("../../../../models/moderator.model");

module.exports = {
  async getProfileDetails(moderatorId) {
    return Moderator.findById(moderatorId).populate("role").lean();
  },
};
