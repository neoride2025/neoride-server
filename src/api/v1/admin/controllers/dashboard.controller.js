exports.summary = async (req, res) => {
  res.json({
    users: 0,
    rides: 0,
    bookings: 0
  });
};
