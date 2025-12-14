exports.savePrivacy = async (req, res) => {
  res.json({ message: "Privacy policy saved" });
};

exports.saveTerms = async (req, res) => {
  res.json({ message: "Terms saved" });
};

exports.getPrivacy = async (req, res) => {
  res.json({ message: "Privacy policy saved", content: ""});
};

exports.getTerms = async (req, res) => {
  res.json({ message: "Terms saved", content: "" });
};