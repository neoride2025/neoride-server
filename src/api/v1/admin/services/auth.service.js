const bcrypt = require("bcrypt");
const { generateAccessToken, generateRefreshToken } = require("../../../../utils/jwt.util");

const MSG = require("../../../../constants/response-messages");

module.exports = {
  async login({ repo, credentials }) {
    const { email, password } = credentials;

    // 🔹 1. Fetch entity (User or Moderator)
    const entity = await repo.findByEmailWithPassword(email);

    if (!entity) throw { statusCode: 400, message: MSG.AUTHENTICATION.USER_NOT_FOUND };

    if (!entity.isActive) throw { statusCode: 403, message: MSG.MODERATOR.NOT_ACTIVATED };

    // 🔹 2. Password check
    const match = await bcrypt.compare(password, entity.password);
    console.log('match : ', match);
    if (!match) throw { statusCode: 401, message: MSG.AUTHENTICATION.INVALID_CREDENTIALS };

    const role = entity.role.key;
    if (role === "USER") throw { statusCode: 403, message: MSG.AUTHENTICATION.USER_NOT_FOUND };
    console.log({
      sub: entity._id.toString(), // ✅ subject = user id
      type: "ADMIN",
      role,
    });
    // 🔹 3. Generate tokens
    const accessToken = generateAccessToken({
      sub: entity._id.toString(),
      type: "ADMIN",
      role,
    });
    const refreshToken = generateRefreshToken(entity._id);

    // 🔹 4. Store hashed refresh token
    const refreshTokenHash = await bcrypt.hash(refreshToken, 10);
    await repo.updateRefreshToken(entity._id, {
      refreshTokenHash,
      refreshTokenIssuedAt: new Date(),
    });

    return {
      accessToken,
      refreshToken,
      role,
    };
  },
};
