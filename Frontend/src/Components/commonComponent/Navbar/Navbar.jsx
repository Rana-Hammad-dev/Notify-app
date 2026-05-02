import React from 'react';
import { LuNotebookPen } from "react-icons/lu";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from '../../../context/ThemeContext';
import './Navbar.css'

const Navbar = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <div className='navbar'>
            <div className="logo">
                <LuNotebookPen className='icon' />
            </div>
            <div className="header">
                <h1>Notify</h1>
            </div>
            <div className="tools">
                {isDark
                    ? <MdOutlineLightMode className='icon' onClick={toggleTheme} />
                    : <MdOutlineDarkMode className='icon' onClick={toggleTheme} />
                }
            </div>
        </div>
    )
}

export default Navbar