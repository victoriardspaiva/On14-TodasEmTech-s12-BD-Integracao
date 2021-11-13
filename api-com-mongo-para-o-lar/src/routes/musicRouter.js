const express = require("express")
const router = express.Router()
const controller = require("../controller/musicController")

router.get("/all", controller.getAll)
router.get("/byid?", controller.singerById)
router.post("/create", controller.createSinger)
router.patch("/update?", controller.upSinger)
router.delete("/delete?", controller.deleteSinger)
router.patch("/like?", controller.likeAndDeslike)
router.patch("/discography?", controller.addDiscography)

module.exports = router