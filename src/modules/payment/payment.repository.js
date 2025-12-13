const Payment = require('./payment.model');

module.exports = {
  findAll() {
    return Payment.find();
  },

  updateStatus(id, status) {
    return Payment.findByIdAndUpdate(id, { status }, { new: true });
  }
};
