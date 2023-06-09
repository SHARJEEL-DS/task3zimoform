/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import React from "react";
// import { useState } from "react";
import { useContext } from 'react';
// import { FormContext } from './FormContext';
import { FormContext } from "@/FormContext";

const StepFive = ({setTab}) => {

    
const { formData, updateFormData } = useContext(FormContext);
const handleChange = (e) => {
  const { name, value } = e.target;
  updateFormData(name, value);}
  const handleFormSubmit = (e) => {
    
    console.log(formData); // Log the form data to the console
  };

  return (
    <div className="xl:px-60 xl:pb-[30px]">
      <header className="uppercase px-8 xl:px-2 grid grid-cols-3  xl:grid-cols-3 my-8 xl:my-8 mb-16 tracking-widest xl:text-[20px] text-[16px]">
        <div>
          <h2 className="xl:text-[20px] text-[16px] absolute top-[105px] left-[2rem]   ">
            APPLY
          </h2>
          <button
          onClick={()=>setTab(prev =>prev-1)}
          className="flex flex-1 mt-2 ml-[-70px] lg:ml-[10px] sm:absolute left-0 sm:px-2 cursor-pointer items-center gap-2 uppercase tracking-widest xl:text-[20px] text-[16px]">
            <img
              src="/assets/keyback.png"
              alt="keyback"
              className="w-[18px]"
            />
            <span>BacK</span>
          </button>
        </div>
        <section className="flex flex-col text-center items-center xl:items-end xl:text-[20px] text-[14px] sm:text-end  md:text-end ">
          <h1 className="text-[18px]">YOUR APPLICATION</h1>
          <div className="flex items-center justify-start gap-x-2 mt-7">
            <div className="bg-[#BE9f56] h-[2px] xl:w-[60px] w-[20px]"></div>
            <div className="bg-[#BE9f56] h-[2px] xl:w-[60px] w-[20px]"></div>
            <div className="bg-[#BE9f56] h-[2px] xl:w-[60px] w-[20px]"></div>
          </div>
        </section>
      </header>
      <form
        action=""
        className="flex flex-col flex-1 items-center space-y-2 text-[18px] xl:text-[16px]"
      >
        <div className="w-[90%] xl:mt-10 max-w-[580px]  text-center flex flex-col items-center space-y-2  xl:text-[22px] text-[18px] tracking-[2px]">
          <h1></h1>

          <h1></h1>
        </div>
        <select
          id="qualifications"
          name="field16" value={formData.field16 || ''} onChange={handleChange}
          required
          className="placeholder:md:text-[18px] placeholder:text-[14px] text-[14px] md:text-[18px] md:tracking-[0px] tracking-[2px] w-[90%] max-w-[580px]  outline-none bg-transparent  border placeholder:text-center text-center border-gray-500/50 rounded-xl py-3 focus:border-[#BE9F56] "
        >
          <option value="" className="" selected="">
            QUALIFICATION(S)
          </option>
          <option value="BA" className="uppercase">
            BA
          </option>
          <option value="BBA" className="uppercase">
            BBA
          </option>
          <option value="BSCS" className="uppercase">
            BSCS
          </option>
          <option value="BSSE" className="uppercase">
            BSSE
          </option>
          <option value="BSIT" className="uppercase">
            BSIT
          </option>
          <option value="BFA" className="uppercase">
            BFA
          </option>
          <option value="BS. HONS." className="uppercase">
            BS. HONS.
          </option>
          <option value="ACCA" className="uppercase">
            ACCA
          </option>
          <option value="OTHER" className="uppercase">
            OTHER
          </option>
        </select>
        <select
          id="completion"
          name="field17" value={formData.field17 || ''} onChange={handleChange}
          required
          className="placeholder:md:text-[18px] placeholder:text-[14px] text-[14px] md:text-[18px] tracking-[0px] md:tracking-[2px] w-[90%] max-w-[580px]  outline-none bg-transparent  border placeholder:text-center text-center border-gray-500/50 rounded-xl py-3 focus:border-[#BE9F56] "
        >
          <option value="" selected="">
            YEAR OF COMPLETION
          </option>
          <option value="2023" className="uppercase">
            2023
          </option>
          <option value="2022" className="uppercase">
            2022
          </option>
          <option value="2021" className="uppercase">
            2021
          </option>
          <option value="2020" className="uppercase">
            2020
          </option>
          <option value="2019" className="uppercase">
            2019
          </option>
          <option value="2018" className="uppercase">
            2018
          </option>
          <option value="2017" className="uppercase">
            2017
          </option>
          <option value="2016" className="uppercase">
            2016
          </option>
          <option value="2015" className="uppercase">
            2015
          </option>
          <option value="2014" className="uppercase">
            2014
          </option>
          <option value="2013" className="uppercase">
            2013
          </option>
          <option value="2012" className="uppercase">
            2012
          </option>
          <option value="2011" className="uppercase">
            2011
          </option>
          <option value="2010" className="uppercase">
            2010
          </option>
        </select>

        <input
          id="completion"
          type="text"
          name="field18" value={formData.field18 || ''} onChange={handleChange}
          required
          placeholder="UNIVERSITY "
          className="placeholder:text-black placeholder:font-normal placeholder:md:text-[18px] placeholder:text-[12px] placeholder:md:tracking-[2px] placeholder:tracking-[0px] w-[90%]  max-w-[580px]  text-center   bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
        />
        <select
          id="experience"
          name="field20" value={formData.field20 || ''} onChange={handleChange}
          required
          className="placeholder:md:text-[18px] placeholder:text-[14px] text-[14px] md:text-[18px] md:tracking-[0px] tracking-[2px] w-[90%] max-w-[580px]  outline-none bg-transparent  border placeholder:text-center text-center border-gray-500/50 rounded-xl py-3 focus:border-[#BE9F56] "
        >
          <option value="" selected="">
            EXPERIENCE
          </option>
          <option value="NO EXPERIENCE" class="uppercase">
            NO EXPERIENCE
          </option>
          <option value="LESS THAN 1 Year" class="uppercase">
            LESS THAN 1 YEAR
          </option>
          <option value="1 YEARS" class="uppercase">
            1 YEARS
          </option>
          <option value="2 YEARS" class="uppercase">
            2 YEARS
          </option>
          <option value="3 YEARS" class="uppercase">
            3 YEARS
          </option>
          <option value="4 YEARS" class="uppercase">
            4 YEARS
          </option>
          <option value="5 YEARS" class="uppercase">
            5 YEARS
          </option>
          <option value="6 YEARS" class="uppercase">
            6 YEARS
          </option>
          <option value="7 YEARS" class="uppercase">
            7 YEARS
          </option>
          <option value="MORE THAN 7 YEARS" class="uppercase">
            MORE THAN 7 YEARS
          </option>
        </select>
        <select
          id="employement"
          name="field19" value={formData.field19 || ''} onChange={handleChange}
          required
          className="placeholder:md:text-[18px] placeholder:text-[14px] text-[14px] md:text-[18px] md:tracking-[0px] tracking-[2px] w-[90%] max-w-[580px]  outline-none bg-transparent  border placeholder:text-center text-center border-gray-500/50 rounded-xl py-3 focus:border-[#BE9F56] "
        >
          <option value="" selected="">
            CURRENT EMPLOYMENT STATUS
          </option>
          <option value="STUDENT" class="uppercase">
            STUDENT
          </option>
          <option value="UNEMPLOYED" class="uppercase">
            UNEMPLOYED
          </option>
          <option value="PART TIME" class="uppercase">
            EMPLOYED (PART TIME)
          </option>
          <option value="FULL TIME" class="uppercase">
            EMPLOYED (FULL TIME)
          </option>
          <option value="INTERNSHIP" class="uppercase">
            EMPLOYED (INTERNSHIP)
          </option>
          <option value="OTHER" class="uppercase">
            OTHER
          </option>
        </select>
        <section className="space-y-1 w-[90%] max-w-[580px] relative">
          <div className=" flex-col flex justify-center items-center">
            <label
              for="resume"
              className="text-black font-normal md:text-[18px] text-[14px]  tracking-[0px] md:tracking-[2px] w-full text-center uppercase  bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none cursor-pointer"
            >
              CV / Résumé
            </label>
            <input
              type="file"
              id="resume"
              required=""
              accept=".pdf,.docx"
              className="hidden"
              value=""
            />
            <p className="text-[10px] absolute text-red-400 -bottom-2.5 w-full text-center"></p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <button
              className="MuiButtonBase-root  MuiIconButton-root MuiIconButton-sizeMedium block opacity-75 border-0 relative xl:top-[-30px] xl:right-[-15rem] right-[-8rem] top-[-25px] -translate-y-1/2 z-20  focus:outline-none text-black rounded text-xs css-1hmxbfw"
              tabindex="0"
              type="button"
              title="CLICK TO UPLOAD"
            >
              <img
                src="https://zimo.team/assets/UploadIcon.png"
                alt=""
                className="w-[18px] mr-[63px] "
              />
              <span className="MuiTouchRipple-root css-w0pj6f"></span>
            </button>
            <div className="">
            <button
              type="submit"
              className=" hidden h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] absolute top-[-16rem] right-[-12rem] rounded-xl xl:flex items-center text-center flex-col uppercase"
            >
              <span className="text-[10px] opacity-70 my-2">Optional</span>
              <p class="text-[14px]">ADD</p>
              Supporting Statement
            </button>
            <button
              type="submit"
              className=" hidden h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] absolute top-[-7rem] right-[-12rem] rounded-xl xl:flex items-center text-center justify-center uppercase"
            >
              submit
            </button>
            </div>
          </div>
          <div className="flex justify-between">
          <button
          onClick={()=>setTab(prev =>prev+1)}
            type="submit"
            class="flex items-center justify-center flex-col xl:hidden h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] rounded-xl text-center uppercase"
          ><span className="text-[10px]  opacity-70 my-2">Optional</span>
          <p class="text-[14px]">ADD</p>
          Supporting Statement
          </button>

          <button
            type=""
            onClick={handleFormSubmit}
            className="flex items-center justify-center xl:hidden h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] rounded-xl text-center uppercase"
            >
            submit
          </button>
            </div>
        </section>
      </form>
      <Footer/>
    </div>
  );
};

export default StepFive;
