const { DataTypes, Sequelize} = require("sequelize");

const sequelize  = require("../database/config.sequelize");

const User = require("./user.table");

const Match = sequelize.define('Match', {

    match_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    userid_first: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: User, 
          key: 'userId', // Change 'id' to 'userId'
        }
      },
      userid_second: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: 'userId', // Change 'id' to 'userId'
        }
      },
      
},
    {
        tableName: "matches_table",
        createdAt: false,
        updatedAt: false,
    },
);

// ... then your association calls
Match.belongsTo(User, { as: 'UserFirst', foreignKey: 'userid_first' });
Match.belongsTo(User, { as: 'UserSecond', foreignKey: 'userid_second' });


module.exports = Match;