// loaders/express.js
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const config = require("../config/env");
const routes = require(`../routes/${config.version}`); // dynamically load versioned routes
const errorMiddleware = require("../middlewares/error.middleware");

module.exports = function initExpress({ app }) {
  console.log("Express initialized!!!");
  app.use(
    cors({
      origin: "http://localhost:4200", // EXACT frontend origin
      credentials: true, // REQUIRED for cookies
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );
  app.use(helmet());
  app.use(express.json({ limit: "5mb" })); // parse application/json & limit size
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan("dev")); // logs requests
  app.use(cookieParser());

  // initiate routes from here
  app.use(`/${config.version}`, routes);

  // use error middleware for modify the response on error
  app.use(errorMiddleware);
};
