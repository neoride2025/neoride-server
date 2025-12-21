const connectDB = require("../config/database");
const initSockets = require("../config/socket");
const redis = require("../config/redis");
const initExpress = require("../config/express");
require("../loaders/mongoose-models"); // to load all models


module.exports = async function loaders({app}) {
  // Load Database
  await connectDB(); //initialize MongoDB connection
  initSockets(); // initialize Socket.io
  redis; // initialize Redis connection
  initExpress({app});

  // Add other initializers here (redis, job scheduler, feature flags, etc.)
  // e.g. await initRedis();
};
