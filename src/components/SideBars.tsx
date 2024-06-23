import React, { useState } from "react";
import { MainLogo } from "../assets/Icons";
import { SidebarData } from "../assets/data";
import { Link } from "react-router-dom";
import { SidebarItem } from "../assets/type";

 

const SideBars: React.FC = () => {
 
  const [activebtn, setActivebtn] = useState<number>(0);

  return (
    <div className="h-screen overflow-auto p-3 min-w-[280px] w-[280px] pb-5 bg-white">
      <div className="flex items-center justify-center my-[2rem]">
        <MainLogo />
      </div>
      <div className="flex items-center gap-5 w-fit mx-auto p-2  mt-[3rem] border-[1px] border-[#BCBCBC] rounded-lg ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb3MNPgAEEjF2phJFIgyTwRBQFZmn9VNKVaA&s"
          alt="image"
          className="w-[50px] h-[50px] rounded-full object-cover"
        />
        <div>
          <h1 className="font-bold text-[18px] mt-2 leading-[20px]">John Doe</h1>
          <p className="text-[#BCBCBC]">1.90K Followers</p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 mt-10">
        {SidebarData.map((items: SidebarItem, i: number) => (
          <div
            key={i}
            onClick={() => setActivebtn(i)}
            className={`flex activescals gap-5 p-2 rounded w-full justify-start pl-[2.5rem] ${
              activebtn === i ? "bg-[#1CAC19] text-white" : ""
            }`}>
            <span className="text-[25px]">{items.icon}</span>
            <Link to="/" className="text-[18px]">
              {items.title}
            </Link>
          </div>
        ))}
      </div>
      <button className="w-full rounded-full py-3 bg-[#1CAC19] text-white mt-10">Make a post</button>
    </div>
  );
};

export default SideBars;
