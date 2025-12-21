const MSG = require("../../constants/response-messages");
const { getPermissionsForRole } = require("../../api/v1/admin/controllers/permission.controller");

module.exports = (requiredPermissions = []) => {
  return async (req, res, next) => {
    const role = req.user.role;
    const permissions = await getPermissionsForRole(role);
    if (!permissions.some((p) => requiredPermissions.includes(p))) {
      return next({ statusCode: 403, message: MSG.COMMON.FORBIDDEN });
    }
    next();
  };
};