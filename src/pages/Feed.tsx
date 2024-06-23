 import React,{useState} from 'react'
import SideBars from '../components/SideBars';
import RightBar from '../components/RightBar';
 
const Feed = () => {

  const [ activesfeed ,setActiveFeed] = useState<string>("pop")

  return (
    <section className='flex'>
    <SideBars/>
     <main className='w-full p-5 min-h-screen'>
        <div>
        <div className='flex items-center gap-2 p-2 rounded-full bg-[#D9D9D961] w-fit'>
          <button className={`w-[140px] py-2  rounded-full 
          ${activesfeed === "new"?" bg-white w-[140px]":"bg-transparent"}`}
          onClick={()=>setActiveFeed("new")}>Newest</button>
          <button className={`w-[140px] py-2   rounded-full 
          ${activesfeed === "pop"?"bg-white":"bg-transparent"}`}
           onClick={()=>setActiveFeed("pop")}>Popular</button>
          <button className={`w-[140px] py-2 rounded-full 
          ${activesfeed === "foll"?"bg-white":"bg-transparent"}`}
           onClick={()=>setActiveFeed("foll")}>Following</button>

        </div>
        <select className='selects border-[#1CAC19] border-[1px] rounded-full py-2 px-3 outline-none text-[#1CAC19]'>
          <option value="All posts">All posts</option>
          <option value="Scribbes">Scribbes</option>
          <option value="Blogs">Blogs</option>
        </select>
        </div>
     </main>
     <RightBar/>
    </section>
  )
}

export default Feed;