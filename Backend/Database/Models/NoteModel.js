const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    note: {
        type: String,
        required: true
    },
    date: {
        type: String
    },
    isFavorite: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

const noteModel = mongoose.model("note", noteSchema);

module.exports = noteModel;