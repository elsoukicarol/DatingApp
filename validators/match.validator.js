const { check, validationResult } = require("express-validator");

const createValidMatch = [
    check('userid_first').notEmpty().withMessage("First user id cannot be empty"),
    check('userid_second').notEmpty().withMessage("Second user id cannot be empty"),
];

const deleteMatch = [
    check('userid_first').notEmpty().withMessage("First user id cannot be empty"),
    check('userid_second').notEmpty().withMessage("Second user id cannot be empty"),
];

module.exports = {
    validationResult,
    createValidMatch,
    deleteMatch,
}