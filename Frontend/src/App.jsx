import React from 'react'
import './App.css'

import MainLayout from './Components/layoutComponent/mainLayout'
import CreateNote from './Components/notesComponent/CreateNote/CreateNote'
import Favorite from './Pages/favorite/Favorite'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/createnote" element={<CreateNote header="Create new note" />} />
          <Route path="/editnote/:id" element={<CreateNote header="Note" />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
