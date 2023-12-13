import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="relative flex justify-center items-center dark:text-white ">
      <div className="flex gap-[187px] mx-[36px] mt-[157px] mb-[50px] md:flex mx-[129px] justify-center items-center justify-between">
        <div className="flex justify-center items-center md:ml-[257px]">
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
        <div
          className={`${
            props.theme ? "text-white" : "text-black"
          } hidden md:flex gap-[50px] text-xl font-bold`}
        >
          <Link to="about">
            <div className="cursor-pointer">About</div>
          </Link>
          <Link to="/skills">
            <div className="cursor-pointer">Skills</div>
          </Link>
          <Link to="/projects">
            <div className="cursor-pointer">Projects</div>
          </Link>
          <Link to="/contact">
            <div className="cursor-pointer">Contact</div>
          </Link>
        </div>
        <Link to="/contact">
          <div className="cursor-pointer text-black flex text-[13px] font-bold  w-[77px] h-[30px] hover:bg-yellow-500 justify-center items-center  md:flex bg-amber-500 w-[142px] h-[45px] rounded-[20px]  justify-center items-center text-[15px] font-bold ">
            Hire me
          </div>
        </Link>
        <img
          className="hidden cursor-pointer bg-amber-500 rounded-[20px] w-[24px] md:mr-[257px] w-[40px]"
          src="./src/Graphics/darkmode.svg"
        />
        <img
          className="hidden cursor-pointer inline-block w-[48px] h-[32px] sm:hidden"
          src="./src/Graphics/menubar.svg"
        />
      </div>
    </div>
  );
}

export default Footer;
