const jwt = require('jsonwebtoken');
const config = require('../config/jwt.config');

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return next({ statusCode: 401, message: 'Token missing' });
  }

  try {
    req.user = jwt.verify(token, config.ACCESS_TOKEN_SECRET);
    next();
  } catch(err) {
    // console.log(err)
    next({ statusCode: 401, message: 'Invalid or expired token' });
  }
};
