import React from 'react'
import './mainLayout.css'
import Navbar from '../commonComponent/Navbar/Navbar'
import Sidebar from '../commonComponent/Sidebar/Sidebar'
import AllNotes from '../notesComponent/allNotes'
import Search from '../notesComponent/Search/Search'

const mainLayout = () => {
    const [query, setQuery] = React.useState("")

    return (
        <div className='grid-container'>
            <div className='box' style={{ "gridArea": "grid-box1" }}><Navbar /></div>
            <div className='box' style={{ "gridArea": "grid-box2" }}><Sidebar /></div>
            <div className='box' style={{ "gridArea": "grid-box3" }}>
                <Search query={query} setQuery={setQuery} />
                <AllNotes query={query} setQuery={setQuery} /></div>
        </div>
    )
}

export default mainLayout
