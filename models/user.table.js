const { DataTypes, Sequelize} = require("sequelize");
const sequelize = require("../database/config.sequelize");

const User = sequelize.define("User", {

    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    first_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    last_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    username:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    dob:{
        type: DataTypes.DATEONLY,
        allowNull: false,
    },

    gender:{
        type: DataTypes.ENUM('male', 'female'),
        allowNull: false,
    },

    bio:{
        type: DataTypes.STRING,
        allowNull: true,
    },

    preference:{
        type: DataTypes.ENUM("female", "male"),
        allowNull: true,
    },

    profile_picture:{
        type: DataTypes.BLOB,
        allowNull: true,
    }
}, 
   {
    
    tableName: "user_table",
    createdAt: false,
    updatedAt: false,
});

module.exports = User;