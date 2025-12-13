exports.list = async (req, res) => {
  res.json({ data: [] });
};

exports.details = async (req, res) => {
  res.json({ id: req.params.id });
};

exports.update = async (req, res) => {
  res.json({ message: 'User updated', id: req.params.id });
};

exports.remove = async (req, res) => {
  res.json({ message: 'User deleted', id: req.params.id });
};
