import React, { useEffect } from 'react'
import "./CreateNote.css"
import Sidebar from '../../commonComponent/Sidebar/Sidebar';
import { PiLessThan } from "react-icons/pi";
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const CreateNote = (props) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [response, setResponse] = useState("");
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const fetchNote = async () => {
            const res = await fetch(`https://notify-app-production.up.railway.app/notes/${id}`);
            const data = await res.json();

            setTitle(data.note.title);
            setContent(data.note.note);
        };

        if (id) fetchNote();
    }, [id])

    async function handleSubmit(e) {
        e.preventDefault();

        if (id) {
            const res = await fetch(`https://notify-app-production.up.railway.app/editnote/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, content })
            });
            const data = await res.json();
            setResponse(data.msg);
        } else {
            const res = await fetch("https://notify-app-production.up.railway.app/createnote", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, content }),
            });
            const data = await res.json();
            setResponse(data.msg);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='newnoteform'>
                <h1>{props.header}</h1>
                <div className='createnote'>
                    <div className="notebar" style={{ gridArea: "box1" }}>
                        <input type="text" name='title' placeholder='Title' onChange={(e) => setTitle(e.target.value)} value={title} />
                    </div>
                    <textarea name="note" style={{ gridArea: "box2" }} placeholder='note' onChange={(e) => setContent(e.target.value)} value={content}></textarea>
                    <button className='btn' type='submit' onClick={()=>navigate('/')}>{id ? "Update Note" : "Create Note"}</button>
                    <p className='popup'>{response}</p>
                </div>
            </div>
            <div className="side">
                <Sidebar />
            </div>
        </form>
    )
}

export default CreateNote
