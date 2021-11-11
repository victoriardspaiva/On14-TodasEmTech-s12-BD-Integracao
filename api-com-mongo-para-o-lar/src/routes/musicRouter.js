const express = require("express")
const router = express.Router()
const controller = require("../controller/musicController")

router.get("/all", controller.getAll)
router.get("/?:id", controller.singerById)
router.post("/create", controller.createSinger)

module.exports = router