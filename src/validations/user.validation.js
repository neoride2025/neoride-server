const Joi = require("joi");

// message: only letters, numbers, space, . , allowed
const messageRegex = /^[a-zA-Z0-9 .,]+$/;

exports.createUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  mobile: Joi.string().required(),
  message: Joi.string().regex(messageRegex).required()
});

exports.updateUserSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email(),
  mobile: Joi.string(),
  message: Joi.string().regex(messageRegex)
});
