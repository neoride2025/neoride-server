const MSG = require("../../../../constants/response-messages");
const authService = require("../services/auth.service");
const moderatorRepo = require("../repositories/auth.repository");

const { COOKIE_OPTIONS } = require("../../../../utils/util-config");

exports.login = async (req, res, next) => {
  try {
    const result = await authService.login({
      repo: moderatorRepo,
      credentials: req.body
    });
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
