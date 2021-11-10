const MusicSchema = require("../models/musicSchema")
const mongoose = require("mongoose")

const getAll = async (req, res) => {
    try {
        const music = await MusicSchema.find()
        res.status(200).json(music)
    } catch (e) {
        res.status(500).json({
            mensagem: e.message,
        })
    }
}

module.exports = { getAll }