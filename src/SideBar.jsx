import React from "react";
import { Link } from "react-router-dom";

function SideBar({ isVisible, toggleSidebar }) {

  return (
    <div
      className="fixed top-0 right-0 w-[60vw] h-[auto] bg-amber-500 grid grid-cols-1 gap-y-4 z-20 block md:hidden"
    >
      <img
        onClick={toggleSidebar}
        className="cursor-pointer w-[24px] mx-[21px] my-[28px]"
        src="./src/Graphics/CloseIcon.svg"
      />
      <div className="flex flex-col text-black gap-[22px] mt-[50px] mb-[50px]">
      
        <Link to="about"><div className="ml-[43px] text-[20px] font-bold">About</div></Link>
        
        <hr className="bg-black"></hr>
        <Link to="/skills"><div className="ml-[43px] text-[20px] font-bold">Skills</div></Link>
        
        <hr className="bg-black"></hr>
        <Link to="/projects"><div className="ml-[43px] text-[20px] font-bold">Projects</div></Link>
        
        <hr className="bg-black"></hr>
        <Link to="/contact"><div className="ml-[43px] text-[20px] font-bold">Contact</div></Link>
        
      </div>
      <div className="flex justify-left items-center gap-[13px] ml-[43px] pt-[57px] mb-[57px]">
      <a href="https://dribbble.com/AfoDyDigitals">
          <img
            className="cursor-pointer w-[24px]"
            src="./src/Graphics/DribbbleSidebar.svg"
          />
        </a>
        <a href="https://github.com/AfoDyDigitals">
          <img
            className="cursor-pointer w-[24px]"
            src="./src/Graphics/GithubSidebar.svg"
          />
        </a>
      </div>
    </div>
  );
}

export default SideBar;
