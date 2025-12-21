const roleService = require("../services/role.service");

const MSG = require("../../../../constants/response-messages");

const { createRoleSchema } = require("../../../../schemas/role.schema");

exports.createRole = async (req, res, next) => {
  try {
    const { error, value } = createRoleSchema.validate(req.body, {
      abortEarly: true,
      stripUnknown: true,
    });

    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    // value is sanitized & safe
    const role = await roleService.createRole(value);
    res.status(201).json({
      status: 201,
      message: MSG.ROLE.CREATED,
      data: role,
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllRoles = async (req, res, next) => {
  try {
    const roles = await roleService.getAllRoles();
    res.status(200).json({
      status: 200,
      message: MSG.ROLE.DATA_FOUND,
      data: roles,
    });
  } catch (err) {
    next(err);
  }
};
