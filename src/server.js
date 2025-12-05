require("dotenv").config();
const http = require("http");
const app = require("./app");
const initSockets = require("./sockets");     // index.js inside sockets/

const PORT = process.env.PORT || 5000;

// ---------------------------
// 1. Create HTTP Server
// ---------------------------
const server = http.createServer(app);

// ---------------------------
// 2. Initialize Socket.IO
// ---------------------------
initSockets(server);  
// This attaches socket to your server (driver tracking, chat, etc)

// ---------------------------
// 3. Start Server
// ---------------------------
server.listen(3000, '127.0.0.1', () => console.log('listening 127.0.0.1:3000'));
