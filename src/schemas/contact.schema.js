const Joi = require("joi");
const MSG = require("../constants/response-messages");

const { nameRegex, emailRegex, mobileRegex, contactMessageRegex } = require("../validators/common/regex");

exports.getContactSchema = (allowedServiceTypes = []) =>
  Joi.object({
    // fname: Joi.string().min(2).pattern(nameRegex).required().messages({
    //   "any.required": MSG.CONTACT.NAME_REQUIRED,
    //   "string.min": MSG.CONTACT.NAME_LENGTH,
    //   "string.pattern.base": MSG.USER.NAME_INVALID,
    // }),

    // lname: Joi.string().pattern(nameRegex).optional().messages({
    //   "string.pattern.base": MSG.USER.NAME_INVALID,
    // }),

    // email: Joi.string().email().pattern(emailRegex).required().messages({
    //   "any.required": MSG.USER.EMAIL_REQUIRED,
    //   "string.email": MSG.USER.EMAIL_INVALID,
    // }),

    // mobile: Joi.string().pattern(mobileRegex).required().messages({
    //   "any.required": MSG.USER.MOBILE_REQUIRED,
    //   "string.pattern.base": MSG.USER.MOBILE_INVALID,
    // }),

    // serviceType: Joi.string()
    //   .valid(...allowedServiceTypes)
    //   .required()
    //   .messages({
    //     "any.only": MSG.CONTACT.SERVICE_TYPE_REQUIRED,
    //     "any.required": MSG.CONTACT.SERVICE_TYPE_REQUIRED,
    //   }),

    // message: Joi.string().min(10).max(1000).pattern(contactMessageRegex).required().messages({
    //   "any.required": MSG.CONTACT.MESSAGE_REQUIRED,
    //   "string.unsafe": MSG.CONTACT.INVALID_MESSAGE,
    // }),
  });
