const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

// const routes = require("./routes");           // index.js inside routes/
// const errorMiddleware = require("./middlewares/error.middleware");
const loaders = require("./loaders"); // database, cache, etc.

module.exports = async function createApp() {
  const app = express();

  // ---------------------------
  // 1. Load system dependencies
  // ---------------------------
  await loaders({ app }); // Example: DB connect, socket, redis connect…

  // ---------------------------
  // 2. Global Middlewares
  // ---------------------------
  // ---------------------------
  // 4. Error Handler (must be last)
  // ---------------------------
  // app.use(errorMiddleware);
  return app;
};
