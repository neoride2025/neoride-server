module.exports = {
  env: "production",

  mongoUri: process.env.MONGO_URI,

  apiURL: process.env.API_URL,

  redis: {
    enabled: true,
    uri: process.env.REDIS_URI,
  },

  // App inside config items
  version: "v1",

  // Rate limiter config
  rateLimiter: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 5, // limit each IP to 100 requests per windowMs
  },

  // tokens
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
};
