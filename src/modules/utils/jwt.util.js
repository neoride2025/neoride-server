const jwt = require("jsonwebtoken");
const jwtConfig = require("../../config/jwt.config");

exports.generateAccessToken = (user) => {
  return jwt.sign(
    {
      userId: user._id,
      role: user.role,
      permissions: user.permissions,
      isActive: user.isActive,
    },
    jwtConfig.ACCESS_TOKEN_SECRET,
    { expiresIn: jwtConfig.ACCESS_TOKEN_EXPIRY }
  );
};

exports.generateRefreshToken = (user) => {
  return jwt.sign({ userId: user._id }, jwtConfig.REFRESH_TOKEN_SECRET, { expiresIn: jwtConfig.REFRESH_TOKEN_EXPIRY });
};
