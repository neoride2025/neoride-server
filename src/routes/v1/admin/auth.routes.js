const express = require("express");
const router = express.Router();

const authCtrl = require("../../../api/v1/admin/controllers/auth.controller");

router.post("/login", authCtrl.login);
// router.post("/refresh-token", adminAuthCtrl.refreshToken);
// router.post("/logout", adminAuthCtrl.logout);

module.exports = router;
