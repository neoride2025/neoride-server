const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
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
    },

    emailVerified: {
      type: Boolean,
      default: false,
    },

    mobile: {
      type: String,
      trim: true,
      required: function () {
        // 🔴 mobile is mandatory ONLY for app users
        return this.role === "USER";
      },
    },

    mobileVerified: {
      type: Boolean,
      default: false,
      required: function () {
        // 🔴 mobile is mandatory ONLY for app users
        return this.role === "USER";
      },
    },

    password: {
      type: String,
      required: true,
    },

    // ---------- role ----------
    role: {
      type: String,
      enum: ["USER", "ADMIN", "MODERATOR"],
      default: "USER",
    },

    // ---------- permissions (admin panel only) ----------
    permissions: {
      type: [String],
      default: [],
    },

    // ---------- activation ----------
    isActive: {
      type: Boolean,
      default: function () {
        // USER & ADMIN active by default
        return this.role !== "MODERATOR";
      },
    },

    // ---------- auth ----------
    refreshToken: {
      type: String,
      default: null,
    },
    
    refreshTokenIssuedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
