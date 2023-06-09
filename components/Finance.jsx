/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Finance = () => {
  return (
    <div id='finance' className='h-screen fibg   flex justify-center items-center flex-col   bg-black' >
        <div className=''>
            <img src="/assets/finance1.png" className="  sm:w-[350px] w-[950px] " alt="" />
        </div>
        <div className=' absolute z-20 bottom-2 '>
            <a href="#zdoc">
                <img className='w-[40px] cursor-pointer  animate-bounce hover:animate-ping    ' src="/assets/downwhite.png" alt="asd" />
            </a>
        </div>
    </div>
  )
}

export default Finance