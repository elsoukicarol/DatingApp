const express = require("express");
const { newMatchController, deleteMatchController } = require("../controllers/match.controller");
const { createValidMatch, deleteMatch } = require("../validators/match.validator");

const router = express.Router();

router.post("/match/newMatch", createValidMatch, newMatchController);

router.delete("/match/deleteMatch", deleteMatch, deleteMatchController);

module.exports = router;