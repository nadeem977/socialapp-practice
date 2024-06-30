import React, { useState } from "react";
import { PostType ,menuoptions} from "../assets/type";
import { IoIosShareAlt } from "react-icons/io";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { optionsmenu } from "../assets/data";
import { useLocation } from "react-router-dom";


const ITEM_HEIGHT = 48;
interface ContentsProps {
  postes: PostType[];
}

const Contents: React.FC<ContentsProps> = ({ postes }) => {


  const [expandedComments, setExpandedComments] = useState<number | null>(null);
  const location = useLocation().pathname
  const formatFollowers = (count: number) => {
    if (count < 1000) {
      return count.toString();
    } else if (count < 1000000) {
      return (count / 1000).toFixed(1) + "K";
    } else {
      return (count / 1000000).toFixed(1) + "M";
    }
  };

  const toggleComments = (index: number) => {
    if (expandedComments === index) {
      setExpandedComments(null); // Collapse if already expanded
    } else {
      setExpandedComments(index); // Expand comments for the selected post
    }
  };
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
      <section className="w-full  flex flex-col gap-10">
        {postes.map((post: PostType, index: number) => (
          <div key={index} className="bg-white rounded p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={post.profileimg}
                  alt={post.username}
                  className="w-[50px] h-[50px] rounded-full object-cover"
                />
                <span>
                  <h2 className="text-[18px] font-bold capitalize leading-3">
                    {post.username}{" "}
                    <span className="text-[14px]">{post.time}</span>
                  </h2>
                  <p className="text-[16px] text-gray-400">
                    followers: {formatFollowers(post.followers)}
                  </p>
                </span>
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
            <div className="px-2 py-5">
              <p className="post-desc">{post.desc}</p>
              {post.postsimg.map((imgs, i) => (
                <div className="mt-2" key={i}>
                  <img src={imgs.img} alt="images" />
                </div>
              ))}
            </div>
            <div className="flex justify-between items-end mb-[-10px]">
              <div className="flex items-center gap-5 pt-2 pl-2">
                <p className="flex flex-col items-center justify-center">
                  <IoIosShareAlt className="text-green text-[25px] cursor-pointer" />{" "}
                  <span className="text-[15px] text-gray-400">
                    {post.shared}
                  </span>
                </p>
                <p className="flex flex-col items-center justify-center">
                  <BiSolidLike className="text-gray-400 text-xl cursor-pointer" />{" "}
                  <span className="text-[15px] text-gray-400">
                    {formatFollowers(post.likes)}
                  </span>
                </p>
                <p className="flex flex-col items-center justify-center">
                  <BiSolidDislike className="text-gray-400 text-xl cursor-pointer" />{" "}
                  <span className="text-[15px] text-gray-400">
                    {formatFollowers(post.deslike)}
                  </span>
                </p>
              </div>
              <div
                className="text-green font-semibold hover:underline cursor-pointer"
                onClick={() => toggleComments(index)}
              >
                Comments{" "}
                <span className="text-gray-400">
                  {formatFollowers(post.comments.length)}
                </span>
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300  ${
                expandedComments === index ? "max-h-full mt-[2rem]" : "max-h-0"
              }`}
            >
              <div className="flex items-center gap-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-eiWzDMoelO09VB72xJ0Xa_8XljtIE2XBY_mDh0mRkGQw3cvg__mFbiSX7Kl3OAvFJos&usqp=CAU"
                  alt="image"
                  className="w-[35px] h-[35px] rounded-full object-cover"
                />
                <div className="rounded-full border-gray-500 border-[1px] overflow-hidden w-full h-10 flex items-center pr-2">
                  <input
                    type="text"
                    placeholder="add a comment..."
                    className="w-full h-full p-2 outline-none border-none"
                  />
                  <BsFillEmojiSmileFill className="text-green" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                {post.comments.map((comment, commentIndex) => (
                  <div key={commentIndex} className="flex gap-2 p-3">
                    <img
                      src={comment.img}
                      alt={comment.username}
                      className="w-[40px] min-w-[40px] h-[40px] min-h-[40px] rounded-full object-cover"
                    />
                    <div>
                      <div className="bg-gray-200 rounded p-3">
                        <p className="font-semibold text-[17px] flex items-center gap-3 capitalize">
                          {comment.username}{" "}
                          <span className="text-[14px] text-gray-700">
                            {comment.time}
                          </span>
                        </p>
                        <p className="text-[16px]">{comment.comment}</p>
                      </div>
                      links | replay |
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Contents;
