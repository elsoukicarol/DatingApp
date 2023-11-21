const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../database/config.sequelize");
const User = require("./user.table");

const Messages = sequelize.define('Messages', {

    message_id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
    },

    sender_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User, 
            key: 'userId',
          }
    },

    receiver_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User, 
            key: 'userId',
          }
    },

    text:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    date:{
        type: DataTypes.DATE,
        allowNull: false,
    },

},
    {
        tableName: "message_table",
        createdAt: false,
        updatedAt: false,
    }
);

Messages.belongsTo(User, { as: 'sender', foreignKey: 'sender_id' });
Messages.belongsTo(User, { as: 'receiver' , foreignKey: 'receiver_id'});

module.exports = Messages;