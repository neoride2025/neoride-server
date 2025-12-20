exports.list = async (req, res) => {
  res.json({ data: [] });
};

exports.create = async (req, res) => {
  res.json({ message: 'Role created' });
};

exports.update = async (req, res) => {
  res.json({ message: 'Role updated', id: req.params.id });
};

exports.remove = async (req, res) => {
  res.json({ message: 'Role deleted', id: req.params.id });
};
