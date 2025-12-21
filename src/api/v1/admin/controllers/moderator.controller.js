const roleService = require("../services/role.service");

const MSG = require("../../../../constants/response-messages");

const { createRoleSchema } = require("../../../../schemas/role.schema");

exports.createModerator = async (req, res, next) => {
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
    // set created by (value from req.user.sub)
    value.createdBy = req.user.sub;
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

exports.getAllModerators = async (req, res, next) => {
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
