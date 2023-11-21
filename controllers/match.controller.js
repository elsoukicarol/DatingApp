const { createMatch, deleteMatch } = require("../services/match.services");
const { validationResult } = require("../validators/match.validator");


const newMatchController = async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newMatch = await createMatch({
            userid_second : req.body.userid_second,
            userid_first : req.body.userid_first,
        });

        return res.status(200).json({message : newMatch});

    } catch (error) {
        return error;
    }

}

const deleteMatchController = async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const toDelete = await deleteMatch({
            userid_second : req.body.userid_second,
            userid_first : req.body.userid_first,
        });

        return res.status(200).json({message : toDelete});

    } catch (error) {
        return error;
    }

}

module.exports = {
    newMatchController,
    deleteMatchController
}