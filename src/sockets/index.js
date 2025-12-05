const { Server } = require("socket.io");

module.exports = function initSockets(server) {
  const io = new Server(server, {
    cors: {
      origin: "*", // tighten in production
      methods: ["GET", "POST"]
    }
  });

  io.on("connection", (socket) => {
    console.log("socket connected:", socket.id);

    socket.on("join_driver_room", (driverId) => {
      socket.join(`driver_${driverId}`);
    });

    socket.on("join_rider_room", (rideId) => {
      socket.join(`ride_${rideId}`);
    });

    socket.on("driver_location_update", ({ rideId, lat, lng }) => {
      // broadcast location to clients in this ride room
      io.to(`ride_${rideId}`).emit("driver_location", { lat, lng });
    });

    socket.on("disconnect", () => {
      console.log("socket disconnected:", socket.id);
    });
  });

  return io;
};
