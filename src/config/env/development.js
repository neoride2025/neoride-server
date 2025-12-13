const redis = require("../redis");

module.exports = {
  env: "development",

  mongoUri: process.env.MONGO_URI,

  apiURL: process.env.API_URL,

  redis: {
    enabled: false,
  },

  // App inside config items
  version: "v1",

  // Rate limiter config
  rateLimiter: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 15, // limit each IP to 5 requests per windowMs
  },
};
