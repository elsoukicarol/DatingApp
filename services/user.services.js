const { Sequelize, Op } = require('sequelize');
const User = require("../models/user.table");

/// service to signUp
const signUp = async(userData) => {

    try {

        let user = await User.findOne({
            where: {
                [Op.or]: [
                     { username: userData.username } ,
                    { email: userData.email },
                ]
            }
        });
    
        if(user){
            if(user.username == userData.username  ){
                return "Username already in use";
            } else if(user.email == userData.email  ){
                return "Email already in use";
            }
        } else {
            user = await User.create(userData);
            return "User created succesfully";
        }
        
    } catch (error) {
        return error;
    }
}

/// service to sign In
const signIn = async(userData) => {

    try {

        let user = await User.findOne({
            where: {
                username: userData.username,
                password: userData.password,
                }
            }
        );
    
        if(user){
            return "Login succesfully";
        }
        else {
            return "Invalid username or password";
        }
        
    } catch (error) {
        return error;
    }
}

/// service to update user info
const updateUser = async (userData) => {
    try {
        let user = await User.findOne({
            where: {
                userId: userData.id,
            },
        });

        if (user) {
            const fieldToUpdate = {};
            if (userData.first_name) {
                fieldToUpdate.first_name = userData.first_name;
            }

            if (userData.last_name) {
                fieldToUpdate.last_name = userData.last_name;
            }

            if (userData.bio) {
                fieldToUpdate.bio = userData.bio;
            }

            if (userData.preference) {
                fieldToUpdate.preference = userData.preference;
            }

            if (userData.email) {
                fieldToUpdate.email = userData.email;
            }

            if (userData.password) {
                if(userData.password == userData.repeatPassword){
                    fieldToUpdate.password = userData.password;
                } else{
                    return "Password doesn't match";
                }
            }

            // Update the user using the `update` method with both the fields to update and the condition
            await User.update(fieldToUpdate, {
                where: {
                    userId: userData.id,
                },
            });

            // Fetch the updated user after the update operation
            user = await User.findOne({
                where: {
                    userId: userData.id,
                },
            });
            return "User updated successfully";
        } else {
            return "Invalid user id";
        }
    } catch (error) {
        return error; // Rethrow the error to handle it at a higher level if needed
    }
};

/// service to delete user from database
const deleteUser = async (userData) => {
    try {
        let user = await User.findOne({
            where: {
                userId: userData.id,
                password: userData.password,
            },
        });

        if(user){
            await user.destroy();
            return "User deleted successfully";
        } else {
            return "Incorrect password";
        }
    } catch (error) {
        return error;
    }
}

/// service to get users
const getUserByUsername = async (userData) => {

    try {

        /// gwtting requester id

        const userRequest = await User.findByPk(userData.userId);

        if(userData.username === ""){
            const allUsers = await User.findAll({
                attributes: ['first_name', 'last_name', 'username', 'gender', 'preference', 'profile_picture'],

                where: {
                    gender: userRequest.preference,

                    userId: {
                        [Op.not]: userRequest.userId,
                    },
                },

            });
            return allUsers;
        }
        
        const user = await User.findOne({
            where: {
                username: userData.username,
            },
        });

        if(user){
            return  { "First Name": user.first_name,
                "Last Name": user.last_name,
                "username" : user.username, 
                "gender": user.gender, 
                "preference": user.preference,
                "profile_picture": user.profile_picture };
        }

        else if(!user){
            return "User not found";
        }

    } catch (error) {
        return error;
    }

}

module.exports = {
    signUp,
    signIn,
    updateUser,
    deleteUser,
    getUserByUsername,
}

