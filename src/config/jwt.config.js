const config = require("./env");

module.exports = {
  ACCESS_TOKEN_SECRET: config.ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET: config.REFRESH_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRY: "50m",
  REFRESH_TOKEN_EXPIRY: "7d",
};
