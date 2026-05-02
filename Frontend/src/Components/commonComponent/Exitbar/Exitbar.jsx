import React from 'react'
import { PiLessThan } from "react-icons/pi";
import { CiHome } from "react-icons/ci";
import './Exitbar.css'
import { useNavigate } from 'react-router-dom'

const Exitbar = () => {
    const navigate = useNavigate();
    return (
        <div className='exitbar' onClick={() => navigate("/")}>
            <CiHome className='exitbaricon-home' />
        </div>
    )
}

export default Exitbar
