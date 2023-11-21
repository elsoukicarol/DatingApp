const { createMessage, getConversation, createMessageAndEmit } = require("../services/messages.services");
const { validationResult } = require("../validators/messages.validator");

const sendMessageController = async(req,res) => {


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        
        const newMessage = await createMessage({
            sender_id: req.body.sender_id,
            receiver_id: req.body.receiver_id,
            text: req.body.text,
            date: new Date(),
        });
        return res.status(200).json({ message: newMessage});

    } catch (error) {
        return res.status(200).json({ message: error});
    }
}

const getConversationController = async(req,res) => {

    try {
        
        const conversation = await getConversation({
            sender_id: req.query.sender_id,
            receiver_id: req.query.receiver_id,
        });
        return res.status(200).json({ message: conversation});

    } catch (error) {
        return res.status(200).json({ message: error});
    }
}

module.exports = {
    sendMessageController,
    getConversationController,
    
}

// to see running processes lsof -i:<port>
// to kill processes kill -9 pid