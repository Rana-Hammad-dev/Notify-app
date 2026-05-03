import React, { useState, useEffect } from 'react'
import './allNotes.css'
import Note from './noteComponent/note'
import CreateNewNoteBtn from '../notesComponent/CreateNewNoteBtn/CreateNewNoteBtn'

const allNotes = ({ query }) => {
    const [notes, setNotes] = React.useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            const res = await fetch("https://notify-app-production.up.railway.app/notes");
            const data = await res.json();
            setNotes(data.notes);
        }
        fetchNotes();
    }, [notes]);

    const filteredNotes =
        query.length > 0 ?
            notes.filter(note => note.title.toLowerCase().includes(query.toLowerCase()) || note.note.toLowerCase().includes(query.toLowerCase()))
            : notes;
    return (
        <div className='allnotes'>
            <CreateNewNoteBtn />
            {filteredNotes.length === 0 ? (<p>No notes found</p>) : (
                filteredNotes.map((note) => (
                    <Note key={note._id} note={note} setNotes={setNotes} />
                ))
            )}
        </div>
    )
}

export default allNotes
