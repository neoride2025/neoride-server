exports.isValidPassword = (password) => {
  if (!password) return false;
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^_+\-=])[A-Za-z\d@$!%*?&#^_+\-=]{6,18}$/.test(pwd);
};
