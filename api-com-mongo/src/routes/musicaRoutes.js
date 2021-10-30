const express = require("express")
const router = express.Router()
const controller = require("../controller/musicaController")

router.get("/all", controller.getAll)
router.post("/create", controller.createMusic)
router.get("/:id", controller.musicaById)

module.exports = router