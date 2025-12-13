const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: String,
  slug: String,
  content: String,
  isPublished: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Blog', BlogSchema);
