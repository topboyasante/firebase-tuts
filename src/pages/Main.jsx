import React, { useContext } from 'react'
import {BiEdit} from 'react-icons/bi'
import {AiOutlineDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { db } from '../firebase-config'
import {doc,deleteDoc} from 'firebase/firestore'

function Main() {
    
  const {users} = useContext(AppContext)
  async function deleteUser(id){
    const userDoc = doc (db,"users", id)
    await deleteDoc(userDoc)
  }
  return (
       <section className='pt-[10vh] w-full lg:max-w-[1240px] mx-auto px-2 lg:px-5'>
           <section className='p-5'>
                <Link to='add-ticket'>
                    <button className='bg-blue-500 px-4 py-2 rounded-md hover:scale-105 ease duration-300'>
                        <p>Add Ticket</p>
                    </button>
                </Link>
           </section>
            <table className='table table-zebra w-full'>
                <thead className='bg-[#121212]'>
                    <tr className=''>
                        <th className='p-3 lg:p-5 font-[500] lg:text-lg text-white border-r border-r-gray-500'>Name</th>
                        <th className='p-3 lg:p-5 font-[500] lg:text-lg text-white border-r border-r-gray-500'>Ticket ID</th>
                        <th className='p-3 lg:p-5 font-[500] lg:text-lg text-white border-r border-r-gray-500'>Category</th>
                        <th className='p-3 lg:p-5 font-[500] lg:text-lg text-white border-r border-r-gray-500'>Session</th>
                        <th className='p-3 lg:p-5 font-[500] lg:text-lg text-white'>Actions</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        users.map((user)=>{
                            return(
                                <tr key={user.id}>
                                    <td className='text-center p-5 text-white'>{user.Name}</td>
                                    <td className='text-center p-5 text-white'>ID-{user.id}</td>
                                    <td className='text-center p-5 text-white'>{user.Category}</td>
                                    <td className='text-center p-5 text-white'>{user.Session}</td>
                                    <td className='flex items-center justify-around p-5'>
                                       <Link to={`${user.id}`}>
                                        <button>
                                            <BiEdit color='white' size={25} className='hover:scale-105 ease duration-200'/>
                                        </button>
                                       </Link>
                                        <AiOutlineDelete color='white' size={25} className='hover:scale-105 ease duration-200'
                                        onClick={()=>{deleteUser(user.id)}}/>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
      </section>
  )
}

export default Main