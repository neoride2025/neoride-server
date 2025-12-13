const mongoose = require('mongoose');
const config = require('./env');

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoUri, {
      autoIndex: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    });

    console.log('MongoDB connected!');
  } catch (err) {
    console.error('MongoDB connection failed');
    process.exit(1); // crash app if DB fails
  }
};

module.exports = connectDB;
