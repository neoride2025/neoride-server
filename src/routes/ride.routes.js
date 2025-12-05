const express = require("express");
const router = express.Router();
const rideController = require("../controllers/ride.controller");

// POST /api/rides/estimate
router.post("/estimate", rideController.estimateFare);

// POST /api/rides/book
router.post("/book", rideController.createBooking);

// GET /api/rides/:id
router.get("/:id", rideController.getBooking);

module.exports = router;
