const express = require("express");
const router = express.Router();

const adminAuthCtrl = require("../../../api/v1/admin/controllers/auth.controller");

router.post("/login", adminAuthCtrl.login);
// router.post("/refresh-token", adminAuthCtrl.refreshToken);
// router.post("/logout", adminAuthCtrl.logout);

module.exports = router;
