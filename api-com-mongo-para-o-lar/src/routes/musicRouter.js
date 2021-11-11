const express = require("express")
const router = express.Router()
const controller = require("../controller/musicController")

router.get("/all", controller.getAll)
router.get("/byid?", controller.singerById)
router.post("/create", controller.createSinger)
router.patch("/update?", controller.upSinger)

module.exports = router