const MSG = require("../../constants/response-messages");
const ROLES = require("../../constants/roles");

module.exports = (req, res, next) => {
  console.log('req.user : ', req.user);
  if (req.user.role !== ROLES.ADMIN) {
    return next({ statusCode: 403, message: MSG.COMMON.ONLY_ADMIN });
  }
  next();
};
