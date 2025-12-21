const MSG = require("../../../../constants/response-messages");

module.exports = {
  async getMyProfile({ repo, user }) {
    const entity = await repo.getProfileDetails(user.sub);

    if (!entity) throw { statusCode: 404, message: MSG.PROFILE.NOT_FOUND };
    return entity;
  },
};
