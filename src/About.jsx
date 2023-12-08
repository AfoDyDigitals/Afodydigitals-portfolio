import React from "react";

function About() {
  return (
    <div className="flex flex-col justify-center items-center gap-[0px] mt-[50px] mb-[20px] md:flex-row mt-[100px] gap-[181.93px] mx-[146px] mb-[20px]">
      <div className="w-[247.55px] h-[245.86px] md:w-[367.31px] h-[364.8px]">
        <img src="./src/Graphics/Hero-webdev.svg" />
      </div>
      <div className="flex flex-col justify-center items-center text-center px-[52px] mt-[] md:grid justify-items-start">
        
        <div className="text-[20px] font-bold text-amber-500 md:text-[43px]">
          About me
        </div>
        <div className="text-center md:text-left">
          <span className="text-[23px] font-bold mt-[20px] dark:text-white md:text-[49px]">
            I'm Temidayo Afolabi{" "}
          </span>
          <br></br>
          <span className="text-[16px] font-bold md:text-[33px]">
            (AfoDyDigitals)
          </span>
        </div>
        <div className="text-[14px] font-normal text-center md:text-[26px] text-left mt-[17px]">
          I specialise in identifying user needs and creating<br></br>
          accessible user interfaces and usable frontend designs
        </div>
        <div className="cursor-pointer hover:bg-yellow-500 mt-[15px] flex justify-center items-center bg-amber-500 w-[98.5px] h-[44px] rounded-[20px] text-[10px] font-bold md:w-[143px] h-[45px] justify-center items-center text-[20px] mt-[14px] font-bold">
          Hire me
        </div>
      </div>
    </div>
  );
}

export default About;
