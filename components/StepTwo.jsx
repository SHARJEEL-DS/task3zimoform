/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Link from "next/link"
import { useState } from "react";

// import { useState } from "react";
import { useContext } from 'react';
// import { FormContext } from './FormContext';
import { FormContext } from "@/FormContext";
const StepTwo = ({setTab}) => {
    const [country, setCountry] = useState("");
    
const { formData, updateFormData } = useContext(FormContext);
const handleChange = (e) => {
  const { name, value } = e.target;
  updateFormData(name, value);}
  return (
    <div>
      <div >
          <h2 className="lg:text-[20px] text-[16px] absolute top-[80px] left-[2rem]   ">APPLY</h2>
          
          <button 
          onClick={()=>setTab(prev =>prev-1)}
          className="flex flex-1 mt-2 lg:absolute relative lg:left-[10px] left-[60px]  lg:px-2 cursor-pointer items-center gap-2 uppercase tracking-widest lg:text-[20px] text-[16px]">
            <img
              src="/assets/keyback.png"
              alt="keyback"
              className="w-[18px]"
            />
            <span>BacK</span>
          </button>
        </div>
        <div className="border-2 rounded-xl lg:px-60 lg:pb-[30px] p-12 py-24 border-[#DFCFAB]">
        <p className=" lg:text-[20px] title-font ">START YOUR APPLICATION</p>
        <img className=" w-[290px] 3xl:w-[260px] lg:mt-20 " src="./Assests/logo.png" alt="" />
        <div className="  p-2 flex justify-center mt-5  ">
      <select className=" py-3 px-10 rounded border-2 border-gray-300"  name="field15" value={formData.field15 || ''} onChange={handleChange} >
        <option value="">CHOOSE YOUR ROLE (FIELD)</option>
        <option value="Project Coordinator">Project Coordinator</option>
        <option value="Next.js">Next.js</option>
        <option value="Laravel">Laravel</option>
      </select>
      </div>
      <button
      onClick={()=>setTab(prev =>prev+1)}
      className="border-2  mt-[20px] 
      lg:ml-[30rem] lg:mb-[-50px] lg:mt-[-90px]
      h-[120px] w-[120px]   bg-black   lg:mr-[-19rem] text-white text-[14px] uppercase   rounded-lg flex items-center text-center justify-center mb-[-11rem] ml-[50px] ">Applay</button>

        
    </div>
    <Footer/>
    </div>
  )
}

export default StepTwo