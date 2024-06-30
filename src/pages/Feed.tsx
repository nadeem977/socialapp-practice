 import React,{useState} from 'react'
import SideBars from '../components/SideBars';
import RightBar from '../components/RightBar';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Contents from '../components/Contents';
import { postsdata } from '../assets/data';


const Feed = () => {

  const [ activesfeed ,setActiveFeed] = useState<string>("pop")
  const [age, setAge] = useState<string>('10'); 
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <section className='flex'>
    <SideBars/>
     <main className='w-full p-5 min-h-screen bg-[#f8f8f8]'>
        <div className='flex items-center justify-between flex-wrap gap-2'>
        <div className='flex items-center gap-2 p-2 rounded-full bg-[#D9D9D961] w-fit'>
          <button className={`w-[140px] py-2  rounded-full 
          ${activesfeed === "new"?" bg-white text-[#000580] w-[140px]":"bg-transparent"}`}
          onClick={()=>setActiveFeed("new")}>Newest</button>
          <button className={`w-[140px] py-2   rounded-full 
          ${activesfeed === "pop"?"bg-white text-[#000580]":"bg-transparent"}`}
           onClick={()=>setActiveFeed("pop")}>Popular</button>
          <button className={`w-[140px] py-2 rounded-full 
          ${activesfeed === "foll"?"bg-white text-[#000580]":"bg-transparent"}`}
           onClick={()=>setActiveFeed("foll")}>Following</button>

        </div>

        <Select
          value={age}
          onChange={handleChange}
           className='border-[1px] bg-white  border-green text-green selecter  w-full max-w-[200px] hover:border-green focus:shadow-none'>
          <MenuItem value={10}>All posts</MenuItem>
          <MenuItem value={21}>Scribbes</MenuItem>
          <MenuItem value={22}>Blogs</MenuItem>
        </Select>
        </div>
        <div className='heighttset  overflow-y-auto w-full py-8 m-2'>
        <Contents postes={postsdata}/>
        </div>
     </main>
     <RightBar/>
    </section>
  )
}

export default Feed;