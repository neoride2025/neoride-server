// pass schema this will validate & return sanitized request body or error
module.exports = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: true, // stop at first error (matches your old behavior)
      stripUnknown: true, // removes unwanted fields
    });

    if (error) {
      return next({
        statusCode: 400,
        message: error.details[0].message,
      });
    }

    req.validatedBody = value; // sanitized
    next();
  };
};
