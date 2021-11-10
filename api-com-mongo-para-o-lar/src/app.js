const express = require("express")
const cors = require("cors")

const db = require("./database/mongoConfig")
const musicRouter = require("./routes/musicRouter")

const app = express()

app.use(cors())
app.use(express.json())
app.use("/music", musicRouter)

db.connect()

module.exports = app