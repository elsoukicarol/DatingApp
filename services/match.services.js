const { Sequelize, Op } = require('sequelize');
const Match = require("../models/match.table");

const createMatch = async(matchInfo) => {

    try {

        let match = await Match.findOne({
            where: {
                userid_first: matchInfo.userid_first,
                userid_second: matchInfo.userid_second,
            }
        });

        if(match){
            return "Match already exists";
        }
        else{
            const newMatch = await Match.create(matchInfo);
            const matched = await checkIfMatched(matchInfo);

            if(matched == true){
                return "There's a match 💘";
            } else{
                return "Match created succesfully";
            }
        }

    } catch (error) {
        return error;
    }
}

const checkIfMatched = async(matchInfo) => {
    try {
        
        const matchOne = await Match.findOne({
            where: {
                userid_first: matchInfo.userid_first,
                userid_second: matchInfo.userid_second,
            }
        });

        const matchTwo = await Match.findOne({
            where: {
                userid_first: matchInfo.userid_second,
                userid_second: matchInfo.userid_first,
            }
        });

        if(matchOne && matchTwo){
            return true;
        }
        else{
            return false;
        }

    } catch (error) {
        return error;
    }
}

const deleteMatch = async(matchInfo) => {

    try {

        let match = await Match.findOne({
            where: {
                userid_first: matchInfo.userid_first,
                userid_second: matchInfo.userid_second,
            }
        });

        if(match){
            const toDelete = await Match.destroy({
                where: {
                    userid_first: matchInfo.userid_first,
                    userid_second: matchInfo.userid_second,
                }
            });
            return "Match removed 💔";
        }
        else{
            return "A match between these two users doesn't exist";
        }

    } catch (error) {
        return error;
    }
}


module.exports = {
    createMatch,
    deleteMatch,
}