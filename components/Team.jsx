/* eslint-disable @next/next/no-img-element */
import React from "react";

function Team() {
  return (
    <div>
      <div id="zimoteam">
        <section className="min-h-screen flex flex-col justify-center items-center relative bg-black text-white px-4">
          <div className="absolute top-16">
            <img
              className="w-80 xl:w-52"
              src="assets/team.png"
              alt="zimoteam-logo"
            />
          </div>
          <p className="text-[25px] lg:text-[18px]  uppercase  absolute top-1/4 -translate-y-1/4 md:top-[180px] xs:top-[125px] w-full text-center tracking-widest">
            Equal Opportunity
          </p>
          <p className="text-[#737373] uppercase  text-center tracking-[2px] sm:flex text-[14px] max-w-[900px] w-[90%] sm:leading-5 lg:leading-[40px] xl:leading-[26px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:text-[12px] 2xl:text-[14px] lg:text-[18px] pt-0 lg:pt-8">
            ZIMO is proud to be an equal opportunity workplace and is an
            affirmative action employer. We are committed to equal employment
            opportunity regardless of race, colour, ancestry, religion, sex,
            national origin, sexual orientation, age, citizenship, marital
            status, disability, gender identity or Veteran status. We also
            consider qualified applicants regardless of criminal histories,
            consistent with legal requirements.
          </p>
          <div className="flex flex-col items-center absolute bottom-0 gap-12">
            <a className="3xl:text-[14px] text-[20px] uppercase tracking-[2px] cursor-pointer hover:text-[#BE9F56] transition-all">
              Join our team
            </a>
            <a>
              <img
                className="w-10 cursor-pointer hover:scale-150 animate-bounce hover:animate-ping transition-all py-1"
                src="/assets/arrow.png"
                alt="arrow"
              />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Team;
