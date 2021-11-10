const mongoose = require("mongoose")

const musicModel = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    singer: {
        type: String,
        require: true
    },
    like: {
        type: Boolean
    },
    deslike: {
        type: Boolean
    },
    createdIn: {
        type: Date,
        default: new Date() 
    },
    discography: {
        title: {
            type: String,
            require: true
        },
        music: {
            music: new Array
        },
        createdIn: 
        {
            type: Date,
            default: new Date(),
            require: true
        }
    }
})

module.exports = mongoose.model("music", musicModel)