const profileService = require("../../shared/services/profile.service");
const profileRepo = require("../../shared/repositories/profile.repository");

const MSG = require("../../../../constants/response-messages");

exports.getMyProfile = async (req, res, next) => {
  try {
    const profile = await profileService.getMyProfile({ repo: profileRepo, user: req.user });
    res.status(200).json({
      status: 200,
      message: MSG.PROFILE.FOUND,
      data: profile,
    });
  } catch {
    console.log("err : ", err);
    next(err);
  }
};
