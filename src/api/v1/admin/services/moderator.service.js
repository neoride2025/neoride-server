const moderatorRepo = require("../repositories/moderator.repository");
const AppError = require("../../../../utils/AppError");
const responseMessage = require("../../../../constants/response-messages");

module.exports = {
  async createModerator(moderator, sub) {
    try {
      value.createdBy = sub;
      value.isActive = false; // make the moderator inactive at initial time
      return await moderatorRepo.create(moderator);
    } catch (err) {
      if (err.code === 11000) throw new AppError(400, responseMessage.MODERATOR.EXISTS);
    }
  },

  async getAllModerators() {
    try {
      return await moderatorRepo.findAll();
    } catch (err) {
      throw new AppError(500, responseMessage.COMMON.INTERNAL_ERROR);
    }
  },

  async getModeratorDetailsById(id) {
    try {
      return await moderatorRepo.findById(id);
    } catch (err) {
      throw new AppError(500, responseMessage.COMMON.INTERNAL_ERROR);
    }
  },
};
