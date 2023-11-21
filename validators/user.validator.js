const { check, validationResult } = require("express-validator");

const insertValidUser = [
    check('first_name').notEmpty().withMessage("First name cannot be empty"),
    check('last_name').notEmpty().withMessage("Last Name cannot be empty"),
    check('password').isStrongPassword().withMessage("Weak password"),
    check('dob').notEmpty(),
    check('dob').isDate({ format: "YYYY-MM-DD" }),
    check('email').isEmail().withMessage("Invalid email address"),
    check('username').notEmpty().withMessage("Username cannot be empty"),
    check('gender').notEmpty().withMessage("Gender must be specified"),
    check('bio').optional(),
    check('preference').optional(),
];

const loginValidator = [
    check('username').notEmpty().withMessage("Username cannot be empty"),
    check('password').notEmpty().withMessage("Password cannot be empty"),
];

const updateValidUser = [
    check('password').optional().isStrongPassword().withMessage("Weak password"),
    check('repeatPassword').optional().notEmpty(),
    check('email').optional().isEmail(),
    check('first_name').optional().notEmpty(),
    check('last_name').optional().notEmpty(),
    check('preference').optional().notEmpty(),
];

const deleteValidUser = [
    check('password').notEmpty().withMessage("Password cannot be empty"),
];

module.exports = {
    insertValidUser,
    validationResult,
    loginValidator,
    updateValidUser,
    deleteValidUser,
};