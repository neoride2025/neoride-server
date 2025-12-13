const mongoose = require("mongoose");

const config = require("./env");

module.exports = async function loaders() {
  // load DB
  const mongoUri = config.mongoUri;
  try {
    await mongoose.connect(mongoUri);
    console.log("✔ MongoDB connected");
  } catch (err) {
    console.error("✖ MongoDB connection error:", err.message);
    // exit if DB is required
    process.exit(1);
  }

  // Add other initializers here (redis, job scheduler, feature flags, etc.)
  // e.g. await initRedis();
};
