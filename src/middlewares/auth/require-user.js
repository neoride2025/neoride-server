const MSG = require("../../constants/response-messages");
const ROLES = require("../../constants/roles");

module.exports = (req, res, next) => {
  if (req.auth.type !== ROLES.USER) {
    return next({ statusCode: 403, message: MSG.AUTHORIZATION.USER_ACCESS_ONLY });
  }
  next();
};
