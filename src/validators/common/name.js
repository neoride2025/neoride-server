exports.isValidName = (name) => {
  if (!name) return false;
  return /^[a-zA-Z][a-zA-Z\s.]{1,20}$/.test(name);
};