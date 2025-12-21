const MSG = require("../../../../constants/response-messages");
const authService = require("../services/auth.service");

const { COOKIE_OPTIONS } = require("../../../../utils/util-config");

exports.login = async (req, res, next) => {
  try {
    const result = await authService.login(req.body);
    const { role, accessToken, refreshToken } = result;
    // set cookie before sending response
    res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);
    // send response
    res.status(200).json({
      status: 200,
      message: MSG.AUTH.LOGIN_SUCCESS,
      role,
      accessToken,
    });

    // console.log("result : ", result);
  } catch (err) {
    console.log("err : ", err);
    next(err);
  }
};

exports.refreshToken = async (req, res, next) => {
  try {
    const result = await authService.refreshToken(req);
    const { role, accessToken, refreshToken } = result;
    // set cookie before sending response
    res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);
    // send response
    res.status(200).json({
      status: 200,
      message: MSG.TOKEN.ACCESS.GENERATED,
      role,
      accessToken,
    });
  } catch (err) {
    console.log("err : ", err);
    next(err);
  }
};

exports.logout = async (req, res, next) => {
  try {
    const userId = req.body?.userId;
    await authService.logout(userId, {
      refreshTokenHash: null,
      refreshTokenIssuedAt: null,
    });
    res.clearCookie("refreshToken", COOKIE_OPTIONS);
    res.status(200).json({
      status: 200,
      message: MSG.AUTH.LOGOUT_SUCCESS,
    });
  } catch (err) {
    console.log("err : ", err);
    next(err);
  }
};
