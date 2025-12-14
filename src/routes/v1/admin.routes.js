const express = require("express");
const router = express.Router();

const authController = require('./../../modules/auth/auth.controller');
const dashboardCtrl = require("../../api/v1/admin/controllers/dashboard.controller");
const moderatorCtrl = require("../../api/v1/admin/controllers/moderator.controller");
const userCtrl = require("../../api/v1/admin/controllers/user.controller");
const policyCtrl = require("../../api/v1/admin/controllers/policy.controller");
const supportCtrl = require("../../api/v1/admin/controllers/support.controller");
const notificationCtrl = require("../../api/v1/admin/controllers/notification.controller");
const paymentCtrl = require("../../api/v1/admin/controllers/payment.controller");
const contractController = require("../../api/v1/admin/controllers/contact.controller");
const authMiddleware = require("../../middlewares/auth.middleware");

// auth
router.post("/login", authController.login);

// dashboard
router.get("/dashboard/summary", dashboardCtrl.summary);

// moderators
router.get("/moderators", moderatorCtrl.list);
router.post("/moderators", moderatorCtrl.create);
router.put("/moderators/:id", moderatorCtrl.update);
router.delete("/moderators/:id", moderatorCtrl.remove);

// users
router.get("/users", userCtrl.list);
router.get("/users/:id", userCtrl.details);
router.put("/users/:id", userCtrl.update);
router.delete("/users/:id", userCtrl.remove);

// policy
router.get("/get-privacy", policyCtrl.getPrivacy);
router.post("/save-privacy", policyCtrl.savePrivacy);
router.get("/get-terms", policyCtrl.getTerms);
router.post("/save-terms", policyCtrl.saveTerms);

// support
router.get("/support/chats", supportCtrl.list);
router.get("/support/chats/:id", supportCtrl.details);

// notifications
router.get("/notifications", notificationCtrl.list);

// payments
router.get("/payments", paymentCtrl.list);
router.post("/payments/:id/refund", paymentCtrl.refund);

// contact us
router.get("/contact", authMiddleware, contractController.list);

module.exports = router;
