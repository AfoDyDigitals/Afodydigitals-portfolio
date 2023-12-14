import React from "react";
import { NavLink } from "react-router-dom";

function SideBar({ isVisible, toggleSidebar }) {
  const navLinkStyles=({isActive})=> {
    return {
      fontweight: isActive ? "font-bold":"normal",
      textDecoration: isActive ? "underline":"none",
    }
  }

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
      
        <NavLink style={navLinkStyles} to="about"><div className="ml-[43px] text-[20px] font-bold">About</div></NavLink>
        
        <hr className="bg-black"></hr>
        <NavLink style={navLinkStyles} to="/skills"><div className="ml-[43px] text-[20px] font-bold">Skills</div></NavLink>
        
        <hr className="bg-black"></hr>
        <NavLink style={navLinkStyles} to="/projects"><div className="ml-[43px] text-[20px] font-bold">Projects</div></NavLink>
        
        <hr className="bg-black"></hr>
        <NavLink style={navLinkStyles} to="/contact"><div className="ml-[43px] text-[20px] font-bold">Contact</div></NavLink>
        
      </div>
      <div className="flex justify-left items-center gap-[13px] ml-[43px] pt-[57px] mb-[57px]">
      <a href="https://dribbble.com/AfoDyDigitals" target="_blank">
          <img
            className="cursor-pointer w-[24px]"
            src="./src/Graphics/DribbbleSidebar.svg"
          />
        </a>
        <a href="https://github.com/AfoDyDigitals" target="_blank">
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
