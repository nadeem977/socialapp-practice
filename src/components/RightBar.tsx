import React from "react";
import { FaPlus } from "react-icons/fa6";
import { tranding,trandingvideos } from "../assets/data";
import { Tranddings,TrandingVideos } from "../assets/type";

const RightBar = () => {

  return (
    <div className="min-w-[350px] 2xl:min-w-[450px] py-5 px-2 h-screen overflow-auto">
      <div className="my-5">
        <input
          type="text"
          placeholder="Search "
          className="w-full p-3 rounded-full border-[1px] border-[#BCBCBC] outline-none "
        />
      </div>
      <div className="trandbox bg-white rounded-lg w-full">
        <h1 className="p-3 text-[20px] font-bold border-b-[2px] border-[#BCBCBC]">
          Trending Communities
        </h1>
        <div className="flex flex-col gap-3 mt-5 p-3">
          {tranding.map((item: Tranddings, i: number) => (
            <div
              key={i}
              className="flex items-center cursor-pointer gap-3 justify-between p-3 bg-white rounded-lg trandshado">
              <div className="flex items-center gap-3">
                <img
                  src={item.img}
                  alt="image"
                  className="w-[54px] h-[54px] rounded-full object-cover"
                />
                <div>
                  <h1 className="text-[#000580] leading-[15px] text-[20px] font-bold">{item.title}</h1>
                  <p className="text-[#BCBCBC] text-[16px]">{item.followers}</p>
                </div>
              </div>
              <div className="bg-[#1CAC19] rounded-full p-2 text-white">
                <FaPlus />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="trandbox bg-white rounded-lg w-full mt-5">
        <h1 className="p-3 text-[20px] font-bold border-b-[2px] border-[#BCBCBC]">
          Trending Videos
        </h1>
        <div className="flex flex-col gap-3 mt-5 p-3">
          {trandingvideos.map((item: TrandingVideos, i: number) => (
            <div className="flex gap-3 bg-white rounded-lg trandshado p-2" key={i}>
            <img
              src={item.img}
              alt="image"
              className="w-[60px] h-[60px]  rounded-full object-cover"
            />
            <div>
              <h1 className="text-[#000580] leading-[15px] text-[15px] font-normal">{item.title}</h1>
              <span className="flex items-center gap-2 mt-3 flex-wrap">
              <img src={item.profile} alt="image" className="w-[25px] h-[25px] rounded-full object-cover" />
              <p className="text-[#BCBCBC] text-[12px]">{item.name}</p>
              <div className="px-1 w-fit rounded-full flex items-center gap-1 text-[13px] bg-[#D9D9D9]">
                <img src={item.oscr} alt="image" className="w-[15px] h-[15px] rounded-full"/>Soccer
             </div>
              </span>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightBar;
