const express = require("express");

const {addPlayer} =require("../controller/user")
const {allPlayer} =require("../controller/dashboard")
const { addScore } = require("../controller/user");
const { words } = require("../controller/randomWord");

const router = express.Router();

router.post("/addplayer",addPlayer)
router.patch("/addscore/:id",addScore)
router.get("/allplayer", allPlayer)
router.get("/game", words)

module.exports = router;