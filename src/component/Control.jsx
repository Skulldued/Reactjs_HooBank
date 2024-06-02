import React from "react";
import { bill,apple,google } from "../assets/index";
const Control = () => {
  return (
    <div className="w-full text-white">
      <div className="max-w-[1180px] mx-auto  grid md:grid-cols-2">
        <div className="">
          <img src={bill} alt="" className="" />
        </div>
        <div className="my-10 px-6 xl:w-[480px] md:ml-10 flex items-center justify-center">
            <div>
                <h1 className="font-bold text-3xl md:text-4xl">
                    Easily Control Your Biling & invoicing
                </h1>
                <p className="py-8 text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet fugit expedita quidem laborum quis adipisci, ullam dolor porro non facere eos. Voluptas, incidunt tempora.</p>
                <div className="flex space-x-6">
                    <img src={apple} alt="" />
                    <img src={google} alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Control;
