const mongoose = require("mongoose");
const ROLES = require("../constants/roles");

const ModeratorSchema = new mongoose.Schema(
  {
    // ---------- identity ----------
    name: {
      type: String,
      trim: true,
      maxlength: 20,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    username: {
      type: String,
      trim: true,
      unique: true,
      sparse: true,
    },

    avatarUrl: {
      type: String,
      default: null,
    },

    // ---------- role / type ----------
    userType: {
      type: String,
      enum: ["ADMIN", "MODERATOR"],
      default: "MODERATOR",
      required: true,
    },

    isSystemUser: {
      type: Boolean,
      default: false, // true for super admin
    },

    description: {
      type: String,
      default: null,
    },

    // ---------- verification ----------
    emailVerified: {
      type: Boolean,
      default: false,
    },

    mobile: {
      type: String,
      trim: true,
      default: null,
    },

    mobileVerified: {
      type: Boolean,
      default: false,
    },

    // ---------- auth ----------
    password: {
      type: String,
      required: true,
      select: false,
    },

    refreshTokenHash: {
      type: String,
      default: null,
      select: false,
    },

    refreshTokenIssuedAt: {
      type: Date,
      default: null,
    },

    lastLoginAt: {
      type: Date,
      default: null,
    },

    lastLoginIp: {
      type: String,
      default: null,
    },

    failedLoginAttempts: {
      type: Number,
      default: 0,
    },

    accountLockedUntil: {
      type: Date,
      default: null,
    },

    // ---------- authorization ----------
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
      required: true,
    },

    // ---------- activation ----------
    isActive: {
      type: Boolean,
      default: function () {
        return this.userType === ROLES.ADMIN;
      },
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },

    deactivatedAt: {
      type: Date,
      default: null,
    },

    deactivatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Moderator",
      default: null,
    },

    // ---------- location ----------
    locationCords: {
      latitude: {
        type: Number,
        default: null,
      },
      longitude: {
        type: Number,
        default: null,
      },
    },

    timezone: {
      type: String,
      default: "Asia/Kolkata",
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

module.exports = mongoose.model("Moderator", ModeratorSchema);
