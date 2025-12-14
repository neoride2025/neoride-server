const MSG = require("../../constants/responseMessages");

exports.validateLoginForm = (data) => {
  let err = new Error();

  // email is required
  if (!data.email) {
    err.statusCode = 400;
    err.message = MSG.USER.EMAIL_REQUIRED;
    throw err;
  }

  // password is required
  if (!data.password) {
    err.statusCode = 400;
    err.message = MSG.USER.PASSWORD_REQUIRED;
    throw err;
  }

};
