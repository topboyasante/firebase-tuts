import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import AddTicket from './pages/AddTicket'
import EditTicket from './pages/EditTicket'
import Main from './pages/Main'
import {AppContext} from './context/AppContext'

import { db } from './firebase-config'
import {collection,getDocs} from 'firebase/firestore'


function App() {

  const [users,setUsers] = useState([])
  const usersCollectionRef = collection(db,"users")
  useEffect(()=>{
    async function getUsers(){
      const data = await getDocs(usersCollectionRef)
      setUsers(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
    }
    getUsers()
  })

  return (
   <AppContext.Provider value={{users}}>
     <div className='bg-[#000000] h-screen text-white'>
     
        <Navbar/>
        <section className='hidden md:block lg:block'>
            <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='add-ticket' element={<AddTicket/>}/>
              <Route path=':ticketID' element={<EditTicket/>}/>
            </Routes>
        </section>
      <p className='md:hidden lg:hidden pt-[7vh] text-center text-xl'>Please View This on a Large Screen.</p>
    </div>
   </AppContext.Provider>
  )
}

export default App