const Joi = require("joi");
const regex = require("../validators/regex");
const responseMessage = require("../constants/response-messages");
const utilConfig= require("../utils/util-config");

module.exports = {
  create: Joi.object({
    name: Joi.string().pattern(regex.commonName).required().messages({
      "string.empty": responseMessage.ROLE.NAME_REQUIRED,
      "any.required": responseMessage.ROLE.NAME_REQUIRED,
      "string.pattern.base": responseMessage.ROLE.NAME_INVALID,
    }),

    description: Joi.string().allow(null, "").max(utilConfig.DESCRIPTION_MAX_LENGTH).messages({
      "string.max": responseMessage.COMMON.DESCRIPTION_TOO_LONG,
    }),

    permissions: Joi.array().items(Joi.string().uppercase().trim().min(3)).min(1).required().messages({
      "array.min": responseMessage.ROLE.PERMISSIONS_REQUIRED,
      "any.required": responseMessage.ROLE.PERMISSIONS_REQUIRED,
    }),

    isSystemRole: Joi.boolean().default(false),
  }),
};

// exports.updateRoleSchema = Joi.object({
//   description: Joi.string().allow(null, "").max(200),

//   permissions: Joi.array().items(Joi.string().uppercase().trim().min(3)).min(1),

//   isActive: Joi.boolean(),
// }).min(1); // 🔴 must update at least one field
