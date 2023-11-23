// index.js

const express = require("express");
require('dotenv').config();
const sequelize = require("./database/config.sequelize");

//// socket io
const http = require('http');
const socketIO = require('socket.io');

const app = express();

const port = process.env.PORT;
const bodyParser = require('body-parser');

const User = require("./models/user.table");
const Messages = require("./models/messages.table");
const Match = require("./models/match.table");
const routerUser = require("./routes/user.route");
const routerMatch = require("./routes/match.route");
const routerMessage = require("./routes/messages.route");

// Start the server with Socket.io
app.listen(port, async () => {
  console.log("App running on port ", port);

  try {
    // Test the connection and sync models
    // await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Sync all models that aren't already in the database
    // await sequelize.sync({ force: true });
    console.log("Synced with the database successfully");
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});

app.use(bodyParser.json());
app.use('/api', routerUser);
app.use('/api', routerMatch);
app.use('/api', routerMessage);
