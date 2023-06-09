/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import "react-clock/dist/Clock.css";
import { format } from "date-fns";
import ReactCountryFlag from "react-country-flag";

const Hero = () => {
  //to set time
  const [time, setTime] = useState(new Date());
  const [countryCode, setCountryCode] = useState("");
  const [countryName, setCountryName] = useState("");
  const [cityName, setCityName] = useState("");

  //used for to date
  const [currentDate, setCurrentDate] = useState({
    weekday: "long",
    year: "numaric",
    month: "long",
    day: "numaric",
  });

  useEffect(() => {
    // Fetch the user's geolocation data
    fetch("https://geolocation-db.com/json/")
      .then((response) => response.json())
      .then((data) => {
        setCountryCode(data.country_code);
        setCountryName(data.country_name);
        setCityName(data.city);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setInterval(() => {
      setCurrentDate(
        new Date().toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    }, 1000);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const formattedTime = format(time, "HH:mm");

  return (
    <div className="hero flex uppercase  flex-col justify-between  h-screen bg-no-repeat   ">
      <nav>
        <div className="text-end sm:mr-[20px] mr-[40px] pt-[20px] tracking-[2px] flex justify-end">
          <div className=" text-end ">
            <div className="flex justify-end ">
              <p className="md:text-[11px] text-[14px] sm:text-[11px]">{formattedTime}</p>
              <p className="px-[15px] md:text-[11px] text-[14px] sm:text-[11px]">{cityName}</p>
              <span className="md:text-[11px] text-[14px] sm:text-[11px]">{countryName}</span>
            </div>
            <p className="md:text-[11px] text-[14px] sm:text-[11px] text-golden ">{`${currentDate} `}</p>

          </div>
          <div className="mt-1 sm:mt-0 md:w-[27px] md:mt-0 sm:w-[27px]">
          <ReactCountryFlag
            className="sm:ml-2 ml-3"
            countryCode={countryCode}
            svg
            style={{
              width: "37.31px",
              height: "25",
            }}
            title={countryCode}
          />
        </div>
        </div>
        
      </nav>
      <div className=" flex flex-col justify-center items-start sm:items-center my-auto gap-y-8 px-10 pt-28 sm:p-0" >
        <img src="/assets/zimoteam.png" className=" max-w-[477.31px] sm:w-[80%] " alt="asdas" />
        <img src="/assets/zimogroup.png" className=" w-[276.81px] sm:w-[180px] " alt="asdas" />

      </div>
      <div className="space-y-14 flex flex-col items-center justify-center sm:absolute sm:bottom-0 sm:right-0 sm:left-0   ">
        <p className="uppercase sm:text-[12px] 2xl:text-[20px] text-[20px] tracking-[2px]">Bringing the world closer together.</p>
        <a href="#video"> <img src="/assets/down.png" className="cursor-pointer  animate-bounce hover:animate-ping w-[40px] py-2 " alt="asdas" /></a>
        

      </div>

    </div>
  );
};

export default Hero;
