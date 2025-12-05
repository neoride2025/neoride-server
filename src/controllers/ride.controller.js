const rideService = require("../services/ride.service");

exports.estimateFare = async (req, res, next) => {
  try {
    const { from, to } = req.body;
    if (!from || !to) {
      const err = new Error("from and to are required");
      err.statusCode = 400;
      throw err;
    }
    const result = await rideService.estimateFare({ from, to });
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

exports.createBooking = async (req, res, next) => {
  try {
    const { riderId, from, to } = req.body;
    if (!riderId || !from || !to) {
      const err = new Error("riderId, from and to are required");
      err.statusCode = 400;
      throw err;
    }
    const ride = await rideService.createBooking({ riderId, from, to });
    res.status(201).json({ success: true, data: ride });
  } catch (err) {
    next(err);
  }
};

exports.getBooking = async (req, res, next) => {
  try {
    const ride = await rideService.getBooking(req.params.id);
    res.json({ success: true, data: ride });
  } catch (err) {
    next(err);
  }
};
