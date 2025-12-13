exports.isSafeContactMessage = (text) => {
  return /^[a-zA-Z0-9\s.,&]+$/.test(text);
};
