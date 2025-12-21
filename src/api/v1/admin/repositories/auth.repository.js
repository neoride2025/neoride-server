const Moderator = require("../../../../models/moderator.model");

module.exports = {
  async findByEmailWithPassword(email) {
    return Moderator.findOne({ email })
      .select("+password isActive role")
      .populate("role")
      .lean();
  },

  async updateRefreshToken(moderatorId, payload) {
    return Moderator.updateOne({ _id: moderatorId }, { $set: payload });
  },


};
