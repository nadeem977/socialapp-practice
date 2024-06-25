import React from "react";
import { AppleIocn, FacebookIcon, Gooleicon } from "../assets/Icons";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Link } from "react-router-dom";

const Register = () => {
  const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };

  return (
    <>
      <div className="min-h-screen h-full w-full flex items-center justify-center bg-[#F8F8F8]">
        <div className="registershdo rounded-[20px] bg-white flex flex-col gap-3 p-5">
          <h1 className="text-center font-bold text-[30px]">Create a new account</h1>
          <div className="flex items-center justify-between mx-auto mt-5 gap-3 w-full max-w-[300px]">
            <div className="shadow-md p-2 rounded-full cursor-pointer">
              <Gooleicon />
            </div>
            <div className="shadow-md p-2 rounded-full cursor-pointer">
              {" "}
              <FacebookIcon />
            </div>
            <div className="shadow-md p-2 rounded-full cursor-pointer">
              {" "}
              <AppleIocn />
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <p className="border-[1px] border-gray-300 w-full" />
            Or
            <p className="border-[1px] border-gray-300 w-full" />
          </div>
          <div className="flex items-center w-full sm:flex-row flex-col gap-3">
            <div>
              <p>First Name*</p>
              <input
                type="text"
                placeholder="First Name"
                className="w-full border-2 border-gray-300  rounded-full focus:outline-green p-3"
              />
            </div>
            <div>
              <p>Last Name*</p>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border-2 border-gray-300  rounded-full focus:outline-green p-3"
              />
            </div>
          </div>
          <div>
            <p>Email Address*</p>
            <input
              type="text"
              placeholder="email@gmail.com"
              className="w-full border-2 border-gray-300  rounded-full focus:outline-green p-3"
            />
          </div>
          <div>
            <p>Username*</p>
            <input
              type="text"
              placeholder="Your Scribbes uername"
              className="w-full border-2 border-gray-300  rounded-full focus:outline-green p-3"
            />
          </div>
          <div>
            <p>Password*</p>
            <input
              type="password"
              placeholder="Password"
              className="w-full border-2 border-gray-300  rounded-full focus:outline-green p-3"
            />
          </div>
          <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange}   style={{color:"#1CAC19"}} />}label="I agree to the site's Privacy Policy and Cookie Policy"/>
          <button className='w-full p-3 text-white font-semibold bg-green rounded-full'>SIGN UP</button>
         <p className="flex items-center gap-1 "> Already a Member? <Link to="/sign-in" className="text-green font-bold">Login</Link></p>
        </div>
        
      </div>
    </>
  );
};

export default Register;
