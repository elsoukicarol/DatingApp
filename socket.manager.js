console.log('Executing socket.manager.js');

const socketIO = require('socket.io');

const initSocketManager = (server) => {
  const io = socketIO(server);
  const userSockets = new Map();

  io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    // Store the socket instance in the userSockets Map
    userSockets.set(socket.id, socket);

    socket.on('disconnect', () => {
      console.log(`User disconnected: ${socket.id}`);
      // Remove the socket instance when a user disconnects
      userSockets.delete(socket.id);
    });
  });

  // Return an object with both 'io' and 'userSockets'
  return { io, userSockets };
};

const getIo = () => {
  if (!io) {
    throw new Error('Socket manager not initialized');
  }
  return io;
};

module.exports = {
  initSocketManager,
  getIo,
};
