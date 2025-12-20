const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
      uppercase: true, // ADMIN, MODERATOR
      trim: true
    },

    name: {
      type: String,
      required: true // "Administrator"
    },

    description: {
      type: String
    },

    permissions: [
      {
        type: String,
        ref: 'Permission'
      }
    ],

    isSystemRole: {
      type: Boolean,
      default: false // true for ADMIN
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true,
    _id: false
  }
);

module.exports = mongoose.model('Role', RoleSchema);
