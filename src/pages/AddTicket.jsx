import React, { useState } from 'react'
import { db } from '../firebase-config'
import { addDoc,collection } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function AddTicket() {
    const [newName,setNewName] = useState('')
    const [newAge,setNewAge] = useState()
    const [newCategory,setNewCategory] = useState()
    const [newSession,setNewSession] = useState()
    const usersCollectionRef = collection(db,"users")
    const navigate = useNavigate()
    async function createTicket(e){
        e.preventDefault()
        if(newName!='' && newAge!= '' && newCategory!='' && newSession!=''){
            await addDoc(usersCollectionRef,{
                Name:newName,
                Age:newAge,
                Category:newCategory,
                Session:newSession
            }).then(()=>{
                Swal.fire({
                    title: 'Success!',
                    text: 'The New Ticket Was Added.',
                    icon: 'success',
                    timer: 1500,
                    showConfirmButton:false
                  })
            })
            navigate('/')
        }else{
            Swal.fire({
                title: 'Error!',
                text: 'The Form is Incomplete or has Wrong Data.',
                icon: 'error',
                confirmButtonText: 'Back',
                confirmButtonColor:'#3b82f6'
              })
        }
    }
  return (
    <main className='pt-[7vh] px-5 max-w-[1240px] mx-auto'>
       <section className='flex justify-between items-center p-5'>
        <h1 className='text-center p-3 text-xl'>Add A New Ticket</h1>
        <button className='bg-red-500 px-4 py-2 rounded-md hover:scale-105 ease duration-300' onClick={()=>{navigate(-1)}}>
            <p>Go Back</p>
        </button>
       </section>
        <hr />
        <form className='bg-[#121212] p-3 rounded my-5'>
            <div className='flex flex-col my-2'>
                <label htmlFor="name">Name:</label>
                <input type="text" className='outline-none border border-gray-500 bg-[#121212] rounded my-2 p-2'
                onChange={(event)=>setNewName(event.target.value)}/>
            </div>
            <div className='flex flex-col my-2'>
                <label htmlFor="name">Age:</label>
                <input type="number" className='outline-none border border-gray-500 bg-[#121212] rounded my-2 p-2'
                onChange={(event)=>setNewAge(event.target.value)}/>
            </div>
            <div className='flex flex-col my-2'>
                <label htmlFor="name">Category:</label>
                <select className='outline-none border border-gray-500 bg-[#121212] rounded my-2 p-2'
                onChange={(event)=>setNewCategory(event.target.value)}>
                    <optgroup >
                          <option value=""></option>
                          <option value="Junior">Junior</option>
                          <option value="Adult">Adult</option>
                      </optgroup>
                </select>
            </div>
            <div className='flex flex-col my-2'>
                <label htmlFor="name">Session:</label>
                <select className='outline-none border border-gray-500 bg-[#121212] rounded my-2 p-2'
                onChange={(event)=>setNewSession(event.target.value)}>
                    <optgroup >
                          <option value=""></option>
                          <option value="Morning">Morning</option>
                          <option value="Noon">Noon</option>
                          <option value="Night">Night</option>
                      </optgroup>
                </select>
            </div>
            <button className='bg-blue-500 px-4 py-2 rounded-md hover:scale-105 ease duration-300' onClick={createTicket}>
                        <p>Add Ticket</p>
            </button>
        </form>
    </main>
  )
}

export default AddTicket