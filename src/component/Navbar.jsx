import React, { useState } from "react";
import { logo } from "../assets/index";
import { navLinks } from "../constant/index";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { Link, animateScroll as scroll } from 'react-scroll';
const Navbar = () => {
  const [toggle,setToggle] = useState(false);
  const handleClick = ()=>{
    setToggle(!toggle);
  }
  return (
    <div className="text-white h-[80px] py-3">
      <div className="flex justify-evenly items-center">
        <div>
          <img src={logo} className="h-[50px]" alt="" />
        </div>
        <div className="md:flex items-center hidden">
          {navLinks.map((items, index) => (
            <ul key={index} className="flex ">
              <li className="px-5 font-semibold cursor-pointer">{items.title}</li>
            </ul>
          ))}
        </div>
        <div>
          <button className="md:flex hidden">Get Started</button>
        </div>
        <div className="md:hidden flex" onClick={handleClick}>
         {
          toggle?<IoMdClose size={35}/> : <RiMenu3Fill size={35} />
         }
        </div>
       <div className={toggle?"absolute md:hidden top-20 bg-black w-full":"hidden"}>
       <div className="flex  flex-col items-center  ">
          {navLinks.map((items, index) => (
            <ul key={index} className="flex ">
              <li className="px-5 font-semibold my-2">{items.title}</li>
            </ul>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="flex md:hidden bg-transparent my-4 text-white border border-sky-500">Get Started</button>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Navbar;
