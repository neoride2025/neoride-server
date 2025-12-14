exports.create = async (req, res) => {
  res.json({ message: 'Ride created' });
};

exports.history = async (req, res) => {
  res.json({ message: 'Ride history', data: [] });
};
