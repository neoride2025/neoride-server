const moderatorRepo = require("../repositories/moderator.repository");

const AppError = require("../../../../utils/AppError");
const MSG = require("../../../../constants/response-messages");

module.exports = {
  async createModerator(moderator) {
    try {
      return await moderatorRepo.createModerator(moderator);
    } catch (err) {
      if (err.code === 11000) throw new AppError(400, MSG.MODERATOR.EXISTS);
    }
  },

  async getAllModerators() {
    try {
      return await moderatorRepo.listModerators();
    } catch (err) {
      throw new AppError(500, MSG.COMMON.INTERNAL_ERROR);
    }
  },

  async getModeratorById(id) {
    try {
      return await moderatorRepo.findModeratorById(id);
    } catch (err) {
      throw new AppError(500, MSG.COMMON.INTERNAL_ERROR);
    }
  },
};
