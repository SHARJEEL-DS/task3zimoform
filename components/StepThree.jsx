/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useContext } from 'react';
// import { FormContext } from './FormContext';
import { FormContext } from "@/FormContext";
import Footer from "@/components/Footer";
import Stepfour from "./Stepfour";
const StepThree = ({ setTab }) => {
  
  const [country, setCountry] = useState("");
  const { formData, updateFormData } = useContext(FormContext);
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue(e.target.value);
    updateFormData(name, value);
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData(inputValue);
    
  };
  return (
    <>
      <div className=" lg:px-60 lg:pb-[30px]  ">
        <header className="uppercase px-8 lg:px-2 grid grid-cols-3  lg:grid-cols-3 my-8 lg:my-8 mb-16 tracking-widest text-[20px] lg:text-[16px]">
        <div >
          <h2 className="lg:text-[20px] text-[16px] absolute top-[105px] left-[2rem]   ">APPLY</h2>
          <button 
          onClick={()=>setTab(prev =>prev-1)}
          
          className="flex flex-1 mt-2 ml-[-70px] lg:ml-[10px] sm:absolute left-0 sm:px-2 cursor-pointer items-center gap-2 uppercase tracking-widest lg:text-[20px] text-[16px]">
            <img
              src="/assets/keyback.png"
              alt="keyback"
              className="w-[18px]"
            />
            <span>BacK</span>
          </button>
        </div>
          <section className="flex flex-col text-center items-center lg:items-end lg:text-[20px] text-[14px] sm:text-end  md:text-end ">
            <h1>YOUR APPLICATION</h1>
            <div className="flex items-center justify-start gap-x-2 mt-7">
              <div className="bg-[#BE9f56] h-[2px] lg:w-[60px] w-[20px]"></div>
              <div className="bg-black h-[2px] lg:w-[60px] w-[20px]"></div>
              <div className="bg-black h-[2px] lg:w-[60px] w-[20px]"></div>
            </div>
          </section>
        </header>
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col flex-1 items-center space-y-2 text-[18px] lg:text-[16px]"
        >
          <input
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            id="email"
            name="field2" value={formData.field2 || ''} onChange={handleChange} 
            type="email"
            required
            placeholder="EMAIL ADDRESS"
            className="md:tracking-[2px] tracking-[0px]  w-[90%] placeholder:text-black placeholder:font-normal placeholder:text-[12px] placeholder:md:text-[18px] placeholder:tracking-[0px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none"
          />
          <div className="w-[90%] lg-w-[580px] ">
            <input
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              id="email"
              name="field3" value={formData.field3 || ''} onChange={handleChange}
              type="email"
              required
              placeholder="CONFIRM EMAIL ADDRESS"
              className="md:tracking-[2px] lg:ml-[20px] tracking-[0px] w-[100%] placeholder:text-black placeholder:font-normal placeholder:text-[12px] placeholder:md:text-[18px] placeholder:md:tracking-[0px] placeholder:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none"
            />
          </div>
          <div className="relative   w-[90%] max-w-[580px]  ">
            <input
             name="field1" value={formData.field1 || ''} onChange={handleChange} 
              id="fname"
              
              type="text"
              required
              placeholder="FIRST NAME"
              className="md:tracking-[2px] mt-5 tracking-[0px] w-[100%] placeholder:text-black placeholder:font-normal placeholder:text-[12px] placeholder:md:text-[18px] placeholder:tracking-[0px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none"
            />
            <p className="md:text-[14px] text-[12px] text-[#737373] lg:absolute static text-center right-[-400px] bottom-0">
              Use your legal name as it appears on your official documents
            </p>
          </div>

          <div className="w-[90%] lg-w-[580px] relative">
            <input
              id="lname"
              type="text"
              name="field4" value={formData.field4 || ''} onChange={handleChange}
              required
              placeholder="LAST NAME (INCLUDING MIDDLE NAME)"
              className="md:tracking-[2px] tracking-[0px] lg:ml-[20px] w-[100%] placeholder:text-black placeholder:font-normal placeholder:text-[12px] placeholder:md:text-[18px] placeholder:tracking-[0px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none"
            />
          </div>
          <div className="w-[90%] lg-w-[580px] relative">
            <input
              id="dob"
              title="Date of Birth"
              max="2050-12-25"
              name="field5" value={formData.field5 || ''} onChange={handleChange}
              step="1"
              type="date"
              required
              className="w-[95%] md:tracking-[2px] lg:ml-[20px] tracking-[0px] font-normal placeholder:text-black placeholder:font-normal placeholder:text-[12px] placeholder:md:text-[29px] placeholder:md:tracking-[2px] placeholder:tracking-[0px]  text-center uppercase   bg-transparent border  placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none focus:bg-transparent"
            />
          </div>
          <p class="text-black font-normal text-[12px] md:text-[18px]  md:tracking-[0px] tracking-[2px] w-[90%] max-w-[580px]  outline-none bg-transparent  border placeholder:text-center text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] uppercase">
            Pakistan
          </p>

          <div className="flex w-[90%] max-w-[580px] text-center items-center  gap-2 h-14 relative focus:bg-transparent">
            <div className="w-[200px] lg:p-3  p-[4px] text-sm  outline-none bg-transparent text-gray-500 border placeholder:text-center text-center border-gray-500/50 rounded-xl focus:border-[#BE9F56]">
              <div
                className="w-full py-[2px] css-b62m3t-container"
                id="countryCode"
              >
                <span
                  id="react-select-2-live-region"
                  className="css-7pg0cj-a11yText"
                ></span>
                <span
                  aria-live="polite"
                  aria-atomic="false"
                  aria-relevant="additions text"
                  className="css-7pg0cj-a11yText"
                ></span>
                <div className=" css-zpnzg2-control">
                  <div className="css-hlgwow">
                    <div className=" css-1dimb5e-singleValue">
                      <div className="flex justify-around items-center">
                        <img
                          src="https://flagcdn.com/w320/pk.png"
                          alt="Pakistan"
                          className="      w-[18px] lg:w-[28px] object-contain "
                        />
                        <span className="flex lg:text-[18px] text-[16px] items-center ">
                          +92
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <input
              type="number"
              id="phone"
              name="field6" value={formData.field6 || ''} onChange={handleChange}
              inputMode="numeric"
              required
              placeholder="PHONE NUMBER"
              className="md:tracking-[2px] tracking-[0px] placeholder:text-black placeholder:font-normal placeholder:md:text-[18px] placeholder:text-[12px] placeholder:md:tracking-[2px] placeholder:tracking-[0px]  w-full text-center  bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3
             focus:border-[#BE9F56] outline-none focus:bg-transparent"
            />
            <button onClick={()=>setTab(prev =>prev+1)}
              type="submit"
              className=" hidden h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] absolute bottom-0 right-[-200px] rounded-lg lg:flex items-center text-center justify-center uppercase"
            >
              CONTINUE
            </button>
          </div>
          <button 
          onClick={()=>setTab(prev =>prev+1)}
            type=""
            class="flex items-center justify-center lg:hidden h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] rounded-lg text-center uppercase"
          >
            CONTINUE
          </button>
        </form>
        <Footer />
      </div>
    </>
  );
};

export default StepThree;
