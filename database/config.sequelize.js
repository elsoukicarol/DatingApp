const Sequelize = require("sequelize").Sequelize;
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql', 
  port: process.env.DB_PORT,
});

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

sequelize.sync().then(() => {
    console.log("Synced with the database successfully");
});

module.exports = sequelize;
