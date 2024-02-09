 import React from 'react'
 import { FaGoogle } from "react-icons/fa";
 const OAuth = () => {
   return (
     <button className='w-full flex items-center justify-center bg-red-700 py-2 text-white text-sm font-medium  uppercase text-center rounded shadow-sm hover:bg-red-800 transition duration-100 ease-in-out hover:shadow-lg active:bg-red-900'> 
       <FaGoogle className='text-2xl font-semibold mr-4 bg-white rounded-full p-1 text-green-600' />
      Continue with Google
     </button>
   )
 }
 
 export default OAuth