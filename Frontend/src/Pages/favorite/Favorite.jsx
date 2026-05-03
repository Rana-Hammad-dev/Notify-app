import React from 'react'
import './Favorite.css'
import Exitbar from '../../Components/commonComponent/Exitbar/Exitbar'
import { useState, useEffect } from 'react'
import Note from '../../Components/notesComponent/noteComponent/note'
import Sidebar from '../../Components/commonComponent/Sidebar/Sidebar'

const Favorite = () => {
    const [notes, setNotes] = useState([])
    useEffect(() => {
        fetch("https://notify-app-production.up.railway.app/favorites")
            .then(res => res.json())
            .then(data => setNotes(data.notes));
    }, []);
    return (
        <>
            <div className='favoritepage'>
                <div className='navbarfav'>
                    <h2>Favorite Notes</h2>
                </div>
                <div className='favoritenotes'>
                    {notes.length === 0 ? (
                        <p>No favorite notes yet</p>
                    ) : (
                        notes.map(note => (<Note key={note._id} note={note} />))
                    )}
                </div>
            </div>
            <div className="side">
                <Sidebar />
            </div>
        </>
    )
}

export default Favorite
