/* eslint-disable @next/next/no-img-element */
import React from "react";

const ZimoAI = () => {
  return (
    <div
      id="zimoai"
      className="h-screen flex flex-col justify-center items-center relative"
    >
      <div>
        <img className=" max-w-[507.04px] w-[80%] mx-auto  " src="/assets/zimoai.png" alt="asd" />
      </div>
      <div className="gap-10 flex flex-col items-center absolute bottom-0">
        <p className="uppercase sm:text-[12px] text-[16px] 2xl:text-[20px] tracking-[2px] text-[#737373] sm:mb-8 mb-4">
          ARTIFICIAL INTELLIGENCE FOR EVERYONE
        </p>
        <a href="#finance">
          <img
            src="/assets/down.png"
            alt="arrow-dark"
            className="w-[40px] cursor-pointer  animate-bounce hover:animate-ping  py-2 "
          />
        </a>
      </div>
      <img className=" absolute 2xl:right-[30px]  right-[10px] sm:w-[100px] w-[145.59px] bottom-10 " src="/assets/ai.png" alt="as" />
    </div>
  );
};

export default ZimoAI;
