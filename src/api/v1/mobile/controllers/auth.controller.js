exports.login = async (req, res) => {
  res.json({ message: 'Mobile login' });
};

exports.register = async (req, res) => {
  res.json({ message: 'Mobile register' });
};

exports.verify = async (req, res) => {
  res.json({ message: 'OTP verify' });
};

exports.forgotPassword = async (req, res) => {
  res.json({ message: 'Forgot password' });
};

exports.resetPassword = async (req, res) => {
  res.json({ message: 'Reset password' });
};
