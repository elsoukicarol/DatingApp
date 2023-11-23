const express = require("express");
const { sendMessageController, getConversationController } = require("../controllers/messages.controller");

const router = express.Router();

// router.post('/messages/sendMessage', sendMessageController);

router.get('/messages/getChat', getConversationController);

module.exports = router;