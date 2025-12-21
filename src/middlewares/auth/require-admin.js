const MSG = require("../../constants/response-messages");
const ROLES = require("../../constants/roles");

module.exports = (req, res, next) => {
  if (req.user.type !== ROLES.ADMIN) {
    return next({ statusCode: 403, message: MSG.AUTHORIZATION.ADMIN_ACCESS_ONLY });
  }
  next();
};
