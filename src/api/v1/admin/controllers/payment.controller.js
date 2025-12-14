exports.list = async (req, res) => {
  res.json({ payments: [] });
};

exports.refund = async (req, res) => {
  res.json({ message: 'Refund initiated', id: req.params.id });
};
