const { check, validationResult } = require("express-validator");

const createMessageValidator = [
    check('sender_id').notEmpty().withMessage("Sender id cannot be empty"),
    check('receiver_id').notEmpty().withMessage("Receiver id cannot be empty"),
    check('text').notEmpty().withMessage("Insert text"),
];

// const deleteMatch = [
//     check('userid_first').notEmpty().withMessage("First user id cannot be empty"),
//     check('userid_second').notEmpty().withMessage("Second user id cannot be empty"),
// ];

module.exports = {
    validationResult,
    createMessageValidator,
}