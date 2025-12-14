// middlewares/role.middleware.js
const Roles = require('../constants/roles');

module.exports.allowRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !req.user.role) {
      return next({ statusCode: 401, message: 'Unauthorized' });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return next({ statusCode: 403, message: 'Access denied' });
    }

    next();
  };
};
