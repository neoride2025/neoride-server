const profileService = require("../../shared/services/profile.service");

const MSG = require("../../../../constants/response-messages");

module.exports = {
  async getMyProfile(req, res, next) {
    try {
      const profile = await profileService.getMyProfile(req.user);
      res.status(200).json({
        status: 200,
        message: MSG.PROFILE.FOUND,
        data: profile,
      });
    } catch {
      next(err);
    }
  },
};
