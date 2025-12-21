const {
  NAME_MIN_LENGTH,
  NAME_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
  DESCRIPTION_MAX_LENGTH,
  COMMON_NAME_MIN_LENGTH,
  COMMON_NAME_MAX_LENGTH,
} = require("../utils/util-config");

module.exports = {
  // -------------------- COMMON (cross-domain only) --------------------
  COMMON: {
    // generic
    INTERNAL_ERROR: "Internal server error",
    NOT_FOUND: "Resource not found",
    UNAUTHORIZED: "Unauthorized access",
    FORBIDDEN: "Access denied",
    BAD_REQUEST: "Bad request",
    VALIDATION_FAILED: "Validation failed",

    DESCRIPTION_TOO_LONG: `Description must be less than ${DESCRIPTION_MAX_LENGTH} characters`,

    // ---------- NAME ----------
    NAME_REQUIRED: "Name is required",
    NAME_MIN_LENGTH: `Name must be at least ${NAME_MIN_LENGTH} characters long`,
    NAME_MAX_LENGTH: `Name must be at most ${NAME_MAX_LENGTH} characters long`,
    NAME_INVALID: "Name contains invalid characters",

    // ---------- EMAIL ----------
    EMAIL_REQUIRED: "Email is required",
    EMAIL_INVALID: "Invalid email address",
    EMAIL_EXISTS: "Email already exists",

    // ---------- MOBILE ----------
    MOBILE_REQUIRED: "Mobile number is required",
    MOBILE_INVALID: "Invalid mobile number",
    MOBILE_EXISTS: "Mobile number already exists",

    // ---------- PASSWORD ----------
    PASSWORD_REQUIRED: "Password is required",
    PASSWORD_WEAK: `Password must be at least ${PASSWORD_MIN_LENGTH} characters long`,
    PASSWORD_MIN_LENGTH: `Password must be at least ${PASSWORD_MIN_LENGTH} characters long`,
    PASSWORD_MAX_LENGTH: `Password must be at most ${PASSWORD_MAX_LENGTH} characters long`,
    PASSWORD_INVALID: "Password contains invalid characters",
  },

  // -------------------- AUTH / LOGIN --------------------
  AUTH: {
    SESSION_EXPIRED: "Session expired, please login again",
    LOGIN_SUCCESS: "Login successful",
    LOGIN_FAILED: "Login failed",
    LOGOUT_SUCCESS: "Logged out successfully",
    LOGOUT_FAILED: "Logout failed",
    INVALID_CREDENTIALS: "Invalid credentials",
    USER_NOT_FOUND: "User not found",
  },

  // -------------------- USER --------------------
  USER: {
    CREATED: "Account created successfully",
    CREATION_FAILED: "Account creation failed",
  },

  // -------------------- MODERATOR --------------------
  MODERATOR: {
    CREATED: "Moderator created successfully",
    CREATION_FAILED: "Moderator creation failed",

    CREATOR_REQUIRED: "Moderator creator is required",

    UPDATED: "Moderator updated successfully",
    UPDATE_FAILED: "Moderator update failed",

    ACTIVATED: "Moderator account activated successfully",
    ACTIVATION_FAILED: "Moderator activation failed",

    DEACTIVATED: "Moderator account deactivated successfully",
    DEACTIVATION_FAILED: "Moderator deactivation failed",

    DELETED: "Moderator deleted successfully",
    DELETE_FAILED: "Moderator deletion failed",

    NOT_ACTIVATED: "Moderator account is not activated",

    FOUND: "Moderator found",
    NOT_FOUND: "Moderator not found",
    EXISTS: "Moderator already exists",

    DATA_FOUND: "Moderators data found",

    NAME_REQUIRED: "Moderator name is required",
    NAME_INVALID: "Moderator name must be uppercase (ADMIN, MODERATOR)",
    NAME_MIN_LENGTH: `Moderator name must be at least ${COMMON_NAME_MIN_LENGTH} characters long`,
    NAME_MAX_LENGTH: `Moderator name must be at most ${COMMON_NAME_MAX_LENGTH} characters long`,
  },

  // -------------------- ROLE --------------------
  ROLE: {
    CREATED: "Role created successfully",
    CREATION_FAILED: "Role creation failed",

    CREATOR_REQUIRED: "Role creator is required",

    UPDATED: "Role updated successfully",
    UPDATE_FAILED: "Role update failed",

    ACTIVATED: "Role activated successfully",
    ACTIVATION_FAILED: "Role activation failed",

    DEACTIVATED: "Role deactivated successfully",
    DEACTIVATION_FAILED: "Role deactivation failed",

    DELETED: "Role deleted successfully",
    DELETE_FAILED: "Role deletion failed",

    NOT_ACTIVATED: "Role is not activated",

    FOUND: "Role found",
    NOT_FOUND: "Role not found",
    EXISTS: "Role already exists",

    DATA_FOUND: "Roles data found",

    NAME_REQUIRED: "Role name is required",
    NAME_INVALID: "Role name must be uppercase (ADMIN, MODERATOR)",
    NAME_MIN_LENGTH: `Role name must be at least ${COMMON_NAME_MIN_LENGTH} characters long`,
    NAME_MAX_LENGTH: `Role name must be at most ${COMMON_NAME_MAX_LENGTH} characters long`,

    PERMISSIONS_REQUIRED: "At least one permission is required",
    KEY_REQUIRED: "Role key is required",
    KEY_EXISTS: "Role key already exists",
    KEY_INVALID: "Module key must be uppercase (ADMIN, MODERATOR, SUPPORT)",
  },

  // -------------------- PROFILE --------------------

  PROFILE: {
    FOUND: "Profile found",
    NOT_FOUND: "Profile not found",
    EXISTS: "Profile already exists",
  },

  // -------------------- MODULE --------------------
  MODULE: {
    CREATED: "Module created successfully",
    CREATION_FAILED: "Module creation failed",

    CREATOR_REQUIRED: "Module creator is required",

    UPDATED: "Module updated successfully",
    DELETED: "Module deleted successfully",

    ACTIVATED: "Module activated successfully",
    ACTIVATION_FAILED: "Module activation failed",

    DEACTIVATED: "Module deactivated successfully",
    DEACTIVATION_FAILED: "Module deactivation failed",

    DELETED: "Module deleted successfully",
    DELETE_FAILED: "Module deletion failed",

    NOT_ACTIVATED: "Module is not activated",

    FOUND: "Module found",
    NOT_FOUND: "Module not found",
    EXISTS: "Module already exists",

    DATA_FOUND: "Modules data found",

    NAME_REQUIRED: "Module name is required",
    NAME_INVALID: "Module name must be uppercase (ADMIN, MODERATOR)",
    NAME_MIN_LENGTH: `Module name must be at least ${COMMON_NAME_MIN_LENGTH} characters long`,
    NAME_MAX_LENGTH: `Module name must be at most ${COMMON_NAME_MAX_LENGTH} characters long`,

    KEY_INVALID: "Module key must be uppercase (DASHBOARD, CONTACTS, USERS, ROLES, PERMISSIONS)",
  },

  // -------------------- PERMISSION --------------------
  PERMISSION: {
    CREATED: "Permission created successfully",
    CREATION_FAILED: "Permission creation failed",

    CREATOR_REQUIRED: "Permission creator is required",

    UPDATED: "Permission updated successfully",
    DELETED: "Permission deleted successfully",

    ACTIVATED: "Permission activated successfully",
    ACTIVATION_FAILED: "Permission activation failed",

    DEACTIVATED: "Permission deactivated successfully",
    DEACTIVATION_FAILED: "Permission deactivation failed",

    DELETED: "Permission deleted successfully",
    DELETE_FAILED: "Permission deletion failed",

    NOT_ACTIVATED: "Permission is not activated",

    FOUND: "Permission found",
    NOT_FOUND: "Permission not found",
    EXISTS: "Permission already exists",

    DATA_FOUND: "Permissions data found",

    NAME_REQUIRED: "Permission name is required",
    NAME_INVALID: "Permission name must be uppercase (ADMIN, MODERATOR)",
    NAME_MIN_LENGTH: `Permission name must be at least ${COMMON_NAME_MIN_LENGTH} characters long`,
    NAME_MAX_LENGTH: `Permission name must be at most ${COMMON_NAME_MAX_LENGTH} characters long`,

    KEY_REQUIRED: "Permission key is required",
    KEY_INVALID: "Permission key must be uppercase (READ, WRITE, DELETE)",
  },

  // -------------------- CONTACT --------------------
  CONTACT: {
    CREATED: "Contact submitted successfully",
    CREATION_FAILED: "Contact submission failed",

    NAME_REQUIRED: "First name is required",
    NAME_MIN_LENGTH: "First name must be at least 2 characters long",

    SERVICE_TYPE_REQUIRED: "Service type is required",
    MESSAGE_REQUIRED: "Message is required",
    MESSAGE_INVALID: "Invalid message",
  },

  // -------------------- TOKEN --------------------
  TOKEN: {
    ACCESS: {
      MISSING: "Access token missing",
      EXPIRED: "ACCESS_TOKEN_EXPIRED",
      INVALID: "Invalid access token",
    },
    REFRESH: {
      MISSING: "Refresh token missing",
      EXPIRED: "Refresh token expired",
      INVALID: "Invalid refresh token",
    },
  },

  // -------------------- RATE LIMIT --------------------
  RATE_LIMIT: {
    TOO_MANY_REQUESTS: "Too many requests. Please try again later.",
  },
};
