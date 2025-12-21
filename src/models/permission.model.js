const mongoose = require("mongoose");

const PermissionSchema = new mongoose.Schema(
  {
    // ---------- identity ----------
    key: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true, // CONTACTS_VIEW, DASHBOARD_VIEW
    },

    label: {
      type: String,
      required: true, // "View Contacts"
    },

    description: {
      type: String,
      default: null,
    },

    // ---------- linkage ----------
    module: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module",
      required: true, // 🔴 permission MUST belong to a module
    },

    // ---------- status ----------
    isActive: {
      type: Boolean,
      default: true,
    },

    // ---------- audit ----------
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Moderator",
      default: null,
    },

    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Moderator",
      default: null,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Permission", PermissionSchema);
