const mongoose = require("mongoose")

require('dotenv-safe').config()
const MONGODB_URI = process.env.MONGODB_URI

const connect = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Banco conectado!");
    } catch (e) {
        console.log(e, message);
    }
}

module.exports = { 
    connect 
}