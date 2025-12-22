const MSG = require("../../../../constants/response-messages");
const AppError = require("../../../../utils/AppError");

const profileRepo = require("../repositories/profile.repository");

module.exports = {
  async getMyProfile(user) {
    try {
      const entity = await profileRepo.getProfileDetails(user.sub);

      if (!entity) throw new AppError(404, MSG.PROFILE.NOT_FOUND);
      return entity;
    } catch (err) {
      throw new AppError(500, MSG.COMMON.INTERNAL_ERROR);
    }
  },
};
