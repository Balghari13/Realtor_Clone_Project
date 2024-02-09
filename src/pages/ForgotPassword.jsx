import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import OAuth from '../components/OAuth'

const ForgotPassword = () => {
  const[email, setEmail] = useState('')
  
  function onChange(e){
      setEmail(e.target.value)
  }
  return (
    <section>
      <h1 className='text-center text-3xl font-bold mt-6'>Forget Password</h1>

      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="key" className='w-full rounded-2xl'/>
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form>
            <input type="email" id='email' 
            value={email}
            onChange={onChange}
            placeholder='Enter Email' 
            className='w-full bg-white text-gray-700 border-gray-300 px-4 py-2 text-xl rounded transition ease-in-out mb-6'
            />

            <div className='flex justify-between items-center text-sm sm:text-lg mb-6'>
              <p>Don't have an account? <Link to='/sign-up'
              className='text-red-600 hover:text-red-800 transition duration-150 ease-in-out ml-1'
              >Register</Link></p>

              <p><Link to='/sign-in'
              className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'
              >Sign In</Link></p>
            </div>

            <button className='w-full bg-blue-500 text-white py-3 px-7 uppercase text-sm font-medium shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-900'
            type='submit'
            >Send Reset Password</button>

            <div className='flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:border-gray-300 after:flex-1'>
              <p className='text-center font-bold mx-4'>OR</p>
            </div>

            <OAuth/>
          </form>
        </div>
        
      </div>
    </section>
  )
}

export default ForgotPassword