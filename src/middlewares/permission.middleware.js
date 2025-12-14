const Roles = require('../constants/roles');

module.exports.allowPermissions = (...allowed) => {
  return (req, res, next) => {
    if (req.user.role === Roles.ADMIN) return next();

    const ok = allowed.some(p => req.user.permissions.includes(p));
    if (!ok) {
      return next({ statusCode: 403, message: 'Permission denied' });
    }

    next();
  };
};
