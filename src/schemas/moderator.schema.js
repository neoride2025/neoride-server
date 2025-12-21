const Joi = require("joi");
const MSG = require("../constants/response-messages");

const { nameRegex, emailRegex, mobileRegex, contactMessageRegex } = require("../validators/common/regex");

exports.createModeratorSchema = Joi.object({
  // name: Joi.string().trim().min(2).max(50).required().messages({
  //   "string.empty": MSG.COMMON.NAME_REQUIRED,
  //   "string.min": MSG.COMMON.NAME_LENGTH_MIN,
  //   "string.max": MSG.COMMON.NAME_LENGTH_MAX,
  //   "any.required": MSG.COMMON.NAME_REQUIRED,
  // }),

  // email: Joi.string().email().lowercase().required().messages({
  //   "string.email": MSG.MODERATOR.EMAIL_INVALID,
  //   "any.required": MSG.MODERATOR.EMAIL_REQUIRED,
  // }),

  // mobile: Joi.string()
  //   .pattern(/^[0-9]{10,15}$/)
  //   .allow(null, "")
  //   .messages({
  //     "string.pattern.base": MSG.MODERATOR.MOBILE_INVALID,
  //   }),

  // password: Joi.string().min(8).max(30).required().messages({
  //   "string.min": MSG.MODERATOR.PASSWORD_WEAK,
  //   "any.required": MSG.MODERATOR.PASSWORD_REQUIRED,
  // }),

  // role: Joi.string() // ObjectId as string
  //   .length(24)
  //   .hex()
  //   .required()
  //   .messages({
  //     "string.length": MSG.MODERATOR.ROLE_INVALID,
  //     "any.required": MSG.MODERATOR.ROLE_REQUIRED,
  //   }),

  // isActive: Joi.boolean().default(true),

  // locationCords: Joi.object({
  //   latitude: Joi.number().min(-90).max(90),
  //   longitude: Joi.number().min(-180).max(180),
  // }).optional(),
});

exports.updateModeratorSchema = Joi.object({
  // name: Joi.string().trim().min(2).max(50),
  // mobile: Joi.string()
  //   .pattern(/^[0-9]{10,15}$/)
  //   .allow(null, ""),
  // isActive: Joi.boolean(),
  // role: Joi.string().length(24).hex(),
}).min(1);
