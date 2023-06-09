/* eslint-disable @next/next/no-img-element */
// import Footer from "@/components/Footer";
import Footer from "@/components/Footer";
import Link from "next/link"
import { useState } from "react";
import { useContext } from 'react';
// import { FormContext } from './FormContext';
import { FormContext } from "@/FormContext";
const StepOne = ({setTab}) => {

  const [country, setCountry] = useState("");
console.log(country);
const { formData, updateFormData } = useContext(FormContext);
const handleChange = (e) => {
  const { name, value } = e.target;
  updateFormData(name, value);}
  return (
    <>
    <div>
    <h2 className="lg:text-[20px] text-[16px] absolute top-[80px] left-[2rem]   ">APPLY</h2>
          <button className="flex flex-1 lg:mt-[-85px] mt-2 sm:absolute lg:ml-[-20px] ml-[-10rem]  left-[2rem] sm:px-2 cursor-pointer items-center gap-2 uppercase tracking-widest lg:text-[20px] text-[16px]">
            {/* <img
              src="/assets/keyback.png"
              alt="keyback"
              className="w-[18px]"
            />
            <span>BacK</span> */}
          </button>
    </div>
    <div className="border-2 rounded-xl lg:px-60 lg:pb-[30px] p-14 py-24 border-[#DFCFAB]">
    
        <p className=" lg:text-[20px] title-font ">START YOUR APPLICATION</p>
        <img className=" w-[290px] lg:w-[260px] lg:mt-20 " src="./Assests/logo.png" alt="" />
        <div className="  p-2 flex justify-center mt-5  ">
      <select className=" py-3 px-10 rounded border-2 border-gray-300"    name="field14" value={formData.field14 || ''} onChange={handleChange} 
            >
        <option value="">Select a country</option>
        <option value="India">India</option>
        <option value="Pakistan">Pakistan</option>
        <option value="Afghanistan">Afghanistan</option>
      </select>
      </div>
      <button
       onClick={()=>setTab(prev =>prev+1)}
      
        
       className="border-2  mt-[20px] uppercase h-[120px] 
       w-[120px]  lg:ml-[29rem] lg:mt-[-70px] lg:mb-[10px]  bg-black  mr-[-19rem] text-white text-[14px]   rounded-lg ms-[50px] flex items-center text-center justify-center mb-[-11rem]  ">Start</button>

        
    </div>
    <Footer/>
    </>
  )
}

export default StepOne