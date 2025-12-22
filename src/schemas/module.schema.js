const Joi = require("joi");
const responseMessage = require("../constants/response-messages");
const utilConfig = require("../utils/util-config");
const regex = require("../validators/regex");

module.exports = {
  createModuleSchema: Joi.object({
    name: Joi.string().trim().pattern(regex.commonName).required().messages({
      "string.empty": responseMessage.MODULE.NAME_REQUIRED,
      "any.required": responseMessage.MODULE.NAME_REQUIRED,
    }),

    description: Joi.string().allow("", null).max(utilConfig.DESCRIPTION_MAX_LENGTH).messages({
      "string.max": responseMessage.COMMON.DESCRIPTION_TOO_LONG,
    }),

    isSystemModule: Joi.boolean().default(false),
  }),
};

// exports.updateModuleSchema = Joi.object({
//   name: Joi.string().trim().min(3).max(50),
//   description: Joi.string().allow("", null).max(200),
//   icon: Joi.string().allow("", null).max(50),
//   order: Joi.number().integer().min(0),
//   isActive: Joi.boolean(),
// }).min(1);
