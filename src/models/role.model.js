const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema(
  {
    // ---------- identity ----------
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30,
    },

    key: {
      type: String,
      required: true,
      unique: true,
      uppercase: true, // ADMIN, MODERATOR, SUPPORT
      trim: true,
      maxlength: 30,
    },

    description: {
      type: String,
      default: null,
    },

    // ---------- authorization ----------
    permissions: [
      {
        type: String,
        required: true,
        uppercase: true, // CONTACTS_VIEW, DASHBOARD_VIEW
        trim: true,
      },
    ],

    // ---------- system flags ----------
    isSystemRole: {
      type: Boolean,
      default: false, // true only for ADMIN
    },

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

module.exports = mongoose.model("Role", RoleSchema);
