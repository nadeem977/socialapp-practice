import React from 'react'
import MassageComponent from './MassageComponent'
import { CiImageOn } from "react-icons/ci";
import { IoSend } from "react-icons/io5";
import { BsEmojiLaughing } from "react-icons/bs";
import { IconButton } from '@mui/material';
import { PostType, menuoptions } from '../assets/type';
import { optionsmenu } from '../assets/data';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";


const ITEM_HEIGHT = 48;

const Messages = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };

  return (
    <>
    <div className='w-full border-l-[2px] border-gray1'>
        <div className='border-b-[2px] border-gray1 w-full flex items-center justify-between'>
            <div className='flex items-center gap-3 p-5'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KehqXBrMLd32HsfjDoaq098WeNA0b3g_2A&s" alt="images" className='w-[50px] h-[50px] rounded-full object-cover'/>
               <div className='flex flex-col gap-0'> 
                <h1>Jimmy McGill (@saulgoodman)</h1>
                 <small className='text-green'>online</small>
               </div>
            </div>
            <div>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}>
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: "20ch",
                    },
                  }}>
                  {optionsmenu.map((item:menuoptions,i:number) => {
                    
                    return  <MenuItem
                    key={i}
                    selected={item.option === "Pyxis"}
                    onClick={handleClose}
                    className="flex gap-4 items-center">
                    {item.icon}  {item.option}
                  </MenuItem>
                  })}
                </Menu>
          </div>
        </div>
        <div className='h-full  chathit p-5'>
         <MassageComponent/>
        </div>
        <div className='flex items-center px-2 gap-3 bg-white p-2 shadow-lg'>
           <div className='flex items-center gap-2'>
            <IconButton>
             <CiImageOn/>
            </IconButton>
             <IconButton>
           <BsEmojiLaughing/>
             </IconButton>
           </div>
            <input type="text" className='w-full p-2 rounded-full border border-gray1 outline-none' placeholder='Type Message Here'/>
            <IconButton>
            <IoSend/>
            </IconButton>
        </div>
    </div>
    </>
  )
}

export default Messages