import React from "react";
import { Link } from "react-router-dom";

function Hero(props) {
  return (
    <div className="w-[100%]">
      <img
        className="w-[106px] absolute top-[300px] animate-bounce"
        src="./src/Graphics/pattern.svg"
      />
      <div className="flex flex-col space-y-2 justify-center items-center mt-[100px] md:flex flex-col space-y-2 px-[147px] justify-center items-center">
        <div className="flex justify-center items-center">
          <img
            className="w-[281px] h-[200px] md:w-[412.11px] h-[293.28px]"
            src="./src/Graphics/man.svg"
          />
        </div>
        <div className="flex flex-col justify-center items-center mx-[102px] md: ">
          <div
            className={`${
              props.effect ? "text-white" : "text-black"
            } text-[18px] font-bold md:text-[33px] font-bold text-center`}
          >
            Hi there,
          </div>
          <div
            className={`${
              props.effect ? "text-white" : "text-black"
            } text-center  text-[38px] font-bold md:text-[69px] font-bold`}
          >
            I am a UI & Frontend <br></br>Designer
          </div>
          <div className="flex justify-center items-center gap-[14.5px]">
            <Link to="/contact">
              <div className=" cursor-pointer text-black mt-[32px] hover:bg-yellow-500 flex justify-center items-center bg-amber-500 w-[98.5px] h-[44px] rounded-[20px] text-[10px] font-bold md:w-[169px] h-[54px]  justify-center items-center text-[18px] font-bold">
                Hire me
              </div>
            </Link>
            <Link to="/projects">
              <div className="cursor-pointer hover:bg-black text-amber-500 mt-[32px] flex justify-center items-center border-solid border-2 border-amber-500 w-[98.5px] h-[44px] rounded-[20px] text-[10px] font-bold md:w-[169px] h-[54px] gap-[25px] justify-center items-center text-[18px] font-bold">
                Projects
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-[32.7px]">
        <a href="https://dribbble.com/AfoDyDigitals">
          <img
            className="cursor-pointer w-[32px] md:w-[40.34px]"
            src="./src/Graphics/Dribbble.svg"
          />
        </a>
        <a href="https://github.com/AfoDyDigitals">
          <img
            className="cursor-pointer w-[32px] md:w-[40.34px]"
            src="./src/Graphics/Github.svg"
          />
        </a>
      </div>
    </div>
  );
}

export default Hero;
