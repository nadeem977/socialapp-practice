import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom';
import { AppleIocn, FacebookIcon, Gooleicon } from '../assets/Icons';

const Login = () => {

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };


  return (
    <>
   <div className='grid grid-cols-2 gap-0 min-h-screen h-full w-full'>
   <div className='loginscren text-white grid  grid-rows-2 '>
    <h1 className='text-[3rem] font-bold flex items-center justify-center'>Scribbes</h1>
    <div className='flex items-center justify-center flex-col'>
        <span>
        <h1 className='text-[3rem] font-bold w-fit'>A growing community </h1>
        <h1 className='text-[3rem] font-bold w-fit'>of writers, thinkers and</h1>
        <h1 className='text-[3rem] font-bold w-fit'>like-minded people.</h1>
        </span>
    </div>
   </div>
   <div className='flex items-center justify-center'>
    <div className='w-[70%] mx-auto'>
   <h1 className='text-[3rem] font-bold'>Login</h1>
   <div className='flex flex-col gap-5 mt-5'>
    <div>
        <p>Email*</p>
       <input type='text' placeholder='Email' className='w-full focus:outline-green border-2 border-gray-300  rounded-full  p-3'/>
    </div>
    <div>
        <p>Password*</p>
    <input type='text' placeholder='Password' className='w-full focus:outline-green border-2 border-gray-300  rounded-full  p-3'/>
    </div>
    <div className='flex items-center justify-between'>
    <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange}   style={{color:"#1CAC19"}} />}label="Remember me"/>
    <Link to="/sign-in" className='text-green hover:underline'>Forget Password?</Link>
    </div>
    <Link to="/welcome">
    <button className='w-full p-3 text-white font-semibold bg-green rounded-full'>Login</button>
    </Link>
    <div className='flex items-center gap-2 text-gray-400'>
        <p className='border-[1px] border-gray-300 w-full'/>
        Or
        <p className='border-[1px] border-gray-300 w-full'/>
    </div>
   <div className='flex items-center justify-between mx-auto mt-5 gap-3 w-full max-w-[300px]'>
   <div className='shadow-md p-2 rounded-full cursor-pointer'><Gooleicon/></div>
   <div className='shadow-md p-2 rounded-full cursor-pointer'> <FacebookIcon/></div>
    <div className='shadow-md p-2 rounded-full cursor-pointer'> <AppleIocn/></div>
   </div>
   <div className='flex items-center gap-1 w-fit mx-auto mt-4'>
   Not a member? <Link to="/sign-up" className='text-green font-bold'>Sign up</Link>
   </div>
   </div>
    </div>
   </div>
   </div>
    </>
  )
}

export default Login