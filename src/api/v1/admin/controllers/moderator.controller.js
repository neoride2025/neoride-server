const moderatorService = require("../services/moderator.service");
const responseMessage = require("../../../../constants/response-messages");

module.exports = {
  // function to create moderator
  async createModerator(req, res, next) {
    try {
      const moderator = await moderatorService.createModerator(req.validatedBody, req.user.sub);
      const moderatorDetails = await moderatorService.getModeratorDetailsById(moderator._id); // will contain populated data
      res.status(201).json({
        status: 201,
        message: responseMessage.MODERATOR.CREATED,
        data: moderatorDetails,
      });
    } catch (err) {
      next(err);
    }
  },

  // function to get all moderators
  async getModerators(req, res, next) {
    try {
      const moderators = await moderatorService.getAllModerators();
      res.status(200).json({
        status: 200,
        message: responseMessage.MODERATOR.DATA_FOUND,
        data: moderators,
      });
    } catch (err) {
      next(err);
    }
  },
};
