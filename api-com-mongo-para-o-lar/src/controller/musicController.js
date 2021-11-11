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

const singerById = async (req, res) => {
    try {
        const singerFound = await MusicSchema.findById(req.query.id)
        res.status(200).json(singerFound)
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
}

const createSinger = async (req, res) => {
    try {
        const singer = new MusicSchema({
            singer: req.body.singer,
            like: req.body.like,
            deslike: req.body.deslike,
            createdIn: req.body.createdIn,
            discography: req.body.discography,
            title: req.body.discography.title,
            _id: new mongoose.Types.ObjectId()
        })
        // let discographySaved = {
        //     title: req.body.title,
        //     createdIn: req.body.createdIn,
        //     music: req.body.music
        // }


        let singerSaved = await singer.save()//, { $push: { discografia: title } }
        res.status(201).json({
            "Cantor/Cantora": singerSaved
        })

    } catch (e) {
        res.status(500).json({
            mensagem: e.message
        })
    }
}

module.exports = {
    getAll,
    singerById,
    createSinger
}