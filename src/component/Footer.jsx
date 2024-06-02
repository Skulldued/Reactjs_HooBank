import React from "react";
import { HiSpeakerphone } from "react-icons/hi";
 import {footerValue} from "../constant/index";
const Footer = () => {
  return (
    <div className="w-full py-10 ">
      <div className="max-w-[1180px] mx-auto  py-2 px-10">
        <div className="grid md:grid-cols-5 gap-4">
          <div class="md:col-span-2  ">
             <div className="w-[200px] flex flex-col  items-center">
                <div className="w-[55px] h-[55px] my-3 bg-white rounded-full flex justify-center items-center ">
                   <HiSpeakerphone size={35}  />
                </div>
                <p className="text-slate-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, enim.</p>
             </div>
          </div>
          {footerValue.map((item, index) => (
            <div key={index} className="text-white">
              <h2 className="font-bold">{item.head}</h2>
             <ul className="text-white">
               {
                item.serValu.map((arrItems,index)=>(
                    <li key={index} className="py-1 cursor-pointer">
                     {arrItems}
                    </li>
                ))
               }
             </ul>
            </div>
          ))}
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
