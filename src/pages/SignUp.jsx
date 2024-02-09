import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
const SignUp = () => {
  const[showPassword, SetShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email:"",
    password:"",
    name:"",
  })
const{email,password,name} = formData;
  function onChange(e){
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]:e.target.value
    }))
  }
  return (
    <section>
      <h1 className="text-center text-3xl font-bold mt-6 ">Sign Up</h1>

      <div className="flex items-center justify-center flex-wrap px-6 py-12 max-w-6xl mx-auto">

        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input type="text" id="name" value={name} placeholder="Full name" onChange={onChange}
            className="w-full mb-6 py-2 px-4 text-xl border-gray-300 bg-white text-gray-700 rounded transition duration-150 ease-in-out "
             />
            <input className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition duration-150 ease-in-out mb-6 " 
            type="email"
             placeholder="Enter Email"
             id="email"
             value={email} 
             onChange={onChange}
             />
             <div className="relative mb-6">
             <input className="w-full text-xl py-2 px-4 text-gray-700 border-gray-300 rounded transition duration-150 ease-in-out"
             type={showPassword?'text':'password'} placeholder="Enter Password"
             id="password"
             value={password}
             onChange={onChange}
             />
             { showPassword ?
             <FaRegEyeSlash className="absolute top-3 right-3 text-lg cursor-pointer"
             onClick={()=>SetShowPassword((prevState)=>!prevState)}
             />
             :   
             <FaRegEye className="absolute top-3 right-3 text-lg cursor-pointer"
             onClick={()=>SetShowPassword((prevState)=>!prevState)}
             />}        
             </div>
            
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p>Already have an Account <Link to='/sign-in' className="text-red-600 hover:text-red-800 transition duration-150 ease-in-out ml-1">Sign In</Link> </p>
              <p><Link to='/forgot-password'
              className="text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out"
              >Forget Password</Link></p>
            </div>

            <button type="submit"
            className="w-full bg-blue-500 py-3 px-7 uppercase text-white text-sm font-medium rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-900"
            >Sign Up</button>

            <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>

            <OAuth/>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
