import React from 'react'
import SideBars from '../components/SideBars'
import { BsArrowLeft } from 'react-icons/bs'
import { BsTypeItalic } from "react-icons/bs";
import { GrUnderline } from "react-icons/gr";
import { IoImageOutline } from "react-icons/io5";

const BlogPost = () => {

    
  return (
    <>
    <section className='w-full flex'>
        <SideBars/>
        <main className='w-full h-screen overflow-auto'>
         <div className='flex items-center gap-2 justify-between p-5 border-b-[2px] border-gray1'>
        <div className='flex items-center gap-3'> <BsArrowLeft />
        <h1 className='text-[22px] font-bold'>Create a Blog Post</h1></div>
          <input type="text" placeholder='Search' className='p-3 rounded-full bg-white w-full max-w-[350px] border-[1px] border-gray-400 outline-green'/>
         </div>

         <div className='flex items-center justify-center w-full h-full my-5'>
            <div className='bg-white shadow-md rounded-2xl w-full max-w-[700px]'>
           <div className='p-10'>
           <div>
                <h1 className='text-[25px] font-semibold mb-1'>Blog Title</h1>
                <textarea 
                placeholder='Blog title goes here...' 
                className='w-full bg-gray-100 border-[2px] border-gray-300 p-3 outline-green rounded-xl h-[100px]' >
                </textarea>
            </div>
            <div className='mt-3'>
                <h1 className='text-[25px] font-semibold mb-1'>Content</h1>
                <textarea 
                placeholder='Start writing your blog' 
                className='w-full bg-gray-100 border-[2px] border-gray-300 p-3 outline-green rounded-xl h-[300px]' >
                </textarea>
                <div className="flex items-center justify-between px-2 mt-[-3rem]">
                    <div className='flex items-center gap-1'>
                        <h1 className='w-[30px] font-bold h-[30px] bg-gray-200 rounded-full flex items-center justify-center'>B</h1>
                        <p className='text-[20px] p-1.5 cursor-pointer hover:bg-gray-200 rounded-full '><BsTypeItalic/></p>
                        <p className='text-[20px] p-1.5 cursor-pointer hover:bg-gray-200 rounded-full '><GrUnderline/></p>
                        <p className='text-[20px] p-1.5 cursor-pointer hover:bg-gray-200 rounded-full '><IoImageOutline/></p>
                      
                    </div>
                    <p>0/2500</p>
                </div>
            </div>
           </div>
            <div className='border-t-2 border-gray-400 w-full py-5 pr-10 flex justify-end'>
              <button className='bg-green p-2 w-[180px] rounded-full text-white'>Post Blog</button>
            </div>
            </div>

         </div>
        </main>
    </section>
    </>
  )
}

export default BlogPost