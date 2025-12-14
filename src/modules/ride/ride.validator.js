module.exports = {
  create(data) {
    if (!data.source || !data.destination) {
      throw new Error('Invalid ride data');
    }
  }
};
