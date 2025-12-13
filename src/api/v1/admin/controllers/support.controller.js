exports.list = async (req, res) => {
  res.json({ chats: [] });
};

exports.details = async (req, res) => {
  res.json({ chatId: req.params.id });
};
