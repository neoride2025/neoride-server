const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  userId: mongoose.Types.ObjectId,
  messages: [
    {
      sender: String,
      text: String,
      time: Date
    }
  ],
  status: { type: String, default: 'open' }
}, { timestamps: true });

module.exports = mongoose.model('Chat', ChatSchema);
