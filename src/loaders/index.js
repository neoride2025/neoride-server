const mongoose = require("mongoose");

module.exports = async function loaders() {
  // load DB
  const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/rideapp";
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✔ MongoDB connected");
  } catch (err) {
    console.error("✖ MongoDB connection error:", err.message);
    // exit if DB is required
    process.exit(1);
  }

  // Add other initializers here (redis, job scheduler, feature flags, etc.)
  // e.g. await initRedis();
};
