const Joi = require("joi");
const responseMessage = require("../constants/response-messages");
const utilConfig = require("../utils/util-config");
const regex = require("../validators/regex");

module.exports = {
  create: Joi.object({
    name: Joi.string().trim().pattern(regex.name).required().messages({
      "string.empty": responseMessage.MODERATOR.NAME_REQUIRED,
      "string.min": responseMessage.COMMON.NAME_MIN_LENGTH,
      "string.max": responseMessage.COMMON.NAME_MAX_LENGTH,
      "any.required": responseMessage.COMMON.NAME_REQUIRED,
    }),

    email: Joi.string().email().lowercase().pattern(regex.email).required().messages({
      "string.email": responseMessage.COMMON.EMAIL_INVALID,
      "any.required": responseMessage.COMMON.EMAIL_REQUIRED,
    }),

    mobile: Joi.string().pattern(regex.mobile).allow(null, "").messages({
      "string.empty": responseMessage.COMMON.MOBILE_REQUIRED,
      "any.required": responseMessage.COMMON.MOBILE_REQUIRED,
      "string.pattern.base": responseMessage.COMMON.MOBILE_INVALID,
    }),

    password: Joi.string().min(utilConfig.PASSWORD_MIN_LENGTH).max(utilConfig.PASSWORD_MAX_LENGTH).required().messages({
      "string.min": responseMessage.COMMON.PASSWORD_WEAK,
      "any.required": responseMessage.COMMON.PASSWORD_REQUIRED,
    }),

    role: Joi.string() // ObjectId as string
      .length(24)
      .hex()
      .required()
      .messages({
        "string.length": responseMessage.MODERATOR.ROLE_MISSING,
        "any.required": responseMessage.MODERATOR.ROLE_MISSING,
      }),

    isActive: Joi.boolean().default(true),
  }),
};

// exports.updateModeratorSchema = Joi.object({
// name: Joi.string().trim().min(2).max(50),
// mobile: Joi.string()
//   .pattern(/^[0-9]{10,15}$/)
//   .allow(null, ""),
// isActive: Joi.boolean(),
// role: Joi.string().length(24).hex(),
// }).min(1);
