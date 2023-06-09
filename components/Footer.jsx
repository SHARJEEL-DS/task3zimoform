import React from 'react'

const Footer = () => {
  return (
    <div className="flex justify-between items-end px-8  sm:py-16 md:py-16 md:pt-20 pb-8 mt-4 pr-[55px] 2xl:pr-8">
        
    <div className="flex-1">
        <img src="https://zimo.team/assets/zimo-team-black.png" alt="zimo-team-logo" 
        className="lg:w-[472px] w-[300px] relative lg:left-[-20rem]       "/>
            </div>
           <div className="flex-1">
            <img src="https://zimo.team/assets/zimoInternship.png" alt="zimo-intern-logo" className="lg:w-[147px] w-[90px] ml-auto relative lg:right-[-20rem] lg:mt-[-50px] "  />
            </div>
           
    </div>
  )
}

export default Footer