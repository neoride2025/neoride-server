const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  refId: String,
  message: String,
  userName: String
}, { timestamps: true });

module.exports = mongoose.model('Comment', CommentSchema);
