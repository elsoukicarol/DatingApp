const cors = require('cors');
const express = require('express');
const app = express();
const server = require('http').createServer(app);

const { createMessage } = require("./services/messages.services");

const users = {};

const io = require('socket.io')(server, {
  cors: {
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST"]
  }
});

io.on('connection', socket => {
    socket.on('new-user', name => {
        users[socket.id] = name;
        socket.broadcast.emit('user-connected', name);
    });

    // socket.on('receiver-user', receiver => {
    //     users[socket.id] = receiver;
    // });

    socket.on('send-chat-message', async data => {

        socket.broadcast.emit('chat-message', { message: data.text, name: users[socket.id]});
        console.log(data.receiver);
        const inserted = await createMessage({
            sender_id: users[socket.id],
            receiver_id: data.receiver,
            text: data.text,
            date: new Date(),
        });

        console.log(inserted);
    });

    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnected', users[socket.id]);
        delete users[socket.id];
    });
});

server.listen(3001, 'localhost', () => {
    console.log('listening on 3001');
});