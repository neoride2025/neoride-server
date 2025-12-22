const jwt = require("jsonwebtoken");
const config = require("../../config/jwt.config");

const MSG = require("../../constants/response-messages");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next({ statusCode: 401, message: MSG.TOKEN.REFRESH.MISSING });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, config.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return next({ statusCode: 401, message: MSG.TOKEN.REFRESH.INVALID });
  }
};
