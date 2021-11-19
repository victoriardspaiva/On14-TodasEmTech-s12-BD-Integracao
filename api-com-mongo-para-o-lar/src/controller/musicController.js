const SingerSchema = require("../models/musicSchema")
const mongoose = require("mongoose")

const getAll = async (req, res) => {
    try {
        const music = await SingerSchema.find()
        res.status(200).json(music)
    } catch (e) {
        res.status(500).json({
            mensagem: e.message,
        })
    }
}

const singerById = async (req, res) => {
    try {
        const singerFound = await SingerSchema.findById(req.query.id)
        res.status(200).json(singerFound)
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
}

const createSinger = async (req, res) => {
    try {
        const singer = new SingerSchema({
            singer: req.body.singer,
            like: req.body.like,
            deslike: req.body.deslike,
            createdIn: req.body.createdIn,
            discography: req.body.discography,
            _id: new mongoose.Types.ObjectId()
        })

        let singerSaved = await singer.save()
        res.status(201).json({
            "Cantor/Cantora": singerSaved
        })

    } catch (e) {
        res.status(500).json({
            mensagem: e.message
        })
    }
}

const upSinger = async (req, res) => {
    try {
        let idSinger = req.query.id
        let upSinger = req.body.singer
        const findAndUp = await SingerSchema.findByIdAndUpdate({ _id: idSinger }, { singer: upSinger }, { new: true })
        res.status(200).json({
            message: "Artista atualizado com sucesso.", "Novo/a artista": findAndUp
        })
    } catch (e) {
        res.status(500).json({
            mensagem: e.message
        })
    }
}

const deleteSinger = async (req, res) => {
    try {
        let idSinger = req.query.id
        const deleteSinger = await SingerSchema.findByIdAndDelete({ _id: idSinger })
        res.status(200).json({
            messagem: "Artista deletado com sucesso.", deleteSinger
        })
    } catch (e) {
        res.status(500).json({
            messagem: e.message
        })
    }
}

const likeAndDeslike = async (req, res) => {
    try {
        let { like, deslike } = req.query
        const found = await SingerSchema.findById(req.query.id)
        if (found == undefined) {
            res.status(404).send({ message: "Artista não encontrado!" })
        }
        like == 1 ? found.like += 1 : ''
        deslike == 1 ? found.deslike -= 1 : ''
        found.save()
        like && deslike == 1 ? res.status(400).send({ message: "Não é possivel marcar like e deslike simultaneamente. Escolhar a opção deseja e tente novamente." }) : ''
        res.status(200).send(found)
    } catch (e) {
        res.status(500).json({
            messagem: e.message
        })
    }
}

const addDiscography = async (req, res) => {
    try {
        const findSinger = await req.query.id
        const bodyReq = await req.body.discography
        if (findSinger) {
            const albumSaved = await SingerSchema.findByIdAndUpdate(findSinger, {$push: {discography: bodyReq}})
            await albumSaved.save()

            res.status(200).json({
                message: "Album adicionado com sucesso.", albumSaved
            })            
        }
    } catch (e) {
        res.status(500).json({
            messagem: e.message
        })
    }
}

module.exports = {
    getAll,
    singerById,
    createSinger,
    upSinger,
    deleteSinger,
    likeAndDeslike,
    addDiscography
}