module.exports = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: true,   // stop at first error (matches your old behavior)
      stripUnknown: true // removes unwanted fields
    });

    if (error) {
      return res.status(400).json({
        message: error.details[0].message
      });
    }

    req.body = value; // sanitized
    next();
  };
};
