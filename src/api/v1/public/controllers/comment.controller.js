exports.create = async (req, res) => {
  res.json({ message: 'Comment added' });
};

exports.list = async (req, res) => {
  res.json({ refId: req.params.refId, comments: [] });
};
