const express = require("express");
const { createNewUser, login, updateUserController, deleteUserController, getUserByUsernameController } = require("../controllers/user.controller");
const { insertValidUser, loginValidator, updateValidUser, deleteValidUser } = require("../validators/user.validator");

const router = express.Router();

router.post("/user/signUp" , insertValidUser, createNewUser);

router.post("/user/login" , loginValidator, login);

router.put("/user/update/:userId" , updateValidUser , updateUserController);

router.delete("/user/delete/:userId" , deleteValidUser, deleteUserController);

router.get("/user/getUser/:userId", getUserByUsernameController);

module.exports = router;