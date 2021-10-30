const express = require("express")
const cors = require("cors")

const db = require("./database/mongoconfig")
const musicaRouter = require ("./routes/musicaRoutes")

const app = express()

app.use(cors())
app.use(express.json())
app.use("/musica/", musicaRouter)

db.connect()

module.exports = app





