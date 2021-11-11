const express = require("express")
const cors = require("cors")

const db = require("./database/mongoConfig")
const musicRouter = require("./routes/musicRouter")

const app = express()

app.use(cors())
app.use(express.json())
app.use("/singer", musicRouter)

db.connect()

module.exports = app