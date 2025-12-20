const mongoose = require("mongoose");

const PermissionSchema = new mongoose.Schema(
  {
    // Use permission key itself as ID (IMPORTANT)
    _id: {
      type: String,
      required: true,
      uppercase: true, // CONTACTS_VIEW
      trim: true,
    },

    label: {
      type: String,
      required: true, // "View Contacts"
    },

    module: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module",
      required: true,
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

module.exports = mongoose.model("Permission", PermissionSchema);
