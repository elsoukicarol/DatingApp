const { Sequelize, Op } = require('sequelize');
const Messages = require("../models/messages.table");

/// method used in the client side to send a new message
const createMessage = async(messageInfo) => {

    try {
        const messageToSend = await Messages.create(messageInfo);
        return messageToSend.text;

    } catch (error) {
        return error;
    }
}

/// service used to get full conversation between two users
const getConversation = async(messageInfo) => {

    try {

        const conversation = await Messages.findAll({

            attributes: ['text', 'date'],

            [Op.or]: [
                {
                    sender_id: messageInfo.sender_id,
                    receiver_id: messageInfo.receiver_id,
                },
                {
                    sender_id: messageInfo.receiver_id,
                    receiver_id: messageInfo.sender_id,
                },
            ],

            order: [['date', 'ASC']],
        });

        if(conversation){
            return conversation;
        } else {
            return "Start a conersation now!!";
        }

    } catch (error) {
        return error;
    }
}

module.exports = {
    getConversation,
    createMessage,
}