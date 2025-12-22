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
const { createRoleSchema } = require("../../../schemas/role.schema");
const { createPermissionSchema } = require("../../../schemas/permission.schema");

// #region Profile

// to get profile info
router.post("/me", verifyToken, profileCtrl.getMyProfile);

// #endregion

// #region Roles

// to get all roles
router.get("/roles", verifyToken, requireAdmin, requirePermission(["VIEW_ROLES"]), roleCtrl.getRoles);
// to create a role
router.post(
  "/create-role",
  verifyToken,
  requireAdmin,
  requirePermission(["CREATE_ROLE"]),
  schemaValidation(createRoleSchema),
  roleCtrl.createRole
);
// to update a role
// router.put("/roles/:id", verifyToken, requireAdmin, requirePermission(["ROLES_MANAGE"]), roleCtrl.updateRole);
// to delete a role
// router.delete("/roles/:id", verifyToken, requireAdmin, requirePermission(["ROLES_MANAGE"]), roleCtrl.deleteRole);

// #endregion

// #region Modules

// to get all modules
router.get("/modules", verifyToken, requireAdmin, requirePermission(["VIEW_MODULES"]), moduleCtrl.getAllModules);

// to create a module
router.post("/create-module", verifyToken, requireAdmin, requirePermission(["CREATE_MODULE"]), moduleCtrl.createModule);

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
  schemaValidation(createPermissionSchema),
  permissionCtrl.createPermission
);

// #endregion

// #region Moderators

// to get all moderators
router.get("/moderators", verifyToken, requirePermission(["VIEW_MODERATORS"]), moderatorCtrl.getAllModerators);
// to create a moderator
router.post(
  "/create-moderator",
  verifyToken,
  requireAdmin,
  requirePermission(["CREATE_MODERATOR"]),
  moderatorCtrl.createModerator
);

// #endregion

module.exports = router;
