module.exports = {
  login(data) {
    if (!data.email || !data.password) {
      throw new Error('Invalid login data');
    }
  }
};
