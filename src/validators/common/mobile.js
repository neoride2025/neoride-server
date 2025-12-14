exports.isValidMobile = (mobile) => {
  if (!mobile) return false;
  return /^(?:\+91|91)?[6-9]\d{9}$/.test(mobile);
};