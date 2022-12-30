import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import AddTicket from './pages/AddTicket'
import Main from './pages/Main'


function App() {


  return (
    <div className='bg-[#000000] h-screen text-white'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='add-ticket' element={<AddTicket/>}/>
      </Routes>
    </div>
  )
}

export default App