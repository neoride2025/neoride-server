const express = require("express");
const router = express.Router();

const authController = require("./../../modules/auth/auth.controller");
const authMiddleware = require("../../middlewares/auth.middleware");
const moduleCtrl = require("../../api/v1/admin/controllers/module.controller");
const permissionCtrl = require("../../api/v1/admin/controllers/permission.controller");
const roleCtrl = require("../../api/v1/admin/controllers/role.controller");

const contractController = require("../../api/v1/admin/controllers/contact.controller");

// const dashboardCtrl = require("../../api/v1/admin/controllers/dashboard.controller");
// const userCtrl = require("../../api/v1/admin/controllers/user.controller");
// const policyCtrl = require("../../api/v1/admin/controllers/policy.controller");
// const supportCtrl = require("../../api/v1/admin/controllers/support.controller");
// const notificationCtrl = require("../../api/v1/admin/controllers/notification.controller");
// const paymentCtrl = require("../../api/v1/admin/controllers/payment.controller");

// auth
router.post("/login", authController.login);

// dashboard
// router.get("/dashboard/summary", dashboardCtrl.summary);

// modules
router.get("/modules", authMiddleware, moduleCtrl.list);
router.post("/modules", authMiddleware, moduleCtrl.create);
router.put("/modules/:id", authMiddleware, moduleCtrl.update);
router.delete("/modules/:id", authMiddleware, moduleCtrl.remove);

// permissions
router.get("/permissions", authMiddleware, permissionCtrl.list);
router.post("/permissions", authMiddleware, permissionCtrl.create);
router.put("/permissions/:id", authMiddleware, permissionCtrl.update);
router.delete("/permissions/:id", authMiddleware, permissionCtrl.remove);

// roles
router.get("/roles", authMiddleware, roleCtrl.list);
router.post("/roles", authMiddleware, roleCtrl.create);
router.put("/roles/:id", authMiddleware, roleCtrl.update);
router.delete("/roles/:id", authMiddleware, roleCtrl.remove);

// users
// router.get("/users", userCtrl.list);
// router.get("/users/:id", userCtrl.details);
// router.put("/users/:id", userCtrl.update);
// router.delete("/users/:id", userCtrl.remove);

// policy
// router.get("/get-privacy", policyCtrl.getPrivacy);
// router.post("/save-privacy", policyCtrl.savePrivacy);
// router.get("/get-terms", policyCtrl.getTerms);
// router.post("/save-terms", policyCtrl.saveTerms);

// support
// router.get("/support/chats", supportCtrl.list);
// router.get("/support/chats/:id", supportCtrl.details);

// notifications
// router.get("/notifications", notificationCtrl.list);

// payments
// router.get("/payments", paymentCtrl.list);
// router.post("/payments/:id/refund", paymentCtrl.refund);

// contact us
router.get("/contact", authMiddleware, contractController.list);

module.exports = router;
