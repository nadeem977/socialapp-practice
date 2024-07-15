import React from "react";
import SideBars from "../components/SideBars";
import { BsArrowLeft } from "react-icons/bs";
import { Usermessages } from "../assets/data";
import { UseronChat } from "../assets/type";
import Messages from "../components/Messages";

const ChatRoom = () => {
  return (
    <>
      <section className="flex">
        <SideBars />
        <main className="w-full h-screen overflow-auto flex">
          <div className="min-w-[450px]">
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
            <div className="w-full">
                {Usermessages.map((item: UseronChat, i: number) => (
                  <div
                    key={i}
                    className="flex items-center cursor-pointer p-2 gap-4 hover:bg-slate-200">
                    <img
                      src={item.img}
                      alt="user"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="w-full">
                    <div className="flex items-center justify-between">
                        <h1 className="text-[17px] font-semibold">
                          {item.name}
                        </h1>
                        <p className="text-[14px] text-gray-400">{item.time}</p>
                      </div>
                      <p className="text-[16px]">{item.message}</p>
                    </div>
                  </div>
                ))}
              </div>
          </div>
          {/* <div className="w-full border-l-[2px] border-[#BCBCBC] h-screen p-5 flex justify-center flex-col">
                <h1 className="text-[30px] font-bold">Select a chat</h1>
                <p className="text-[#BCBCBC] text-2xl">Choose from one of your existing chats to read and send messages here.</p>
              </div> */}
              <Messages />
        </main>
      </section>
    </>
  );
};

export default ChatRoom;
