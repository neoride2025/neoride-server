const express = require("express");
const router = express.Router();

const profileCtrl = require("../../../api/v1/admin/controllers/profile.controller");
const permissionCtrl = require("../../../api/v1/admin/controllers/permission.controller");
const moduleCtrl = require("../../../api/v1/admin/controllers/module.controller");
const roleCtrl = require("../../../api/v1/admin/controllers/role.controller");
const moderatorCtrl = require("../../../api/v1/admin/controllers/moderator.controller");

const verifyToken = require("../../../middlewares/auth/verify-access-token");
const requireAdmin = require("../../../middlewares/auth/require-admin");
const requirePermission = require("../../../middlewares/auth/require-permission");

const schemaValidation = require("../../../middlewares/schema.validation");

const createRoleSchema = require("../../../schemas/role.schema");
const createPermissionSchema = require("../../../schemas/permission.schema");
const createModuleSchema = require("../../../schemas/module.schema");
const moderatorSchema = require("../../../schemas/moderator.schema");

// #region Profile

// to get profile info
router.post("/me", verifyToken, profileCtrl.getMyProfile);

// #endregion

// #region Roles

// to create a role
router.post(
  "/create-role",
  verifyToken,
  requireAdmin,
  requirePermission(["CREATE_ROLE"]),
  schemaValidation(createRoleSchema.create),
  roleCtrl.createRole
);
// to get all roles
router.get("/roles", verifyToken, requireAdmin, requirePermission(["VIEW_ROLES"]), roleCtrl.getRoles);
// to update a role
// router.put("/roles/:id", verifyToken, requireAdmin, requirePermission(["ROLES_MANAGE"]), roleCtrl.updateRole);
// to delete a role
// router.delete("/roles/:id", verifyToken, requireAdmin, requirePermission(["ROLES_MANAGE"]), roleCtrl.deleteRole);

// #endregion

// #region Modules

// to create a module
router.post(
  "/create-module",
  verifyToken,
  requireAdmin,
  requirePermission(["CREATE_MODULE"]),
  schemaValidation(createModuleSchema.create),
  moduleCtrl.createModule
);
// to get all modules
router.get("/modules", verifyToken, requireAdmin, requirePermission(["VIEW_MODULES"]), moduleCtrl.getModules);

// #endregion

// #region Permissions

// to get all permissions
router.get(
  "/grouped-permissions",
  verifyToken,
  requireAdmin,
  requirePermission(["VIEW_PERMISSIONS"]),
  permissionCtrl.getAllPermissionsAsGroup
);

// to get all permissions
router.get(
  "/permissions",
  verifyToken,
  requireAdmin,
  requirePermission(["VIEW_PERMISSIONS"]),
  permissionCtrl.getAllPermissions
);

// to create a permission
router.post(
  "/create-permission",
  verifyToken,
  requireAdmin,
  requirePermission(["CREATE_PERMISSION"]),
  schemaValidation(createPermissionSchema.create),
  permissionCtrl.createPermission
);

// #endregion

// #region Moderators

// to get all moderators
router.get("/moderators", verifyToken, requirePermission(["VIEW_MODERATORS"]), moderatorCtrl.getModerators);
// to create a moderator
router.post(
  "/create-moderator",
  verifyToken,
  requireAdmin,
  requirePermission(["CREATE_MODERATOR"]),
  schemaValidation(moderatorSchema.create),
  moderatorCtrl.createModerator
);

// #endregion

module.exports = router;
