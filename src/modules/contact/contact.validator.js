const { isValidEmail } = require("../../validators/common/email");
const { isValidMobile } = require("../../validators/common/mobile");
const { isValidName } = require("../../validators/common/name");
const { isSafeContactMessage } = require("../../validators/common/contact-message");

const MSG = require("../../constants/responseMessages");

exports.validateSubmit = (data, allowedServiceTypes) => {
  let err = new Error();

  // first name is required
  if (!data.fname) {
    err.statusCode = 400;
    err.message = MSG.CONTACT.NAME_REQUIRED;
    throw err;
  }

  // first name should have at least 2 characters
  if (data.fname.length < 2) {
    err.statusCode = 400;
    err.message = MSG.CONTACT.NAME_LENGTH;
    throw err;
  }

  // first name format validation (should not contain numbers or special characters except dot)
  if (!isValidName(data.fname)) {
    err.statusCode = 400;
    err.message = MSG.CONTACT.NAME_INVALID;
    throw err;
  }

  // last name is optional but if provided, validate it
  if (data.lname && !isValidName(data.lname)) {
    err.statusCode = 400;
    err.message = MSG.CONTACT.NAME_INVALID;
    throw err;
  }

  // email is required
  if (!data.email) {
    err.statusCode = 400;
    err.message = MSG.CONTACT.EMAIL_REQUIRED;
    throw err;
  }

  // validate the email address
  if (!isValidEmail(data.email)) {
    err.statusCode = 400;
    err.message = MSG.CONTACT.EMAIL_INVALID;
    throw err;
  }

  // mobile is required
  if (!data.mobile) {
    err.statusCode = 400;
    err.message = MSG.CONTACT.MOBILE_REQUIRED;
    throw err;
  }

  // validate the mobile number
  if (!isValidMobile(data.mobile)) {
    err.statusCode = 400;
    err.message = MSG.CONTACT.MOBILE_INVALID;
    throw err;
  }

  // check the service type is in the list of allowed service types
  if (!allowedServiceTypes.includes(data.serviceType)) {
    err.statusCode = 400;
    err.message = MSG.CONTACT.SERVICE_TYPE_REQUIRED;
    throw err;
  }

  if (!data.message) {
    err.statusCode = 400;
    err.message = MSG.CONTACT.MESSAGE_REQUIRED;
    throw err;
  }

  // check the message for unsafe characters
  if (!isSafeContactMessage(data.message)) {
    err.statusCode = 400;
    err.message = MSG.CONTACT.MESSAGE_REQUIRED;
    throw err;
  }
};
