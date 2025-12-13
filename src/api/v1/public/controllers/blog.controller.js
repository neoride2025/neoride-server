exports.list = async (req, res) => {
  res.json({ blogs: [] });
};

exports.details = async (req, res) => {
  res.json({ slug: req.params.slug });
};
