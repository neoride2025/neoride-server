const User = require("../../modules/user/user.model");

module.exports = {
  // exports.findUserByEmail = async (email) => {
  //   return User.findOne({ email });
  // };

  async findUserByEmail(email) {
    return await User.findOne({ email });
  },

  async findUserByUsrId(userId) {
    return await User.findOne({ userId });
  },

  updateUserRefreshToken(userId, refreshToken) {
    return User.findOneAndUpdate({ _id: userId }, { refreshToken });
  },

  // async login(payload) {
  //   return { success: true };
  // },

  async register(payload) {
    return await User.create(payload);
  },

  // async verifyOtp(payload) {
  //   return { success: true };
  // },

  // async resetPassword(payload) {
  //   return { success: true };
  // }

  async logout(userId, payload) {
    return await User.findOneAndUpdate({ _id: userId }, { ...payload });
  },
};
