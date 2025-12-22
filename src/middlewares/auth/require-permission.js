const MSG = require("../../constants/response-messages");
const { getPermissionsForRole } = require("../../api/v1/admin/controllers/permission.controller");

module.exports = (requiredPermissions = []) => {
  return async (req, res, next) => {
    const type = req.user.type;
    const permissions = await getPermissionsForRole(type);
    if (!permissions.some((p) => requiredPermissions.includes(p))) {
      return next({ statusCode: 403, message: MSG.COMMON.FORBIDDEN });
    }
    next();
  };
};