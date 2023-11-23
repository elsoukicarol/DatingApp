const express = require("express");
require('dotenv').config();
const sequelize = require("./database/config.sequelize");

//// requiring socket io
const http = require('http');
const socketIO = require('socket.io');

const app = express();

const port = process.env.PORT;
const bodyParser = require('body-parser');

/// requiring models
const User = require("./models/user.table");
const Messages = require("./models/messages.table");
const Match = require("./models/match.table");

/// requiring routes
const routerUser = require("./routes/user.route");
const routerMatch = require("./routes/match.route");
const routerMessage = require("./routes/messages.route");

app.listen(port, async () => {
  console.log("App running on port ", port);

  try {
    console.log('Connection has been established successfully.');
    console.log("Synced with the database successfully");
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});

app.use(bodyParser.json());

app.use(routerUser);
app.use(routerMatch);
app.use(routerMessage);
