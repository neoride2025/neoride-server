module.exports = function errorMiddleware(err, req, res, next) {
  // Simple shape: { statusCode, message, details }
  const status = err.statusCode || err.status || 500;
  const payload = {
    success: false,
    message: err.message || "Internal Server Error",
  };

  if (process.env.NODE_ENV !== "production") {
    payload.stack = err.stack;
    if (err.details) payload.details = err.details;
  }

  res.status(status).json(payload);
};
