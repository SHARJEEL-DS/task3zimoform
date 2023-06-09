/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Zdoc = () => {
  return (
    <div
    id="zdoc"
    className="h-screen flex flex-col justify-center items-center relative"
  >
    <div>
      <img className=" max-w-[268.27.04px] w-[80%] mx-auto  " src="/assets/zidoc.png" alt="asd" />
    </div>
    <div className=" gap-12 flex flex-col items-center absolute bottom-0">
      <p className="uppercase sm:text-[12px] text-[18px] 2xl:text-[20px] tracking-[2px] text-[#737373] sm:mb-8 mb-4">
      Document-signing software technology that lets you sign documents online.
      </p>
      <a href="#Career">
        <img
          src="/assets/down.png"
          alt="arrow-dark"
          className="w-[40px] cursor-pointer  animate-bounce hover:animate-ping  py-2 "
        />
      </a>
    </div>
    <img className=" absolute sm:right-3  right-10 max-w-[320px]  sm:w-[150px] bottom-3 " src="/assets/zdocsign.png" alt="as" />
  </div>
  )
}

export default Zdoc