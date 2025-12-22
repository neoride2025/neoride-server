const cache = require("../cache/permission.cache");
const roleService = require("../services/role.service");
const moduleService = require("../../shared/services/module.service");
const permissionService = require("../services/permission.service");
const responseMessage = require("../../../../constants/response-messages");

module.exports = {
  // function to create permission
  async createPermission(req, res, next) {
    try {
      const permission = await permissionService.createPermission(req.validatedBody, req.user.sub); // set created by (value from req.user.sub)
      const newPermission = await permissionService.getPermissionDetailsById(permission._id); // will contain populated data
      res.status(201).json({
        status: 201,
        message: responseMessage.PERMISSION.CREATED,
        data: newPermission,
      });
    } catch (err) {
      next(err);
    }
  },

  // will fetch the permissions from DB and store in cache
  // if cache has data will return the data and will not touch DB
  async getPermissionsForRole(roleKey) {
    const cached = cache.get(roleKey);
    if (cached) return cached;

    const permissions = await roleService.getPermissionsByRoleKey(roleKey);
    cache.set(roleKey, permissions);

    return permissions;
  },

  // function to get all permissions as module grouped
  async getAllPermissionsAsGroup(req, res, next) {
    try {
      const permissions = await moduleService.getPermissionsGroupedByModule();
      res.status(200).json({
        status: 200,
        message: responseMessage.PERMISSION.DATA_FOUND,
        data: permissions,
      });
    } catch (err) {
      next(err);
    }
  },

  // function to return all permissions
  async getAllPermissions(req, res, next) {
    try {
      const permissions = await permissionService.getAllPermissions();
      res.status(200).json({
        status: 200,
        message: responseMessage.PERMISSION.DATA_FOUND,
        data: permissions,
      });
    } catch (err) {
      next(err);
    }
  },

  // function to get permission by passing the entry id
  async getPermissionById(req, res, next) {
    try {
      const permission = await permissionService.getPermissionDetailsById(req.params.id);
      res.status(200).json({
        status: 200,
        message: responseMessage.PERMISSION.FOUND,
        data: permission,
      });
    } catch (err) {
      next(err);
    }
  },
};
