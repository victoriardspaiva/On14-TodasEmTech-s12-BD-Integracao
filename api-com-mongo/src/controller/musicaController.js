const MusicSchema = require("../models/musicaSchema")
const mongoose = require("mongoose")

const getAll = async (req, res) => {
    try {
        const musicas = await MusicSchema.find()
        res.status(200).json(musicas)
    } catch (error) {
        res.status(500).json({
            mensagem: error.message,
        })
    }
}

const createMusic = async (req, res) => {
    try {
        const musica = new MusicSchema({
            artista: req.body.artista,
            titulo: req.body.titulo,
            album: req.body.album,
            ano: req.body.ano,
            _id: new mongoose.Types.ObjectId(),
            nome: req.body.nome
        })

        const musicaSalva = await musica.save()
        res.status(201).json({
            musica: musicaSalva
        })

    } catch (error) {
        res.status(500).json({
            mensagem: error.message
        })
    }
}

const musicaById = async (req, res) => {
    try {
        const musicaEncontrada = await MusicSchema.findById(req.params.id)
        res.status(200).json(musicaEncontrada)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    getAll,
    createMusic,
    musicaById
}