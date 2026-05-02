import React, { useState } from 'react'
import './note.css'
import { useNavigate } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

const Note = ({ note, setNotes }) => {
    const Navigate = useNavigate();

    async function deleteNote(id) {

        const res = await fetch(`http://localhost:8000/notes/${id}`, {
            method: "DELETE",
        });

        const data = await res.json();

        setNotes(prev => prev.filter(note => note._id !== id));
    }

    async function handleFavorite(id) {
        const res = await fetch(`http://localhost:8000/notes/${id}`, {
            method: "PUT"
        });

        const data = await res.json();

        setNotes(prev =>
            prev.map(n => n._id === id ? { ...n, isFavorite: data.note.isFavorite } : n));
    }
    return (
        <div className='notecomponent' onClick={() => { Navigate(`/editnote/${note._id}`) }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                <div className="favorite" onClick={(e) => { e.stopPropagation(); handleFavorite(note._id) }}>
                    {note.isFavorite ? <><IoMdHeart size={20} style={{ color: "var(--primary-color)" }} /></> : <><IoMdHeartEmpty size={20} className='icon-note' /></>}
                </div>
                <RxCross2 size={20} onClick={(e) => { e.stopPropagation(); deleteNote(note._id) }} className='icon-note' />
            </div>
            <div className='note'>
                {note.note}
            </div>
            <div className="noteinfo">
                <h3>{note.title}</h3>
                <span>{note.date}</span>
            </div>
        </div>
    )
}

export default Note
