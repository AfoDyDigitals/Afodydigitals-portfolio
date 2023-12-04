import React from "react";

function Hero() {
  return (
    <>
      <img
        className="w-[106px] absolute top-[300px]"
        src="./src/Graphics/pattern.svg"
      />
      <div className="w-[100vw] flex flex-col justify-center items-center mt-[150px] md:flex-row-reverse px-[147px] gap-[133px] justify-center items-center">
        <div className="flex justify-center items-center">
          <img
            className="w-[281px] h-[200px] md:w-[412.11px] h-[293.28px]"
            src="./src/Graphics/man.svg"
          />
        </div>
        <div className="flex-col justify-center px-[102px] md:grid justify-items-start ">
          <div className="text-[18px] font-bold md:text-[33px] font-bold text-center">
            Hi there,
          </div>
          <div className="flex justify-center items-center text-[38px] font-bold md:text-[69px] font-bold">
            I am a UI & <br></br>Frontend Designer
          </div>
          <div className="flex justify-center items-center gap-[14.5px]">
            <div className=" mt-[32px] flex justify-center items-center bg-amber-500 w-[98.5px] h-[44px] rounded-[20px] text-[10px] font-bold md:w-[169px] h-[54px]  justify-center items-center text-[18px] font-bold">
              Hire me
            </div>
            <div className=" text-amber-500 mt-[32px] flex justify-center items-center border-solid border-2 border-amber-500 w-[98.5px] h-[44px] rounded-[20px] text-[10px] font-bold md:w-[169px] h-[54px] gap-[25px] justify-center items-center text-[18px] font-bold">
              Projects
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[32.7px]">
        <img
          className="w-[32px] md:w-[40.34px]"
          src="./src/Graphics/Dribbble.svg"
        />
        <img
          className="w-[32px] md:w-[40.34px]"
          src="./src/Graphics/Github.svg"
        />
      </div>
    </>
  );
}

export default Hero;
