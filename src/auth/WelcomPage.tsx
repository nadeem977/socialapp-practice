import React from 'react'
import { Link } from 'react-router-dom'

const WelcomPage = () => {
  return (
    <>
    <div className='min-h-screen h-full w-full bg-[#F8F8F8] flex items-center justify-center'>
      <div className='welcmshdo bg-white flex flex-col gap-2 justify-around text-center p-5 rounded-[15px] w-full max-w-[782px] min-h-[500px] mx-auto'>
      <div className='text-[25px] font-semibold'>
      <p>Thank you for signing up with Scribbes,</p>
      <p>to get started setup your username</p>
      </div>

       <input type="text" placeholder='Your Scribbes username'  className='border-gray-300 border-[2px] focus:outline-green p-3 
       rounded-full max-w-[400px] mx-auto w-full'/>
      <Link to="/Welcom-Screen">
       <button className='bg-green p-3 max-w-[200px] mx-auto w-full rounded-full text-white font-semibold'>Continue</button>
      </Link>
      </div>
    </div>
    </>
  )
}

export default WelcomPage