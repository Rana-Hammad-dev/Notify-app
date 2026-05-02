import React from 'react'
import './CreateNewNoteBtn.css'
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';

const CreateNewNoteBtn = () => {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate("/createnote")} className='CreateNoteBotton'><HiOutlinePencilSquare className='addicon' /></button>
    )
}

export default CreateNewNoteBtn
