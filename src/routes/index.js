const express = require("express");
const router = express.Router();

const rideRoutes = require("./ride.routes");
// const authRoutes = require("./auth.routes"); // add when ready

router.use("/rides", rideRoutes);

// health check
router.get("/health", (req, res) => res.json({ ok: true, env: process.env.NODE_ENV || "dev" }));

module.exports = router;
