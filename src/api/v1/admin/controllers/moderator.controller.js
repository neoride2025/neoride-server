exports.list = async (req, res) => {
  res.json({ data: [] });
};

exports.create = async (req, res) => {
  res.json({ message: 'Moderator created' });
};

exports.update = async (req, res) => {
  res.json({ message: 'Moderator updated', id: req.params.id });
};

exports.remove = async (req, res) => {
  res.json({ message: 'Moderator deleted', id: req.params.id });
};
