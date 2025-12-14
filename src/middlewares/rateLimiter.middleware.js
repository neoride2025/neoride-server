const rateLimit = require('express-rate-limit');
const config = require('../config/env');

// Rate limiter for contact form submissions
exports.contactLimiter = rateLimit({
  windowMs: config.rateLimiter.windowMs,
  max: config.rateLimiter.maxRequests,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many contact requests. Please try again later.'
  }
});
