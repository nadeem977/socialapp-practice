import React,{useState} from "react";
import { BsArrowLeft } from "react-icons/bs";
import Modal from "@mui/material/Modal";
import { GoFileMedia } from "react-icons/go";
import { FaLink } from "react-icons/fa6";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { communityItem } from "../assets/type";
import { comiunytys } from "../assets/data";
import { MenuItem } from "@mui/material";

const CreatePost = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false); 
  const [activebtn, setActivebtn] = useState<boolean>(false);
  const [age, setAge] = useState<string>("5");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const formatFollowers = (count: number) => {
    if (count < 1000) {
      return count.toString();
    } else if (count < 1000000) {
      return (count / 1000).toFixed(1) + "K";
    } else {
      return (count / 1000000).toFixed(1) + "M";
    }
  };

  return (
    <>
      {" "}
      <div>
        <button
          className="w-full rounded-full py-3 bg-[#1CAC19] text-white mt-10"
          onClick={handleOpen}
        >
          Make a post
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="wdt bg-white w-full max-w-[800px] rounded-2xl">
            <div className="border-b-[2px] border-gray1 p-3 flex items-center gap-2 pl-5">
              <BsArrowLeft />
              <h1 className="font-bold text-[20px]">Create Post</h1>
            </div>

            <div className="w-full ">
            <div className="flex items-center gap-10 p-3">
                <img
                  src="https://s3-alpha-sig.figma.com/img/d4ba/b37c/728178de4853f36aef820d45f81e69e7?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RELbPBZzIG10Ucokbj9KVhPGhDfMUd9vUUg7XHT2kwk4pxlj0-j2UjWf8j-94lygxXI6mJbKYDLANEEDi3bC52BpQO-evT6dXBF~7OY4It3oNdZJRcOSED4KK-rN5CCbGvBATXmYjw4W8C8x1TUZJoNgJ~OWTjy-~2x7wz-qq43FHD-7UNlq5sbpcxcDJwsHVIxaajwgmn2qDz5u1CgXEJQf3me3c1xvd4u1E6ipcxVJe0biu2ld1-Ak23oyJEbz7JCyQbBulASSetiXXA4V4rpDRvP7DpWfvJqSJhv4ZbOXId4ykqNzjoZIEX9dXHgPH9vU6afv8WNeUFgW1kERKQ__"
                  alt="user"
                  className="w-[50px] h-[50px] object-cover rounded-full"
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
              <textarea placeholder="Share your thoughts...." className="w-full outline-none border-none h-full min-h-[250px] p-3 resize-none"></textarea>
              <div className="flex items-center justify-between p-3"> 
                <div className="border-2 relative border-green p-1    rounded-full flex items-center ">
                    <button className={`p-2 rounded-full ${activebtn? "text-black":"text-white"} w-[80px]`} onClick={()=>setActivebtn(false)}>Scribbe</button>
                     <span className={`bg-green absolute w-[50%] trans top-1  rounded-full bottom-1 -z-10`} style={{left:activebtn?"48%":"2%"}}/>
                    <button className={`p-2 rounded-full ${activebtn?"text-white":"text-black"} w-[80px]`}onClick={()=>setActivebtn(true)}>Blog</button>
                  </div>
                  <p>120/350</p>
                </div>
            </div> 

            <div className="flex items-center justify-between  border-t-[2px] border-gray1 p-3">
              <div className="flex items-center gap-5">
                <button className="flex items-center gap-1 p-2 px-3 rounded-full shadow-lg">
                  <GoFileMedia className="text-green" /> Insert Media
                </button>
                <button className="flex items-center gap-1 p-2 px-3 rounded-full shadow-lg">
                  <FaLink className="text-green" /> Insert URL
                </button>
              </div>
              <button className="p-2 w-[130px] font-semibold rounded-full bg-green text-white ">
                Post
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default CreatePost;
