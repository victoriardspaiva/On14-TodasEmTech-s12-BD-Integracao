const mongoose = require("mongoose")

const singerSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    singer: {
        type: String,
        require: true
    },
    like: {
        type: Number
    },
    deslike: {
        type: Number
    },
    createdIn: {
        type: Date,
        default: new Date()
    },
    discography: [{
        title: {
            type: String,
            require: true
        },
        createIn: {
            type: Date
        },
        musics: [String]
    }]

})

module.exports = mongoose.model("singer", singerSchema)

