// constants/responseMessages.js
module.exports = {
  COMMON: {
    INTERNAL_ERROR: "Internal server error",
    NOT_FOUND: "Resource not found",
    UNAUTHORIZED: "Unauthorized access",
    FORBIDDEN: "Access denied",
  },

  AUTH: {
    SESSION_EXPIRED: "Session expired, please login again",
    LOGOUT_ERROR: "Logout failed",
    LOGOUT_SUCCESS: "Logged out successfully",
  },

  USER: {
    NAME_REQUIRED: "Name is required",
    NAME_LENGTH: "Name must be at least 2 characters long",
    NAME_INVALID: "Invalid name format",
    EMAIL_REQUIRED: "Email is required",
    EMAIL_INVALID: "Invalid email",
    EMAIL_EXISTS: "Email already exists",
    MOBILE_REQUIRED: "Mobile number is required",
    MOBILE_INVALID: "Invalid mobile number",
    MOBILE_EXISTS: "Mobile number already exists",
    PASSWORD_REQUIRED: "Password is required",
    PASSWORD_INVALID: "Password must be 6–18 chars with uppercase, lowercase, number & symbol",
    PASSWORD_MISMATCH: "Passwords do not match",
    CREATED: "Account created successfully",
    FAILED: "Account creation failed",
  },

  MODERATOR: {
    CREATION_SUCCESS: "Moderator created successfully",
    CREATION_FAILED: "Moderator creation failed",
    VALIDATION_FAILED: "Moderator validation failed",
    EMAIL_EXISTS: "Moderator email already exists",
    MOBILE_EXISTS: "Mobile number already exists",
    NOT_ACTIVATED: "Moderator account is not activated by admin",
    NOT_FOUND: "Moderator not found",
    ACTIVATED: "Moderator account activated successfully",
  },

  LOGIN: {
    EMAIL_REQUIRED: "Email is required",
    EMAIL_INVALID: "Invalid email",
    USER_NOT_FOUND: "User not found",
    PASSWORD_REQUIRED: "Password is required",
    PASSWORD_LENGTH: "Password must be at least 6 characters long",
    PASSWORD_INVALID: "Invalid password",
    SUCCESS: "Login successful",
    FAILED: "Login failed",
    INVALID_CREDENTIALS: "Invalid credentials",
  },

  CONTACT: {
    CREATION_SUCCESS: "Contact submitted successfully",
    CREATION_FAILED: "Contact submission failed",
    VALIDATION_FAILED: "Contact validation failed",
    NAME_REQUIRED: "First name is required",
    NAME_LENGTH: "First name must be at least 2 characters long",
    SERVICE_TYPE_REQUIRED: "Service type is required",
    MESSAGE_REQUIRED: "Message is required",
    INVALID_MESSAGE: "Invalid message",
  },

  RATE_LIMIT: {
    TOO_MANY_REQUESTS: "Too many requests. Please try again later.",
  },

  TOKENS: {
    ACCESS_TOKEN: {
      MISSING: "Access Token missing",
      EXPIRED: "Access Token expired",
      INVALID: "Invalid Access token",
    },
    REFRESH_TOKEN: {
      MISSING: "Refresh Token missing",
      EXPIRED: "Refresh Token expired",
      INVALID: "Invalid Refresh token",
    },
  },
};
