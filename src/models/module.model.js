const mongoose = require("mongoose");

const ModuleSchema = new mongoose.Schema(
  {
    // ---------- identity ----------
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      maxlength: 25, // "Contacts", "Dashboard"
    },

    key: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      maxlength: 30,
      trim: true, // CONTACTS, DASHBOARD
    },

    description: {
      type: String,
      default: null,
    },

    // ---------- UI / ordering ----------
    icon: {
      type: String,
      default: null, // sidebar icon name
    },

    order: {
      type: Number,
      default: 0, // menu ordering
    },

    // ---------- status ----------
    isActive: {
      type: Boolean,
      default: true,
    },

    isSystemModule: {
      type: Boolean,
      default: false, // true for core modules
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

module.exports = mongoose.model("Module", ModuleSchema);
