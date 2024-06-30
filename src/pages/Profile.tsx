import React, { useState } from "react";
import SideBars from "../components/SideBars";
import RightBar from "../components/RightBar";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { UserProfile, postsdata } from "../assets/data";
import { UserType } from "../assets/type";
import Contents from "../components/Contents";


const Profile = () => {
  const [activeface, setActiveface] = useState<string>("sc");

  const formatFollowers = (count: number) => {
    if (count < 1000) {
      return count.toString();
    } else if (count < 1000000) {
      return (count / 1000).toFixed(1) + "K";
    } else {
      return (count / 1000000).toFixed(1) + "M";
    }
  };
  console.log(activeface);
  return (
    <section className="flex items-center">
      <SideBars />
      <main className="w-full  bg-[#f8f8f8] border-r-2 border-gray1">
        <div className='h-screen  overflow-y-auto w-full py-8 '>
          <h1 className="flex items-center gap-2 leading-3 text-[30px] font-bold">
            <HiArrowNarrowLeft /> John Doe
          </h1>
          <small className="text-gray1 ml-10 leading-3 text-[15px]">
            145 Posts
          </small>
          <div className="border-t-2 border-b-2 border-gray1 p-5">
            <div className="bg-white shadow-lg mt-3 rounded-xl p-7 w-full">
              {UserProfile.map((items: UserType, i: number) => (
                <div key={i} className="flex items-center gap-5 w-full">
                  <img
                    src={items.profile}
                    alt="profile"
                    className="rounded-full w-[100px] h-[100px] 2xl:w-[200px] 2xl:h-[200px] object-cover"
                  />
                  <div className="w-full">
                    <div className="flex items-baseline justify-between gap-1 ">
                      <span>
                        <h1 className="text-[25px] font-bold leading-3">
                          {items.name}
                        </h1>
                        <h1 className="text-[25px] font-semobold mt-2">
                          {items.username}
                        </h1>
                      </span>
                      <button className="w-[150px] py-2 rounded-full border-green border-[2px] text-green">
                        Edit Profile
                      </button>
                    </div>
                    <div className="flex items-center gap-5 mt-2">
                      <div>
                        {formatFollowers(items.followers)}{" "}
                        <span className="text-gray1">Followers</span>
                      </div>
                      <div>
                        {formatFollowers(items.following)}{" "}
                        <span className="text-gray1">Following</span>
                      </div>
                      <div>
                        {formatFollowers(items.communities)}{" "}
                        <span className="text-gray1">Communities</span>
                      </div>
                    </div>
                    <p className="text-[17px] mt-3">{items.about}</p>
                    <div className="grid grid-cols-4 mt-5  w-full j max-w-[500px] bg-gray-200 p-2 rounded-full ">
                      <button
                        className={`py-2 ${
                          activeface === "sc" ? "bg-white" : ""
                        } rounded-full`}
                        onClick={() => setActiveface("sc")}
                      >
                        Scribbes
                      </button>
                      <button
                        className={`py-2 ${
                          activeface === "bl" ? "bg-white" : ""
                        } rounded-full`}
                        onClick={() => setActiveface("bl")}
                      >
                        Blogs
                      </button>
                      <button
                        className={`py-2 ${
                          activeface === "li" ? "bg-white" : ""
                        } rounded-full`}
                        onClick={() => setActiveface("li")}
                      >
                        Likes
                      </button>

                      <button
                        className={`py-2 ${
                          activeface === "me" ? "bg-white" : ""
                        } rounded-full`}
                        onClick={() => setActiveface("me")}
                      >
                        Media
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        <Contents postes={postsdata}/>
        </div>
      </main>
      <RightBar />
    </section>
  );
};

export default Profile;
