const express = require("express");
const router = express.Router();

const profileCtrl = require("../../../api/v1/admin/controllers/profile.controller");
const permissionCtrl = require("../../../api/v1/admin/controllers/permission.controller");
const moduleCtrl = require("../../../api/v1/admin/controllers/module.controller");
const roleCtrl = require("../../../api/v1/admin/controllers/role.controller");
const moderatorCtrl = require("../../../api/v1/admin/controllers/moderator.controller");

const verifyToken = require("../../../middlewares/auth/verify-token");
const requireAdmin = require("../../../middlewares/auth/require-admin");
const requirePermission = require("../../../middlewares/auth/require-permission");

// to get profile info
router.post("/me", verifyToken, profileCtrl.getMyProfile);

// to get all permissions
router.get(
  "/grouped-permissions",
  verifyToken,
  requireAdmin,
  requirePermission(["PERMISSIONS_MANAGE"]),
  permissionCtrl.getAllPermissionsAsGroup
);

// #region Roles

// to get all roles
router.get("/roles", verifyToken, requireAdmin, requirePermission(["ROLES_MANAGE"]), roleCtrl.getAllRoles);
// to create a role
router.post("/create-role", verifyToken, requireAdmin, requirePermission(["ROLES_MANAGE"]), roleCtrl.createRole);
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
  requirePermission(["MODULES_MANAGE"]),
  moduleCtrl.createModule
);
// to get all modules
router.get("/modules", verifyToken, requirePermission(["MODULES_MANAGE"]), moduleCtrl.getAllModules);

// #endregion

// #region Permissions

// to get all permissions
router.get("/permissions", verifyToken, requirePermission(["PERMISSIONS_MANAGE"]), permissionCtrl.getAllPermissions);
// to create a permission
router.post(
  "/create-permission",
  verifyToken,
  requirePermission(["PERMISSIONS_MANAGE"]),
  permissionCtrl.createPermission
);

// #endregion

// #region Moderators

// to get all moderators
// router.get("/moderators", verifyToken, requirePermission(["USERS_MANAGE"]), moderatorCtrl.getAllModerators);
// to create a moderator
// router.post("/create-moderator", verifyToken, requireAdmin, requirePermission(["USERS_MANAGE"]), moderatorCtrl.createModerator);

// #endregion
module.exports = router;
