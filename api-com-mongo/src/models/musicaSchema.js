const mongoose = require("mongoose")

const musicSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    artista: {
        type: String,
        require: true
    },
    album: {
        type: String
    },
    ano: {
        type: Number
    },
    criadoEm: {
        type: Date,
        default: new Date()
    },
    nome: {
        type: String,
        require: true
    }
})

//musica = model/schema
//musica[s] = colection
module.exports = mongoose.model("musica", musicSchema)

