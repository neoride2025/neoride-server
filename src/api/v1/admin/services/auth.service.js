const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const config = require("../../../../config/jwt.config");
const { generateAccessToken, generateRefreshToken } = require("../../../../utils/jwt.util");
const AppError = require("../../../../utils/AppError");

const authRepo = require("../repositories/auth.repository");

const MSG = require("../../../../constants/response-messages");
const ROLES = require("../../../../constants/roles");

module.exports = {
  async adminLogin(credentials) {
    try {
      const { email, password } = credentials;

      // Fetch entity (Moderator)
      const moderator = await authRepo.findByEmailWithPassword(email);
      if (!moderator) throw new AppError(400, MSG.AUTH.USER_NOT_FOUND);

      if (!moderator.isActive) throw new AppError(403, MSG.MODERATOR.NOT_ACTIVATED);

      // Password check
      const match = await bcrypt.compare(password, moderator.password);
      if (!match) throw new AppError(401, MSG.AUTH.INVALID_CREDENTIALS);
      const role = moderator.role.key; // moderator's DB role(key)
      if (role === ROLES.USER) throw new AppError(403, MSG.AUTH.USER_NOT_FOUND);

      const accessToken = generateAccessToken({
        sub: moderator._id.toString(),
        type: ROLES.ADMIN, // set the user type as ADMIN (only this type allowed to login admin panel & access it's data)
      });
      const refreshToken = generateRefreshToken(moderator._id);

      // Store hashed refresh token
      const refreshTokenHash = await bcrypt.hash(refreshToken, 10);
      await authRepo.updateRefreshToken(moderator._id, {
        refreshTokenHash,
        refreshTokenIssuedAt: new Date(),
      });

      return {
        accessToken,
        refreshToken,
        role,
      };
    } catch (err) {
      throw new AppError(500, MSG.COMMON.INTERNAL_ERROR);
    }
  },

  async refreshAccessToken(req) {
    try {
      const refreshToken = req.cookies.refreshToken;
      if (!refreshToken) throw new AppError(401, MSG.TOKEN.REFRESH.MISSING);

      const payload = jwt.verify(refreshToken, config.REFRESH_TOKEN_SECRET);
      const moderator = await authRepo.findModeratorByIdForAuth(payload._id);
      // validate the max period of the refresh token
      const sessionAge = (Date.now() - moderator.refreshTokenIssuedAt) / (1000 * 60 * 60 * 24);
      // if the login session is max than the pre set session days
      if (sessionAge > MAX_SESSION_DAYS) {
        await authRepo.updateRefreshToken(moderator._id, {
          refreshTokenHash: null, // set moderator refresh token as null (force moderator to re-login)
        });
        throw new AppError(401, MSG.AUTH.SESSION_EXPIRED);
      }

      if (!moderator || !moderator.refreshTokenHash) throw new AppError(403, MSG.TOKEN.REFRESH.INVALID);

      const isValid = await bcrypt.compare(refreshToken, moderator.refreshTokenHash);

      if (!isValid) throw new AppError(403, MSG.TOKEN.REFRESH.INVALID);

      const accessToken = generateAccessToken({
        sub: moderator._id,
        type: ROLES.ADMIN,
      });

      // refresh-token update (every access token request time refresh token will be updated)
      const newRefreshToken = generateRefreshToken(moderator._id);

      const refreshTokenHash = await bcrypt.hash(newRefreshToken, 10);
      await authRepo.updateRefreshToken(moderator._id, {
        refreshTokenHash,
        refreshTokenIssuedAt: new Date(),
      });

      return {
        accessToken,
        refreshToken: newRefreshToken,
        role: moderator.role.key,
      };
    } catch (err) {
      throw new AppError(500, MSG.COMMON.INTERNAL_ERROR);
    }
  },

  async logout(userId, data) {
    try {
      return await authRepo.updateRefreshToken(userId, data);
    } catch (err) {
      throw new AppError(500, MSG.COMMON.INTERNAL_ERROR);
    }
  },
};
