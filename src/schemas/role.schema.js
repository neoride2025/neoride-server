const Joi = require("joi");

const { roleNameRegex } = require("../validators/common/regex");
const MSG = require("../constants/response-messages");

exports.createRoleSchema = Joi.object({
//   name: Joi.string().pattern(roleNameRegex).required().messages({
//     "string.empty": MSG.ROLE.NAME_REQUIRED,
//     "any.required": MSG.ROLE.NAME_REQUIRED,
//   }),

//   description: Joi.string().allow(null, "").max(200).messages({
//     "string.max": MSG.ROLE.DESCRIPTION_LENGTH,
//   }),

//   permissions: Joi.array().items(Joi.string().uppercase().trim().min(3)).min(1).required().messages({
//     "array.min": MSG.ROLE.PERMISSIONS_LENGTH,
//     "any.required": MSG.ROLE.PERMISSIONS_REQUIRED,
//   }),

//   key: Joi.string().uppercase().trim().min(3).required().messages({
//     "string.empty": MSG.ROLE.KEY_REQUIRED,
//     "any.required": MSG.ROLE.KEY_REQUIRED,
//     "string.pattern.base": MSG.ROLE.KEY_PATTERN,
//   }),

//   createdBy: Joi.string().trim().required().messages({
//     "string.empty": MSG.ROLE.CREATOR_NAME_MISSING,
//     "any.required": MSG.ROLE.CREATOR_NAME_MISSING,
//   }),
  
//   isSystemRole: Joi.boolean().default(false),

//   isActive: Joi.boolean().default(true),
// });

// exports.updateRoleSchema = Joi.object({
//   description: Joi.string().allow(null, "").max(200),

//   permissions: Joi.array().items(Joi.string().uppercase().trim().min(3)).min(1),

//   isActive: Joi.boolean(),
}).min(1); // 🔴 must update at least one field
