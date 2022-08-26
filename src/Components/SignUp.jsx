import React from 'react'
import {FaRegUserCircle} from 'react-icons/fa'
import {GrKey}  from 'react-icons/gr'

const SignUp = () => {
  return (
    <div className='  p-8 bg-white'>

        <div className="text-4xl">
            Sign Up
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

            <div className='space-x-10 flex items-center border py-2 mx-2 px-2'>
                <label htmlFor="password" className='text-2xl border-r-2 pr-2'><GrKey/></label>
                <input type="password" name="password" id="password" placeholder='Re enter password' className='focus:outline-none'/>
            </div>
        </div>

        <div className="flex justify-end  mt-5 px-5 items-center">
        <button className='bg-blue-600 px-4 py-1 text-white text-2xl rounded-lg hover:scale-105 active:bg-blue-700'>Sign Up</button>
        </div>
    </div>
  )
}

export default SignUp