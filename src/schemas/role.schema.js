const Joi = require("joi");

const { commonNameRegex, commonKeyRegex } = require("../validators/common/regex");
const MSG = require("../constants/response-messages");
const { DESCRIPTION_MAX_LENGTH } = require("../utils/util-config");

modules.exports = {
  create: Joi.object({
    name: Joi.string().pattern(commonNameRegex).required().messages({
      "string.empty": MSG.ROLE.NAME_REQUIRED,
      "any.required": MSG.ROLE.NAME_REQUIRED,
      "string.pattern.base": MSG.ROLE.NAME_INVALID,
    }),

    description: Joi.string().allow(null, "").max(DESCRIPTION_MAX_LENGTH).messages({
      "string.max": MSG.COMMON.DESCRIPTION_TOO_LONG,
    }),

    permissions: Joi.array().items(Joi.string().uppercase().trim().min(3)).min(1).required().messages({
      "array.min": MSG.ROLE.PERMISSIONS_REQUIRED,
      "any.required": MSG.ROLE.PERMISSIONS_REQUIRED,
    }),

    isSystemRole: Joi.boolean().default(false),
  }),
};

// exports.updateRoleSchema = Joi.object({
//   description: Joi.string().allow(null, "").max(200),

//   permissions: Joi.array().items(Joi.string().uppercase().trim().min(3)).min(1),

//   isActive: Joi.boolean(),
// }).min(1); // 🔴 must update at least one field
