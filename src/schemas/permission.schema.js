const Joi = require("joi");
const MSG = require("../constants/response-messages");

const { commonNameRegex, commonKeyRegex } = require("../validators/common/regex");

exports.createPermissionSchema = Joi.object({
  key: Joi.string().uppercase().trim().pattern(commonKeyRegex).required().messages({
    "string.empty": MSG.PERMISSION.KEY_REQUIRED,
    "any.required": MSG.PERMISSION.KEY_REQUIRED,
    "string.pattern.base": MSG.PERMISSION.KEY_INVALID,
  }),

  label: Joi.string().trim().min(3).max(25).pattern(commonNameRegex).required().messages({
    "string.empty": MSG.COMMON.NAME_REQUIRED,
    "string.min": MSG.COMMON.NAME_MIN_LENGTH,
    "string.max": MSG.COMMON.NAME_MAX_LENGTH,
  }),

  description: Joi.string().allow("", null).max(200).messages({
    "string.max": MSG.COMMON.DESCRIPTION_TOO_LONG,
  }),

  module: Joi.string() // ObjectId
    .length(24)
    .hex()
    .required()
    .messages({
      "string.length": MSG.MODULE.NOT_FOUND,
      "any.required": MSG.MODULE.NOT_FOUND,
    }),

  createdBy: Joi.string().trim().required().messages({
    "string.empty": MSG.MODULE.CREATOR_REQUIRED,
    "any.required": MSG.MODULE.CREATOR_REQUIRED,
  }),

  isActive: Joi.boolean().default(true),
});

exports.updatePermissionSchema = Joi.object({
  label: Joi.string().trim().min(3).max(100).messages({
    "string.min": MSG.COMMON.NAME_MIN_LENGTH,
    "string.max": MSG.COMMON.NAME_MAX_LENGTH,
  }),

  description: Joi.string().allow("", null).max(200).messages({
    "string.max": MSG.COMMON.DESCRIPTION_TOO_LONG,
  }),

  module: Joi.string().length(24).hex().messages({
    "string.length": MSG.MODULE.NOT_FOUND,
  }),

  isActive: Joi.boolean(),
}).min(1);
