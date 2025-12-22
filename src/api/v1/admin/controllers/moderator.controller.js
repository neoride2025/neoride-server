const moderatorService = require("../services/moderator.service");
const responseMessage = require("../../../../constants/response-messages");
const moderatorSchema = require("../../../../schemas/moderator.schema");

module.exports = {
  async createModerator(req, res, next) {
    try {
      const { error, value } = moderatorSchema.create.validate(req.body, {
        abortEarly: true,
        stripUnknown: true,
      });

      if (error) {
        return res.status(400).json({
          status: 400,
          message: error.details[0].message,
        });
      }
      // value is sanitized & safe
      // set created by (value from req.user.sub)
      value.createdBy = req.user.sub;
      value.isActive = false; // make the moderator inactive at initial time
      // hash the word before store

      const moderator = await moderatorService.createModerator(value);
      const newModerator = await moderatorService.getModeratorById(moderator._id); // will contain populated data
      res.status(201).json({
        status: 201,
        message: responseMessage.MODERATOR.CREATED,
        data: newModerator,
      });
    } catch (err) {
      next(err);
    }
  },

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
