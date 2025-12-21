const cache = require("../cache/permission.cache");
const roleService = require("../services/role.service");
const moduleService = require("../../shared/services/module.service");
const permissionService = require("../services/permission.service");
const MSG = require("../../../../constants/response-messages");

const { createPermissionSchema } = require("../../../../schemas/permission.schema");

// will fetch the permissions from DB and store in cache
// if cache has data will return the data and will not touch DB
exports.getPermissionsForRole = async (roleKey) => {
  const cached = cache.get(roleKey);
  if (cached) return cached;

  const permissions = await roleService.getPermissionsByRoleKey(roleKey);
  cache.set(roleKey, permissions);

  return permissions;
};

// function to get all permissions as module grouped
exports.getAllPermissionsAsGroup = async (req, res, next) => {
  try {
    const permissions = await moduleService.getPermissionsGroupedByModule();
    res.status(200).json({
      status: 200,
      message: MSG.PERMISSION.DATA_FOUND,
      data: permissions,
    });
  } catch (err) {
    next(err);
  }
};

// function to create permission
exports.createPermission = async (req, res, next) => {
  try {
    const { error, value } = createPermissionSchema.validate(req.body, {
      abortEarly: true,
      stripUnknown: true,
    });

    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const permission = await permissionService.createPermission(value);
    const newPermission = await permissionService.getPermissionById(permission._id); // will contain populated data
    res.status(201).json({
      status: 201,
      message: MSG.PERMISSION.CREATED,
      data: newPermission,
    });
  } catch (err) {
    next(err);
  }
};

// function to return all permissions
exports.getAllPermissions = async (req, res, next) => {
  try {
    const permissions = await permissionService.getAllPermissions();
    res.status(200).json({
      status: 200,
      message: MSG.PERMISSION.DATA_FOUND,
      data: permissions,
    });
  } catch (err) {
    next(err);
  }
};

exports.getPermissionById = async (req, res, next) => {
  try {
    const permission = await permissionService.getPermissionById(req.params.id);
    res.status(200).json({
      status: 200,
      message: MSG.PERMISSION.DATA_FOUND,
      data: permission,
    });
  } catch (err) {
    next(err);
  }
};
