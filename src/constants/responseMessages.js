// constants/responseMessages.js
module.exports = {
  COMMON: {
    INTERNAL_ERROR: 'Internal server error',
    NOT_FOUND: 'Resource not found',
    UNAUTHORIZED: 'Unauthorized access',
    FORBIDDEN: 'Access denied'
  },

  CONTACT: {
    CREATED: 'Contact submitted successfully',
    VALIDATION_FAILED: 'Contact validation failed',
    NAME_REQUIRED: 'First name is required',
    NAME_LENGTH: 'First name must be at least 2 characters long',
    NAME_INVALID: 'Invalid name format',
    MOBILE_REQUIRED: 'Mobile number is required',
    MOBILE_INVALID: 'Invalid mobile number',
    EMAIL_REQUIRED: 'Email address is required',
    EMAIL_INVALID: 'Invalid email address',
    SERVICE_TYPE_REQUIRED: 'Service type is required',
    MESSAGE_REQUIRED: 'Message is required'
  },

  RATE_LIMIT: {
    TOO_MANY_REQUESTS: 'Too many requests. Please try again later.'
  }
};
