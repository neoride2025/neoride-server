const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    fname: { type: String, required: true },
    lname: String,
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    serviceType: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", ContactSchema);
