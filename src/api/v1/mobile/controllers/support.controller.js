exports.startChat = async (req, res) => {
  res.json({ message: 'Support chat started' });
};

exports.getChat = async (req, res) => {
  res.json({ message: 'Chat details', chatId: req.params.chatId });
};
