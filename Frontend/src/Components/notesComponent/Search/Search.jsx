import React from 'react'
import './Search.css'
import { IoIosSearch } from "react-icons/io";

const Search = ({ query, setQuery }) => {

    return (
        <div className='search'>
            <input type="text" name="search" placeholder='search notes' value={query} onChange={(e) => setQuery(e.target.value)} />
            <IoIosSearch className='search-icon' size={30} />
        </div>
    )
}

export default Search
