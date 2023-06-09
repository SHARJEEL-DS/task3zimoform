/* eslint-disable @next/next/no-img-element */
import React from "react";

const Career = () => {
  return (
    <div
      id="Career"
      className=" h-screen flex uppercase tracking-[2px] px-8 sm:px-3 justify-between flex-col text-white bg-black bg-no-repeat bg-contain bg-center  career"
    >
      <div className="   mt-[50px] sm:text-left  sm:mt-[30px] text-center">
        <p className=" sm:text-[12px] lg:text-[16px] text-[20px] ">
          WORK ON OUR INNOVATIVE SOFTWARE PRODUCTS.
        </p>
        <p className=" sm:text-[12px] lg:text-[16px] text-[20px] pt-8">
          DESIGN AND BUILD THE SYSTEMS THAT ARE CHANGING THE WORLD.
        </p>
      </div>
      <div className=" flex justify-center">
        <img
          src="/assets/career1.png"
          className="w-[293.93px] sm:w-[200px]"
          alt="asd"
        />
      </div>
      <div className="px-12 sm:px-1">
        <p className="text-[30px] tracking-[3px]  sm:text-[18px]  ">
          GLOBAL vision
        </p>
        <p className="text-[20px] sm:text-[12px] md:text-[17px] text-left  pt-6">
          With a remote culture, diversity is naturally in our DNA.</p>
         <p className="text-[20px] sm:text-[12px] md:text-[17px] text-left mb-3 pt-2"> Based across THE GLOBE, making up over 23 different
          nationalities.
        </p>
        <div className="flex justify-center">
          {" "}
          <a href="#code">
            {" "}
            <img
              src="/assets/downwhite.png"
              className="cursor-pointer  animate-bounce hover:animate-ping w-[40px] py-2 "
              alt="asdas"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Career;
