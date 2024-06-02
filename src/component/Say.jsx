import React from "react";

const Say = () => {
  return (
    <div className="w-full text-white px-6 xl:px-0 py-20 ">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid md:grid-cols-2 ">
          <div className="flex items-center ">
            <div className="xl:max-w-[60%]">
              <h1 className="text-3xl md:text-4xl font-bold ">
                What people are saying about us
              </h1>
            </div>
          </div>
          <div>
            <div className="max-w-[80%] my-4 xl:my-0">
              <p className="text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                officiis quam quidem ipsum quasi sapiente animi perferendis iure
                veniam asperiores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Say;
