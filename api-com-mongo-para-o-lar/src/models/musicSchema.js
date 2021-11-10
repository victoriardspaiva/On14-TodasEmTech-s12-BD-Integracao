const mongoose = require("mongoose")

const musicModel = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    singer: {
        type: String,
        require: true
    },
    album: {
        type: String
    },
    year: {
        type: Number
    },
    createdIn: {
        type: Date,
        default: new Date()
    },
    title: {
        type: String,
        require: true
    },
    composer: {
        type: String
    },
    like: {
        type: Boolean
    },
    deslike: {
        type: Boolean
    }
})

module.exports = mongoose.model("music", musicModel)