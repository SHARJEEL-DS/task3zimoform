/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Code4() {
  return (
    <div>
       <div>
      <div id="code2" className="relative">
        <img
          src="/assets/backd.png"
          alt="hero-bg-logo"
          className="absolute  h-auto max-w-5xl -translate-x-[50%] -translate-y-[50%] top-[50%] sm:top-[50%] bottom-[50%] right-[50%] left-[50%] blur-lg"
        />
        <img
          src="/assets/zimo.png"
          className="w-[293px] xl:w-[260px] lg:w-[250px] absolute top-64 left-1/2 -translate-x-1/2 -translate-y-1/2"
          alt=""
        />
        <img
          src="/assets/inter.png"
          className=" mt-20 w-[293px] xl:w-[260px] lg:w-[250px] absolute top-64 left-1/2 -translate-x-1/2 -translate-y-1/2"
          alt=""
        />
        <img
          src="/assets/zimo2.png"
          className=" mt-36 w-[293px] xl:w-[260px] lg:w-[250px] absolute top-64 left-1/2 -translate-x-1/2 -translate-y-1/2"
          alt=""
        />
        <section className="min-h-screen flex flex-col justify-center items-center relative px-12 ">
          <h1 className="tracking-widest xl:text-[50px] text-[60px]  py-10 text-center absolute top-0 uppercase my-2">
            Create
          </h1>
          <div className="flex flex-col absolute items-center bottom-2 gap-14">
            <h2 className="uppercase tracking-widest xl:text-[40px] text-[50px]  text-center">
            <span className='text-[#BE9F56]'>for</span> <span className="">everyone</span>
            </h2>
            <a>
              <img
                className="w-10 cursor-pointer hover:scale-150 animate-bounce hover:animate-ping transition-all "
                src="/assets/arrow.png"
                alt="arrow"
              />
            </a>
          </div>
        </section>
      </div>
    </div>
    </div>
  )
}

export default Code4
