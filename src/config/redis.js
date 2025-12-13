const Redis = require("ioredis");
const config = require("./env");

if (!config.redis?.enabled) return null;
const redis = new Redis(config.redis.uri, {
  maxRetriesPerRequest: 3,
  enableReadyCheck: true,
  retryStrategy(times) {
    return Math.min(times * 50, 2000);
  },
});

redis.on("connect", () => {
  console.log("Redis connected");
});

redis.on("error", (err) => {
  console.error("Redis error", err);
});

module.exports = redis;
