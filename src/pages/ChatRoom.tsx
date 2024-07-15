import React from 'react'
import SideBars from '../components/SideBars'
import { BsArrowLeft } from 'react-icons/bs'
import { Usermessages } from '../assets/data'
import { UseronChat } from '../assets/type'


const ChatRoom = () => {

  return (
    <>
    <section className='flex'>
    <SideBars/>
    <main className="w-full h-screen overflow-auto">
   <div>
   <div className="flex items-center gap-2 justify-between p-5 border-b-[2px] border-gray1">
          <div className="flex items-center gap-3">
            {" "}
            <BsArrowLeft />
            <h1 className="text-[22px] font-bold">Message</h1>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="p-3 rounded-full bg-white w-full max-w-[350px] border-[1px] border-gray-400 outline-green"
          />
        </div>
        <div>
        {Usermessages.map((item:UseronChat,i:number)=>(
            <div key={i} className="flex items-center gap-4 mb-3">
            <img src={item.img} alt="user" className="w-10 h-10 rounded-full" />
            <div>
              <h1 className="text-[18px] font-semibold">{item.name}</h1>
              <p className="text-[16px]">{item.message}</p>
              <p className="text-[14px] text-gray-400">{item.time}</p>
            </div>
          </div>
        ))}
        </div>
   </div>

    </main>
    </section>
    </>
  )
}

export default ChatRoom