import React from 'react'
import './Sidebar.css'

import { CiHome } from "react-icons/ci";
import { CiStickyNote } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { useNavigate } from 'react-router-dom'


const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <div className='sidebar'>
            <span onClick={() => navigate("/")} ><CiHome className='sidebarIcon' /><p>Home</p></span>
            <span onClick={() => navigate("/favorite")} ><CiHeart className='sidebarIcon' /><p>Favorite</p></span>
        </div>
    )
}

export default Sidebar
