const mongoose = require("mongoose");

const ModuleSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true, // "View Contacts"
    },

    totalPages: {
      type: Number,
      required: true, // "Contacts", "Users"
    },

    description: {
      type: String,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    _id: false, // we control _id manually
  }
);

module.exports = mongoose.model("Module", ModuleSchema);
