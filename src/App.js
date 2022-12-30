import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import AddTicket from './pages/AddTicket'
import Main from './pages/Main'


function App() {


  return (
    <div className='bg-[#000000] h-screen text-white'>
     
        <Navbar/>
        <section className='hidden md:block lg:block'>
            <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='add-ticket' element={<AddTicket/>}/>
            </Routes>
        </section>
      <p className='md:hidden lg:hidden pt-[7vh] text-center text-xl'>Please View This on a Large Screen.</p>
    </div>
  )
}

export default App