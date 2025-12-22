const Joi = require("joi");
const MSG = require("../constants/response-messages");
const { DESCRIPTION_MAX_LENGTH } = require("../utils/util-config");

const { commonNameRegex } = require("../validators/common/regex");

exports.createPermissionSchema = Joi.object({
  label: Joi.string().trim().pattern(commonNameRegex).required().messages({
    "string.empty": MSG.COMMON.NAME_REQUIRED,
    "string.min": MSG.COMMON.NAME_MIN_LENGTH,
    "string.max": MSG.COMMON.NAME_MAX_LENGTH,
  }),

  description: Joi.string().allow("", null).max(DESCRIPTION_MAX_LENGTH).messages({
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

  isActive: Joi.boolean().default(true),
});

// exports.updatePermissionSchema = Joi.object({
//   label: Joi.string().trim().min(3).max(100).messages({
//     "string.min": MSG.COMMON.NAME_MIN_LENGTH,
//     "string.max": MSG.COMMON.NAME_MAX_LENGTH,
//   }),

//   description: Joi.string().allow("", null).max(200).messages({
//     "string.max": MSG.COMMON.DESCRIPTION_TOO_LONG,
//   }),

//   module: Joi.string().length(24).hex().messages({
//     "string.length": MSG.MODULE.NOT_FOUND,
//   }),

//   isActive: Joi.boolean(),
// }).min(1);
