import React, { useRef, useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "tailwindcss/tailwind.css";
import uploadimg from "../assets/upload.png";
import { comiunytys } from "../assets/data";
import { communityItem } from "../assets/type";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FaLink } from "react-icons/fa6";
import { GoFileMedia } from "react-icons/go";

const WelcomeScreen: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      const swiperInstance = document.querySelector(".swiper")?.swiper;
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  const formatFollowers = (count: number) => {
    if (count < 1000) {
      return count.toString();
    } else if (count < 1000000) {
      return (count / 1000).toFixed(1) + "K";
    } else {
      return (count / 1000000).toFixed(1) + "M";
    }
  };

  const [age, setAge] = useState<string>("5");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div className="min-h-screen h-full w-full bg-[#F8F8F8] relative p-5 2xl:p-10 ">
      <Swiper
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        allowTouchMove={false}
        simulateTouch={false}
        keyboard={{ enabled: false }}
        mousewheel={{ forceToAxis: false }}
        modules={[Navigation, Pagination]}
        className="mySwiper rounded-[20px] wlmscrshdo"
      >
        <SwiperSlide className="setheitslidr mt-auto bg-white w-full grid grid-rows-2">
          <div className="bgimg h-full  flex items-center pl-10">
            <div className=" text-white text-[25px] 2xl:text-[55px] font-bold">
              {" "}
              <h1>Welcome to</h1>
              <h1>Scribbes</h1>
            </div>
          </div>
          <div className="flex flex-col gap-2 2xl:gap-10 pt-5 pl-10 text-[18px] ">
            <h1>
              Scribbes is the future of how we share infomation and chat on the
              internet.
            </h1>
            <p>
              It’s a growing community of writers, thinkers and people with
              great opinions on a wide variety of topics. Follow a topic, join a
              group, <br />
              find your voice in the fastest growing community on the internet.
            </p>
            <p>
              Speak, learn and share. This is your space, curated by you and for
              you.
            </p>
            <p>Lets get started!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="setheitslidr">
          <div className="border-b-[2px] p-2 border-gray-400">
            <h1 className="text-[25px] 2xl:text-[45px] font-bold pl-10">Setup your profile</h1>
          </div>
          <div className="flex hetsset items-center flex-col justify-center gap-10 w-full">
            <p className="text-lg ">
              Upload an awesome profile picture. It helps people recognize you.
            </p>
            <div className="text-[#BCBCBC] text-[100px]">
              <img src={uploadimg} alt="image" />
            </div>
            <div>
              Drag photo here or{" "}
              <label
                htmlFor="image"
                className="text-green underline font-semibold cursor-pointer"
              >
                Upload from Computer
              </label>
            </div>
            <input type="file" id="image" className="hidden" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="setheitslidr">
          <div className="border-b-[2px] p-2 border-gray-400">
            <h1 className="text-[25px] 2xl:text-[45px] font-bold pl-10">
              Tell us about yourself
            </h1>
          </div>
          <div className="flex hetsset items-center flex-col justify-center gap-10  w-full p-2 ">
            <p>
              A good bio, serves as an introduction to anyone who visits your
              profile
            </p>
            <div className="w-full max-w-[700px]  ">
              <textarea
                placeholder="Introduce yourself...."
                className="w-full p-5 border-[2px] border-gray-400 resize-none outline-green rounded-[14px] h-[300px]"
              ></textarea>
              <p className="text-gray-400 absolute bottom-2 right-2">0/2000</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="setheitslidr">
          <div className="border-b-[2px] p-2 border-gray-400">
            <h1 className="text-[25px] 2xl:text-[45px] font-bold pl-10">
              Follow your desired Communities
            </h1>
          </div>
          <div className="p-2 md:p-10 hetsset flex flex-col items-center justify-center">
            <p className="text-center text-[18px] mb-10">
              Scribbes gives you full control over what you want to see, read
              and converse with. Here are some featured topics you may like
            </p>
            <div className="grid grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4 gap-4 2xl:gap-10">
              {comiunytys.map((item: communityItem, i: number) => (
                <div
                  key={i}
                  className="w-full h-full rounded-xl cmntshd bg-white flex items-center gap-5 p-5 cursor-pointer hover:bg-green hover:text-white transition-all">
                  <img
                    src={item.img}
                    alt="image"
                    className="w-[75px] h-[75px] rounded-full object-cover"/>
                  <span>
                    <h1 className="text-[25px] font-bold ">{item.title}</h1>
                    <p className="text-gray1 text-lg">
                      {formatFollowers(
                        Math.floor(Math.random() * (1023304 - 532 + 1)) + 3456
                      )}{" "}
                      Followers
                    </p>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="setheitslidr">
          <div className="border-b-[2px] p-2 border-gray-400">
            <h1 className="text-[25px] 2xl:text-[45px] font-bold pl-10">
              Start a conversation
            </h1>
          </div>
          <div className="flex hetsset items-center justify-center flex-col  gap-10">
            <p>Make your first scribbe and start a conversation</p>
            <div className="w-full h-fit border-[2px] border-gray1 rounded-[15px] p-4 max-w-[700px]">
              <div className="flex items-center gap-10">
                <img
                  src="https://s3-alpha-sig.figma.com/img/d4ba/b37c/728178de4853f36aef820d45f81e69e7?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RELbPBZzIG10Ucokbj9KVhPGhDfMUd9vUUg7XHT2kwk4pxlj0-j2UjWf8j-94lygxXI6mJbKYDLANEEDi3bC52BpQO-evT6dXBF~7OY4It3oNdZJRcOSED4KK-rN5CCbGvBATXmYjw4W8C8x1TUZJoNgJ~OWTjy-~2x7wz-qq43FHD-7UNlq5sbpcxcDJwsHVIxaajwgmn2qDz5u1CgXEJQf3me3c1xvd4u1E6ipcxVJe0biu2ld1-Ak23oyJEbz7JCyQbBulASSetiXXA4V4rpDRvP7DpWfvJqSJhv4ZbOXId4ykqNzjoZIEX9dXHgPH9vU6afv8WNeUFgW1kERKQ__"
                  alt="user"
                  className="w-[75px] h-[75px] rounded-full"
                />

                <Select
                  value={age}
                  onChange={handleChange}
                  className="border-[1px] bg-white  border-green text-green p-0 rounded-lg w-[250px]  hover:border-green focus:shadow-none" style={{padding:0}}>
                     <MenuItem value="5">
                     <em>Choose Interest</em>
                  </MenuItem>
                  {comiunytys.map((item: communityItem, i: number) => (
                    <MenuItem key={i} value={item.followers}>
                    <div className="w-full h-fit rounded cmntshd bg-white flex items-center gap-2 p-1 cursor-pointer hover:bg-green hover:text-white transition-all">
                      <img
                        src={item.img}
                        alt="image"
                        className="w-[30px] h-[30px] rounded-full object-cover"
                      />
                      <span>
                        <h1 className="text-[13px] font-semibold">
                          {item.title}
                        </h1>
                        <p className="text-gray1 text-xs">
                          {formatFollowers(
                            Math.floor(
                              Math.random() * (1023304 - 532 + 1)
                            ) + 3456
                          )}{" "}
                          Followers
                        </p>
                      </span>
                    </div>
                  </MenuItem>
                  ))}
                </Select>
              </div>
              <div className="border-b-[1px] ">
                <textarea className="w-full p-2 min-h-[200px] h-full bg-transparent mt-3 outline-none" placeholder="Share your thoughts...."></textarea>
                <div className="flex items-center justify-between"> 
                  <div>
                    <button>Scribbe</button>
                     <span />
                    <button>Blog</button>
                  </div>
                  <p>120/350</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center gap-5">
                  <button className="flex items-center gap-1 p-2 px-3 rounded-full shadow-lg"><GoFileMedia className="text-green"/> Insert Media</button>
                  <button className="flex items-center gap-1 p-2 px-3 rounded-full shadow-lg"><FaLink className="text-green"/> Insert URL</button>
                </div>
                <button className="p-2 w-[130px] font-semibold rounded-full bg-green text-white ">Post</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="border-t-[2px] border-gray-300 h-[92px] bg-white">
          <button
            ref={prevRef}
            className="custom-prev-button absolute bottom-5 left-5 hover:bg-green border-[1.5px] border-green text-green hover:text-white w-[150px] py-2 z-20 rounded-full"
          >
            Back
          </button>
          <button
            ref={nextRef}
            className="custom-next-button absolute bottom-5 right-5 border-[1.5px] border-green text-green hover:bg-green hover:text-white w-[150px] py-2 z-20 rounded-full"
          >
            Continue
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default WelcomeScreen;
