const express = require("express");
const model = require("../Database/Models/NoteModel");

const handleCreateNote = async (req, res) => {
    try {
        const body = req.body;

        const date = new Date();
        const day = date.getDate();
        const month = date.toLocaleString('en-US', { month: 'short' });
        const newNote = await model.create({
            title: body.title,
            note: body.content,
            date: `${day} ${month}`
        });
        res.status(200).json({ msg: "Notes created successfully" })
    } catch (error) {
        console.log(error)
    }
}

const handleEditNote = async (req, res) => {
    try {
        const body = req.body;
        const date = new Date();
        const day = date.getDate();
        const month = date.toLocaleString('en-US', { month: 'short' });
        const updateNote = await model.findByIdAndUpdate(req.params.id, {
            title: body.title,
            note: body.content,
            date: `${day} ${month}`
        }, { new: true });
        res.status(200).json({ msg: "Note update Successfully", note: updateNote });
    } catch (error) {
        console.log(error)
    }
}

const handleGetAllNotes = async (req, res) => {
    try {
        const notes = await model.find({});
        res.status(201).json({ msg: "fetching all notes", notes: notes })
    } catch (error) {
        console.log(error)
    }
}

const handleGetNoteById = async (req, res) => {
    try {
        const note = await model.findById(req.params.id);
        res.status(201).json({ msg: "fetching all notes", note: note })
    } catch (error) {
        console.log(error)
    }
}

const handleDeleteNote = async (req, res) => {
    try {
        const id = req.params.id;
        await model.findByIdAndDelete(id);
        res.json({ msg: "Deleted", id });
    } catch (error) {
        console.log(error)
    }
}

const handleGetFavoriteNotes = async (req, res) => {
    try {
        const notes = await model.find({ isFavorite: true });
        res.json({ notes });
    } catch (error) {
        console.log(error)
    }
}

const handleToggleFavorite = async (req, res) => {
    try {
        const note = await model.findById(req.params.id);
        note.isFavorite = !note.isFavorite;
        await note.save();
        res.json({ msg: "Updated", note });
    } catch (error) {
        console.log(error)
    }
}

module.exports = { handleCreateNote, handleEditNote, handleGetAllNotes, handleGetNoteById, handleDeleteNote, handleGetFavoriteNotes, handleToggleFavorite }