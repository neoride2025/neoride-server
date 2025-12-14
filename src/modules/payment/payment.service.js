const repo = require('./payment.repository');

module.exports = {
  listPayments() {
    return repo.findAll();
  },

  refundPayment(id) {
    return repo.updateStatus(id, 'refunded');
  }
};
