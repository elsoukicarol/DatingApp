const { signUp, signIn, updateUser, deleteUser, getUserByUsername } = require("../services/user.services");
const { validationResult } = require("../validators/user.validator");

/// Controller used to creates new user
const createNewUser = async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let currentDate = new Date();
    let validMinDate = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate() + 1);

    let dobParts = req.body.dob.split('-');
    let userDob = new Date(dobParts[0], dobParts[1], dobParts[2]);

    let userBirthday = new Date(userDob.getFullYear(), userDob.getMonth() - 1, userDob.getDate() + 1);

    try{

        if (userBirthday > validMinDate) {
            return res.json({ message: "Invalid date of birth" });
        }

        const users = await signUp({
            first_name: req.body.first_name,
            last_name: req.body.last_name ,
            email: req?.body?.email,
            username: req?.body?.username,
            password: req?.body?.password,
            dob: req?.body?.dob,
            gender: req?.body?.gender,
            bio: req?.body?.bio,
            preference: req?.body?.preference,
            profile_picture: req?.body?.profile_picture,
        });

        return res.status(200).json({ message: users});
    } catch(error){
        return res.status(500).json({ error: 'Internal server error' });
    }
}

/// Controller used to login into the wbesite
const login = async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ 
            errors: errors.array()});
    }

    try{
        const users = await signIn({
            username: req?.body?.username,
            password: req?.body?.password,
        });

        return res.status(200).json({ message: users});

    } catch(error){
        return res.status(500).json({ error: 'Internal server error' });
    }
}

/// controller used to update user information
const updateUserController = async(req, res) =>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ 
            errors: errors.array()});
    }

    try {
        const userId = req.params.userId;

        if(!userId){
            return res.status(400).json({ error: 'Missing userId parameter' });
        }

        const userDataToUpdate = req.body;

        const updatedUser = await updateUser({
            id: userId,
            ...userDataToUpdate,
        });

        return res.status(200).json({ message: updatedUser});

    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
}

/// controller used to delete user from application
const deleteUserController = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ 
            errors: errors.array()});
    }

    try {

        const userId = req.params.userId;

        if(!userId) {
            return res.status(400).json({ error: 'Missing userId parameter' });
        }

        const user = await deleteUser({
            id: userId,
            password: req.body.password,
        });

        return res.status(200).json({ message: user});

    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
}

/// controller used to get user by username and by preferences
const getUserByUsernameController = async (req, res) => {

    try {

        const user = await getUserByUsername({
            username: req.query.username,
            userId: req.params.userId,
        });

        return res.status(200).json({ message: user});

    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    createNewUser,
    login,
    updateUserController,
    deleteUserController,
    getUserByUsernameController,
}