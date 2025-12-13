module.exports = {
  create(data) {
    if (!data.email) throw new Error('Email required');
  }
};
