// Load dotenv only if NOT running in production under PM2
if (!process.env.NODE_ENV || process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV || "development"}`
  });
}

const http = require("http");
const app = require("./app");
const initSockets = require("./sockets");     // index.js inside sockets/

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
server.listen(3000, '127.0.0.1', () => console.log('server is listening...'));
