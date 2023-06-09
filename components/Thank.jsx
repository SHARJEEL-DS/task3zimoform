/* eslint-disable @next/next/no-img-element */
import React from "react";

function Thank() {
  return (
    <div>
      <section
        className="flex items-center justify-center py-16 lg:py-8  relative min-h-screen"
        
      >
        <div className="border border-[#BE9F56] flex flex-col justify-around  items-center relative p-10 lg:p-4 space-y-12 rounded-xl  2xl:w-[700px] 2xl:h-[450px] md:h-[550px] md:w-[550px] sm:w-[90%] mx-auto w-[999px] h-[700px]">
          <header className="w-full">
            <div className="flex flex-col space-y-6  items-center ">
              <div className="w-full flex pb-4 justify-between items-center md:self-center self-end  my-2 md:gap-8">
                <div className="flex-1 block lg:hidden"></div>
                <div className="flex justify-center lg:ml-44 sm:flex ml-14 " >
                  <img
                    src="/assets/ZIMOCAREERSLogo.png"
                    alt="Thankyou-logo"
                    className="w-[175px] lg:w-[140px] mx-auto lg:mx-0"
                  />
                </div>
                <div className="flex-1">
                  
                </div>
              </div>
              <div className="space-y-4 tracking-[0.5px] text-[#737373] text-center text-[12px]">
                <p>
                  Thank you for submitting an application for the ZIMO
                  Internship Programme.
                </p>
                <p>
                  We are super delighted to hear from you and we look forward to
                  welcoming you to the world of ZIMO.
                </p>
              </div>
            </div>
          </header>
          <div className="mt-20 xl:mt-28">
            <img
              src="/assets/Thank-you-logo.png"
              alt="Thankyou-logo"
              className="w-[295px] lg:w-[240px]"
            />
          </div>
          <div className="flex items-center  mt-20  xl:mt-40 sm:mb-0 ">
            <img
              src="/assets/zimoTeam.png"
              alt="zimo-team-logo"
              className="w-[247px] lg:w-[220px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Thank;
