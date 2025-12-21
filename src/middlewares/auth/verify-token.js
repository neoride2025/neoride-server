const jwt = require("jsonwebtoken");
const config = require("../../config/jwt.config");

const MSG = require("../../constants/response-messages");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
console.log('auth header : ', authHeader);
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next({ statusCode: 401, message: MSG.TOKEN.REFRESH_TOKEN.MISSING });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, config.ACCESS_TOKEN_SECRET);
    console.log('decoded : ', decoded);
    req.user = decoded;
    next();
  } catch (err) {
    console.log('err  : ',err);
    return next({ statusCode: 401, message: MSG.TOKEN.REFRESH.INVALID });
  }
};
