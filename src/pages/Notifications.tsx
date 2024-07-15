import React from "react";
import SideBars from "../components/SideBars";
import { BsArrowLeft } from "react-icons/bs";

const Notifications = () => {
  return (
    <section className="flex">
      <SideBars />
      <main className="w-full h-screen overflow-auto">
        <div className="flex items-center gap-2 justify-between p-5 border-b-[2px] border-gray1">
          <div className="flex items-center gap-3">
            {" "}
            <BsArrowLeft />
            <h1 className="text-[22px] font-bold">Notifications</h1>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="p-3 rounded-full bg-white w-full max-w-[350px] border-[1px] border-gray-400 outline-green"
          />
        </div>
       
      </main>
    </section>
  );
};

export default Notifications;
