const express = require("express");
const router = express.Router();

const { handleCreateNote, handleEditNote, handleGetAllNotes, handleGetNoteById, handleDeleteNote, handleGetFavoriteNotes, handleToggleFavorite } = require("../Controller/notes.controller");

router.post("/createnote", handleCreateNote);
router.put("/editnote/:id", handleEditNote);
router.get("/notes", handleGetAllNotes);
router.get("/notes/:id", handleGetNoteById);
router.delete("/notes/:id", handleDeleteNote);
router.get("/favorites", handleGetFavoriteNotes);
router.put("/notes/:id", handleToggleFavorite);

module.exports = router;