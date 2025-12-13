const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

// const routes = require("./routes");           // index.js inside routes/
// const errorMiddleware = require("./middlewares/error.middleware");
const loaders = require("./loaders");         // database, cache, etc.

const app = express();

// ---------------------------
// 1. Load system dependencies
// ---------------------------
loaders(); // Example: DB connect, redis connect…

// ---------------------------
// 2. Global Middlewares
// ---------------------------
app.use(cors());
app.use(helmet());
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); // logs requests

// ---------------------------
// 3. API Routes
// ---------------------------
// app.use("/", routes);

// ---------------------------
// 4. Error Handler (must be last)
// ---------------------------
// app.use(errorMiddleware);


module.exports = app;
