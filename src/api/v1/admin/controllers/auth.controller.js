const authService = require("../services/auth.service");
const utilConfig = require("../../../../utils/util-config");
const responseMessage = require("../../../../constants/response-messages");

module.exports = {
  async login(req, res, next) {
    try {
      const result = await authService.adminLogin(req.body);
      const { role, accessToken, refreshToken } = result;
      // set cookie before sending response
      res.cookie("refreshToken", refreshToken, utilConfig.COOKIE_OPTIONS);
      // send response
      res.status(200).json({
        status: 200,
        message: responseMessage.AUTH.LOGIN_SUCCESS,
        role,
        accessToken,
      });
    } catch (err) {
      next(err);
    }
  },

  async refreshToken(req, res, next) {
    try {
      const result = await authService.refreshAccessToken(req);
      const { role, accessToken, refreshToken } = result;
      // set cookie before sending response
      res.cookie("refreshToken", refreshToken, utilConfig.COOKIE_OPTIONS);
      // send response
      res.status(200).json({
        status: 200,
        message: responseMessage.TOKEN.ACCESS.GENERATED,
        role,
        accessToken,
      });
    } catch (err) {
      next(err);
    }
  },

  async logout(req, res, next) {
    try {
      const userId = req.body?.userId;
      await authService.logout(userId, {
        refreshTokenHash: null,
        refreshTokenIssuedAt: null,
      });
      res.clearCookie("refreshToken", utilConfig.COOKIE_OPTIONS);
      res.status(200).json({
        status: 200,
        message: responseMessage.AUTH.LOGOUT_SUCCESS,
      });
    } catch (err) {
      next(err);
    }
  },
};
