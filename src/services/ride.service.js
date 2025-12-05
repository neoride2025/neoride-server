const rideRepo = require("../repositories/ride.repository");

exports.estimateFare = async ({ from, to }) => {
  // very simplistic fare estimation:
  // distance placeholder (in kms) and fixed per km + base
  const distanceKm = calculateApproxDistanceKm(from, to);
  const base = 30;
  const perKm = 10;
  const fare = Math.max(base, Math.round((base + distanceKm * perKm) * 100) / 100);
  return { fare, distanceKm };
};

exports.createBooking = async ({ riderId, from, to }) => {
  const estimate = await exports.estimateFare({ from, to });
  const ride = await rideRepo.create({
    riderId,
    from,
    to,
    fare: estimate.fare,
    status: "requested"
  });
  return ride;
};

exports.getBooking = async (id) => {
  const ride = await rideRepo.findById(id);
  if (!ride) {
    const error = new Error("Ride not found");
    error.statusCode = 404;
    throw error;
  }
  return ride;
};

// small helper
function calculateApproxDistanceKm(a, b) {
  // haversine formula approximate — simple implementation
  const toRad = (deg) => (deg * Math.PI) / 180;
  const R = 6371; // km
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);

  const sinDLat = Math.sin(dLat / 2);
  const sinDLon = Math.sin(dLon / 2);
  const aa = sinDLat * sinDLat + sinDLon * sinDLon * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(aa), Math.sqrt(1 - aa));
  const d = R * c;
  return Math.round(d * 100) / 100; // 2 decimals
}
