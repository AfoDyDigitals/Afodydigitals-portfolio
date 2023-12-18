import React from "react";
import { Link } from "react-router-dom";

function About(props) {
  return (
    <div className=" flex flex-col justify-center items-center gap-[8px] mt-[50px] mb-[30px] mx-[52px] md:flex-row items-left gap-[181.93px] mt-[150px]  mx-[146px] mb-[30px]">
      <div className="w-[247.55px] h-[245.86px] md:w-[367.31px] h-[364.8px]">
        <img src="./Graphics/Hero-webdev.svg" />
      </div>
      <div className="flex flex-col justify-center items-center text-center px-[52px] md:grid justify-items-start">
        <div className="text-[20px] font-bold text-amber-500 md:text-[43px]">
          About me
        </div>
        <div
          className={`${
            props.AboutTextColors ? "text-white" : "text-black"
          } w-[100%] text-center md:text-left`}
        >
          <span className="text-[20px] font-bold mt-[20px] md:text-[38px]">
            I'm Temidayo Afolabi{" "}
          </span>
          <br></br>
          <span className="text-[16px] font-bold md:text-[25px]">
            (AfoDyDigitals)
          </span>
        </div>
        <div
          className={`${
            props.AboutTextColors?"text-white":"text-black"
          } text-[14px] text-center md:text-left text-[20px]  mt-[17px]`}
        >
          I specialise in identifying user needs and creating<br></br>
          accessible user interfaces and usable frontend designs
        </div>
        <Link to="/contact">
          <div className="cursor-pointer text-black hover:bg-yellow-500 mt-[15px] flex justify-center items-center bg-amber-500 w-[98.5px] h-[44px] rounded-[20px] text-[10px] font-bold md:w-[143px] h-[45px] justify-center items-center text-[20px] mt-[14px] font-bold">
            Hire me
          </div>
        </Link>
      </div>
    </div>
  );
}

export default About;
