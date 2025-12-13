const Contact = require("./contact.model");

module.exports = {
  async submit(data) {
    try {
      return Contact.create(data);
    } catch (err) {
      next(err);
    }
  },

  list() {
    return Contact.find().sort({ createdAt: -1 });
  },
};
