import React, { useState } from "react";
import { MainLogo } from "../assets/Icons";
import { SidebarData } from "../assets/data";
import { Link ,useLocation} from "react-router-dom";
import { SidebarItem } from "../assets/type";
import CreatePost from "./CreatePost";

 

const SideBars: React.FC = () => {
 
  const location = useLocation().pathname;
  return (
    <div className="h-screen overflow-auto p-3 min-w-[280px] 2xl:min-w-[350px] pb-5 bg-white shados">
      <div className="flex items-center justify-center my-[2rem]">
        <MainLogo />
      </div>
     <Link to="/Profile">
     <div className="flex items-center gap-5 w-fit mx-auto p-2  mt-[3rem] border-[1px] border-[#BCBCBC] rounded-lg ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb3MNPgAEEjF2phJFIgyTwRBQFZmn9VNKVaA&s"
          alt="image"
          className="w-[50px] h-[50px] rounded-full object-cover"/>
        <div>
          <h1 className="font-bold text-[18px] mt-2 leading-[20px]">John Doe</h1>
          <p className="text-[#BCBCBC]">1.90K Followers</p>
        </div>
      </div>
     </Link>
      <div className="w-full flex flex-col gap-3 mt-10">
        {SidebarData.map((items:SidebarItem, i: number) => (
          <div
            key={i}
            
            className={`flex activescals gap-5 p-2 rounded w-full justify-start pl-[2.5rem]
               ${
                location === items.link ? "bg-[#1CAC19] text-white" : ""
            }`}>
            <span className="text-[25px]">{items.icon}</span>
            <Link to={`${items.link}`} className="text-[18px]">
              {items.title}
            </Link>
          </div>
        ))}
      </div>
      <CreatePost/>
      <Link to='/sign-in'><button className="w-full rounded-full py-3 bg-[#1CAC19] text-white mt-5">Login</button></Link>
    </div>
  );
};

export default SideBars;
