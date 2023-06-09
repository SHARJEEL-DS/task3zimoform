/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import React from "react";
// import { FormContext } from "@/FormContext";
import { useContext } from 'react';
// import { FormContext } from './FormContext';
import { FormContext } from "@/FormContext";
const Stepfour = ({setTab,data}) => {
  const { datas } = useContext(FormContext);
  const { formData, updateFormData } = useContext(FormContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData(name, value);}
  return (
    <div className="lg:px-60 lg:pb-[30px]">
      <header className="uppercase px-8 lg:px-2 grid grid-cols-3  lg:grid-cols-3 my-8 lg:my-8 mb-16 tracking-widest lg:text-[20px] text-[16px]">
        <div >
          <h2 className="lg:text-[20px] text-[16px] absolute top-[105px] left-[2rem]   ">APPLY</h2>
          <button
          onClick={()=>setTab(prev =>prev-1)}
          className="flex flex-1 mt-2 sm:absolute ml-[-70px] lg:ml-[10px] left-0 sm:px-2 cursor-pointer items-center gap-2 uppercase tracking-widest lg:text-[20px] text-[16px]">
            <img
              src="/assets/keyback.png"
              alt="keyback"
              className="w-[18px]"
            />
            <span>BacK</span>
          </button>
        </div>
        <section className="flex flex-col text-center items-center lg:items-end lg:text-[20px] text-[14px] sm:text-end  md:text-end ">
          <h1  className="text-[18px]">YOUR APPLICATION</h1>
          <div className="flex items-center justify-start gap-x-2 mt-7">
            <div className="bg-[#BE9f56] h-[2px] lg:w-[60px] w-[20px]"></div>
            <div className="bg-[#BE9f56] h-[2px] lg:w-[60px] w-[20px]"></div>
            <div className="bg-black h-[2px] lg:w-[60px] w-[20px]"></div>
          </div>
        </section>
      </header>
        <form
          action=""
          className="flex flex-col flex-1 items-center space-y-2 text-[18px] lg:text-[16px]"
        >
          <div className="w-[90%] lg:mt-10 max-w-[580px]  text-center flex flex-col items-center space-y-2  lg:text-[22px] text-[18px] tracking-[2px]">
            <h1></h1>
            
            <h1></h1>
          
          </div>
          <input
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            id="cnic"
            name="field7" value={formData.field7 || ''} onChange={handleChange} 
          
            type="number"
            required
            placeholder="NATIONAL ID NUMBER (CNIC)"
            className="placeholder:text-black placeholder:font-normal placeholder:md:text-[18px] placeholder:text-[12px] placeholder:md:tracking-[2px] placeholder:tracking-[0px] w-[90%] max-w-[580px]  text-center   bg-transparent text-black border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
          />
          <div className="w-[90%] lg-w-[580px] ">
            <input
             
              id="addressOne"
              type="text"
              name="field8" value={formData.field8 || ''} onChange={handleChange} 
          
              required
              placeholder="ADDRESS 1"
              className="placeholder:text-black placeholder:font-normal placeholder:md:text-[18px] placeholder:text-[12px] placeholder:md:tracking-[2px] placeholder:tracking-[0px] w-[100%] lg:ml-5 max-w-[580px]  text-center   bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
            />
          </div>
          <div className="relative   w-[90%] max-w-[580px]  ">
            <input
              id="addressTwo"
              type="text"
              name="field9" value={formData.field9 || ''} onChange={handleChange} 
          
              required
              placeholder="ADDRESS 2 (APARTMENT, SUITE, ETC.)"
              className="placeholder:text-black placeholder:font-normal placeholder:md:text-[18px] placeholder:text-[12px] placeholder:md:tracking-[2px] placeholder:tracking-[0px] w-[100%] max-w-[580px]  text-center   bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
            />
          </div>

          <div className="w-[90%] lg-w-[580px] relative">
            <input
              id="city"
              type="text"
              name="field10" value={formData.field10 || ''} onChange={handleChange} 
          
              required
              placeholder="CITY"
              className="placeholder:text-black placeholder:font-normal placeholder:md:text-[18px] placeholder:text-[12px] placeholder:md:tracking-[2px] placeholder:tracking-[0px] w-[100%] lg:ml-5 max-w-[580px]  text-center   bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
            />
          </div>
          <div className="w-[90%] lg-w-[580px] relative">
            <input
              id="stateRegion"
              type="text"
              name="field11" value={formData.field11 || ''} onChange={handleChange} 
          
              required
              placeholder="STATE / REGION"
              className="placeholder:text-black lg:ml-5 placeholder:font-normal placeholder:md:text-[18px] placeholder:text-[12px] placeholder:md:tracking-[2px] placeholder:tracking-[0px] w-[100%] max-w-[580px]  text-center   bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
            />
          </div>
          

          <div className=" w-[90%] max-w-[580px]  text-center items-center  gap-2 h-14 relative focus:bg-transparent">
            
          <input type="text"    name="field12" value={formData.field12 || ''} onChange={handleChange} 
                      id="zipcode" placeholder="ZIP CODE / POST CODE" className="placeholder:text-black placeholder:font-normal placeholder:md:text-[18px] placeholder:text-[12px] placeholder:md:tracking-[2px] placeholder:tracking-[0px] w-full  text-center bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"/>
            <button
            onClick={()=>setTab(prev =>prev+1)}
              type="submit"
              className=" hidden h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] absolute bottom-0 right-[-200px] rounded-lg lg:flex items-center text-center justify-center uppercase"
            >
              CONTINUE
            </button>
          </div>
          <button 
          onClick={()=>setTab(prev =>prev+1)}
            type=""
            className="flex items-center justify-center lg:hidden h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] rounded-lg text-center uppercase"
          >
            CONTINUE
          </button>
        </form>
      <Footer/>
    </div>
  );
};

export default Stepfour;
