const Moderator = require("../../../../models/moderator.model");

module.exports = {
  async findByEmailWithPassword(email) {
    return await Moderator.findOne({ email })
      .select("+password isActive role")
      .populate("role")
      .lean();
  },

  async updateRefreshToken(moderatorId, payload) {
    return Moderator.updateOne({ _id: moderatorId }, { $set: payload }).lean();
  },

  // this will return refresh token as well
  async findModeratorByIdForAuth(id) {
    return await Moderator.findById(id).select("+refreshTokenHash").lean();
  },

};
