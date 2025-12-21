const Joi = require("joi");
const MSG = require("../constants/response-messages");

const { commonNameRegex, commonKeyRegex } = require("../validators/common/regex");

exports.createModuleSchema = Joi.object({
  key: Joi.string().uppercase().trim().pattern(commonKeyRegex).required().messages({
    "string.empty": MSG.MODULE.NAME_REQUIRED,
    "string.pattern.base": MSG.MODULE.NAME_INVALID,
    "any.required": MSG.MODULE.NAME_REQUIRED,
  }),

  name: Joi.string().trim().pattern(commonNameRegex).required().messages({
    "string.empty": MSG.MODULE.NAME_REQUIRED,
    "any.required": MSG.MODULE.NAME_REQUIRED,
  }),

  description: Joi.string().allow("", null).max(200).messages({
    "string.max": MSG.COMMON.DESCRIPTION_TOO_LONG,
  }),

  //   icon: Joi.string().allow("", null).max(50),

  //   order: Joi.number().integer().min(0).default(0),

  //   isActive: Joi.boolean().default(true),

  createdBy: Joi.string().trim().required().messages({
    "string.empty": MSG.MODULE.CREATOR_REQUIRED,
    "any.required": MSG.MODULE.CREATOR_REQUIRED,
  }),

  isSystemModule: Joi.boolean().default(false),
});

// exports.updateModuleSchema = Joi.object({
//   name: Joi.string().trim().min(3).max(50),
//   description: Joi.string().allow("", null).max(200),
//   icon: Joi.string().allow("", null).max(50),
//   order: Joi.number().integer().min(0),
//   isActive: Joi.boolean(),
// }).min(1);
