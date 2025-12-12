const express = require("express");
const router = express.Router();

const rideRoutes = require("./ride.routes");
const userRoutes = require("./user.routes");

router.use("/rides", rideRoutes); // ride related routes

router.use("/users", userRoutes); // user related routes

// health check
router.get("/health", (req, res) => res.json({ env: process.env.NODE_ENV || "dev" }));

router.get("/verify/:name", (req, res) => res.json({ reqested_by: req.params.name, message:  `Hello There` }));

module.exports = router;
