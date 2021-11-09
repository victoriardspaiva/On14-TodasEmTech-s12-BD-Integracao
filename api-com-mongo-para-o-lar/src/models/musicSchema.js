const mongoose = require("mongoose")

const MusicSchema = new mongoose.Schema({
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
    createdIn:
    {
        type: Date,
        default: new Date()
    },
    title: {
        type: String,
        require: true
    },
    
})