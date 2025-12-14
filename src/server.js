require("./config/loadEnv");

const http = require("http");
const createApp = require("./app");

// call server creation and startup inside an async IIFE to allow top-level await
(async () => {
  try {
    // create Express App with dependencies loaded (db, sockets, etc.)
    const app = await createApp();
    // create HTTP Server
    const server = http.createServer(app);
    // start Server
    server.listen(3000, () => console.log("Server is listening..."));
  } catch (err) {
    console.error("App startup failed");
    process.exit(1);
  }
})();
