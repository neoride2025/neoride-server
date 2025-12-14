const { isValidEmail } = require("../../validators/common/email");
const { isValidMobile } = require("../../validators/common/mobile");
const { isValidName } = require("../../validators/common/name");
const { isValidPassword } = require("../../validators/common/pwd");

const MSG = require("../../constants/responseMessages");

exports.validateSubmit = (data) => {
  let err = new Error();

  // name is required
  if (!data.name) {
    err.statusCode = 400;
    err.message = MSG.USER.NAME_REQUIRED;
    throw err;
  }

  // name should have at least 2 characters
  if (data.name.length < 2) {
    err.statusCode = 400;
    err.message = MSG.USER.NAME_LENGTH;
    throw err;
  }

  // name format validation (should not contain numbers or special characters except dot)
  if (!isValidName(data.name)) {
    err.statusCode = 400;
    err.message = MSG.CONTACT.NAME_INVALID;
    throw err;
  }

  // email is required
  if (!data.email) {
    err.statusCode = 400;
    err.message = MSG.USER.EMAIL_REQUIRED;
    throw err;
  }

  // validate the email address
  if (!isValidEmail(data.email)) {
    err.statusCode = 400;
    err.message = MSG.USER.EMAIL_INVALID;
    throw err;
  }

  // mobile is required
  if (!data.mobile) {
    err.statusCode = 400;
    err.message = MSG.USER.MOBILE_REQUIRED;
    throw err;
  }

  // validate the mobile number
  if (!isValidMobile(data.mobile)) {
    err.statusCode = 400;
    err.message = MSG.USER.MOBILE_INVALID;
    throw err;
  }

  // validate password
  if (!data.password) {
    err.statusCode = 400;
    err.message = MSG.USER.PASSWORD_REQUIRED;
    throw err;
  }

  // password length & pattern validation
  if (!isValidPassword(data.password)) {
    err.statusCode = 400;
    err.message = MSG.USER.PASSWORD_INVALID;
    throw err;
  }

  // confirm password
  if (data.password !== data.confirmPassword) {
    err.statusCode = 400;
    err.message = MSG.USER.PASSWORD_MISMATCH;
    throw err;
  }
};
