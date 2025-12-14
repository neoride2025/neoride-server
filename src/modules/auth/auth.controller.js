const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { generateAccessToken, generateRefreshToken } = require("../../modules/utils/jwt.util");

const Roles = require("../../constants/roles");
const MSG = require("../../constants/responseMessages");

const { COOKIE_OPTIONS, MAX_SESSION_DAYS } = require("../../modules/utils/util-config");

const config = require("../../config/jwt.config");
const authService = require("./auth.service");
const { validateLoginForm } = require("./auth.validator");

exports.register = async (req, res, next) => {
  try {
    const { email, password, role } = req.body;

    const exists = await authService.findUserByEmail(email);
    if (exists) {
      let err = new Error();
      err.statusCode = 400;
      err.message = MSG.USER.EMAIL_EXISTS;
      throw err;
    }

    const hashed = await bcrypt.hash(password, 10);

    const newUser = {
      email,
      password: hashed,
      role: role || Roles.USER,
      isActive: role === Roles.MODERATOR ? false : true,
    };
    const user = await authService.register(newUser);
    console.log("new user : ", user);
    res.status(201).json({
      success: true,
      message: MSG.USER.CREATED,
    });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    validateLoginForm(req.body);

    const user = await authService.findUserByEmail(email);
    if (!user) {
      const err = new Error();
      err.statusCode = 400;
      err.message = MSG.LOGIN.USER_NOT_FOUND;
      throw err;
    }

    if (!user?.isActive) {
      const err = new Error();
      err.statusCode = 403;
      err.message = MSG.MODERATOR.NOT_ACTIVATED;
      throw err;
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      const err = new Error();
      err.statusCode = 401;
      err.message = MSG.LOGIN.INVALID_CREDENTIALS;
      throw err;
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    // once got the refresh token, update the user with the refresh token
    authService.updateUserRefreshToken(user._id, refreshToken);

    user.refreshToken = refreshToken;
    user.refreshTokenIssuedAt = new Date(); // once max day reached, this will be null
    await user.save();

    res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);

    res.status(200).json({
      status: 200,
      message: MSG.LOGIN.SUCCESS,
      accessToken,
      user: {
        _id: user._id,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
        isActive: user.isActive,
        permissions: user.permissions,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.refreshToken = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) throw { statusCode: 401, message: MSG.TOKENS.REFRESH_TOKEN.MISSING };

    const payload = jwt.verify(refreshToken, config.REFRESH_TOKEN_SECRET);
    const user = await authService.findUserByUsrId(payload._id);

    // validate the max period of the refresh token
    const sessionAge = (Date.now() - user.refreshTokenIssuedAt) / (1000 * 60 * 60 * 24);

    // if the login session is max than the pre set session days
    if (sessionAge > MAX_SESSION_DAYS) {
      user.refreshToken = null; // set user refresh token as null (force user to re-login)
      await user.save();
      throw { statusCode: 401, message: MSG.AUTH.SESSION_EXPIRED };
    }

    if (!user || user.refreshToken !== refreshToken) {
      throw { statusCode: 403, message: MSG.TOKENS.REFRESH_TOKEN.INVALID };
    }

    const newAccessToken = generateAccessToken(user);

    // refresh-token update
    const newRefreshToken = generateRefreshToken(user);
    user.refreshToken = newRefreshToken; // ✅ DB UPDATED
    await user.save();

    res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);

    res.status(200).json({ status: 200, accessToken: newAccessToken });
  } catch (err) {
    next(err);
  }
};

exports.logout = async (req, res, next) => {
  try {
    const userId = req.body?.userId;

    // 1️⃣ Invalidate refresh token in DB
    await authService.logout(userId, {
      refreshToken: null,
      refreshTokenIssuedAt: null,
    });

    // 2️⃣ Clear cookie
    res.clearCookie("refreshToken", {
      httpOnly: true,
      sameSite: "lax",
      secure: false, // true in prod (HTTPS)
      path: "/",
    });

    // 3️⃣ Respond
    res.status(200).json({
      status: 200,
      message: MSG.AUTH.LOGOUT_SUCCESS,
    });
  } catch (err) {
    next(err);
  }
};
