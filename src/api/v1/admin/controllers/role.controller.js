const roleService = require("../services/role.service");

const MSG = require("../../../../constants/response-messages");

module.exports = {
  // function to create role
  async createRole(req, res, next) {
    try {
      const role = await roleService.createRole(req.validatedBody, req.user.sub); // set created by (value from req.user.sub)
      const roleDetails = await roleService.getRoleDetailsById(role._id); // will hold the detailed document
      res.status(201).json({
        status: 201,
        message: MSG.ROLE.CREATED,
        data: roleDetails,
      });
    } catch (err) {
      next(err);
    }
  },

  // function to get all roles
  async getRoles(req, res, next) {
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
  },
};
