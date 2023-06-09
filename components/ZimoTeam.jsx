/* eslint-disable @next/next/no-img-element */
import React from 'react'

const ZimoTeam = () => {
  return (
    <div id='zimoteam' className=' text-white uppercase bg-black bg-no-repeat h-screen flex flex-col justify-between' >
        <div className='py-16' >
            <img className='max-w-[477px] w-1/2 mx-auto' src="/assets/zimoteamwhite.png" alt="asd" />
        </div>
        <div className=' sm:mx-3 mx-10 space-y-2 sm:text-center' >
            <p className='uppercase text-[25px] 3xl:text-[40px] tracking-widest text-left' >Discover</p>
            <p className='uppercase text-[30px] 3xl:text-[60px] tracking-widest text-left' >A new world</p>
            <p className='uppercase text-[14px] 3xl:text-[20px] tracking-widest text-[#707070] text-left'>Together, we create and build a better world.</p>
        </div>
        <div className='gap-14 flex flex-col items-center  justify-center'>
            <p className='sm:text-[12px] text-[16px] 2xl:text-[20px] mx-3 tracking-[2px]'>Services in over one hundred and twenty countries.</p>
            <a href="#zimoai"> <img src="/assets/downwhite.png" className="cursor-pointer  animate-bounce hover:animate-ping w-[40px] py-2 " alt="asdas" /></a>
        </div>
    </div>
  )
}

export default ZimoTeam