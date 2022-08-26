import React from 'react'
import {FaRegUserCircle} from 'react-icons/fa'
import {GrKey}  from 'react-icons/gr'

function Login() {
  return (
    <div className='p-8 bg-white'>
        <div className="text-4xl">
            Login
        </div>

        <div className='space-y-4 mt-5'>
            <div className='space-x-10 flex items-center border py-2 mx-2 px-2'>
                <label htmlFor="userName" className='text-2xl border-r-2 pr-2'><FaRegUserCircle/></label>
                <input type="text" name="userName" id="userName" placeholder='Username' className='focus:outline-none'/>
            </div>

            <div className='space-x-10 flex items-center border py-2 mx-2 px-2'>
                <label htmlFor="password" className='text-2xl border-r-2 pr-2'><GrKey/></label>
                <input type="password" name="password" id="password" placeholder='password' className='focus:outline-none'/>
            </div>
        </div>

        <div className="flex mt-5 justify-between  items-center">
        <div className='ml-2 flex items-center gap-1'>
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember">Remember me</label>
        </div>
        <button className='bg-blue-600 px-4 py-1 text-white text-2xl rounded-lg hover:scale-105 active:bg-blue-700'>Login</button>
        </div>
        <div className="text-blue-300 font-sm mt-3"> Forgot your password? </div>
    </div>
  )
}

export default Login