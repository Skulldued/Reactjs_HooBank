import React from "react";
import { robot } from "../assets/index";
const Hero = () => {
  return (
    <div className="w-full  bg-black py-10 xl:px-0 px-12  " >
      <div className="grid md:grid-cols-2 max-w-[1180px] mx-auto">
        <div className="text-white md:w-[80%] flex flex-col justify-center items-center   relative "  >
          <div className=" w-[250px] xl:w-[500px] xl:h-[250px]  xl:blur-2xl absolute xl:bottom-[200px] xl:left-[-150px]  bg-[#34416a94]"></div>
          <div className="flex flex-col items-start">
            <h2 className="bg-[#94a3b845] py-2 px-2 rounded-lg">
              20% DISCOUNT FOR 1 MONTH ACCOUNT
            </h2>
            <div>
              <h1 className="text-3xl font-bold xl:text-6xl my-3 xl:my-0 leading-8 ">
                Next Generation <br />{" "}
                <span className="text-[#13E0EE]">Payment</span> Ways{" "}
              </h1>
              <p className="text-slate-500 py-10">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati tempora quas optio alit. Obcaecati tempora quas optio
                accusantium voluptatum similique? Ea?
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end relative">
          <div className="w-[200px] xl:w-[300px] h-[200px] xl:h-[450px]  blur-2xl absolute xl:bottom-[150px] xl:right-[200px] bg-[#34416aa8]  xl:bg-[#34416A]"></div>
          <img src={robot} className="xl:w-[700px] z-50 " data-aos="fade-down" data-aos-duration="6000" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
