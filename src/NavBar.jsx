import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SideBar from "./SideBar";

function NavBar(props) {
  const navLinkStyles=({isActive})=> {
    return {
      fontweight: isActive ? "font-bold":"normal",
      textDecoration: isActive ? "underline":"none",
    }
  }
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  function toggleSidebar() {
    setIsSidebarVisible(!isSidebarVisible);
  }

  function darkmode() {
    if (props.switchMode) {
      props.switchMode();
    }
  }

  return (
    <div className="">
      <nav
        className={`${
          props.NavTheme ? "bg-black" : "bg-white"
        } w-[100%] pt-[50px]  mb-[20px] px-[36px] flex justify-center items-center justify-between z-10 md:px-[129px] flex justify-center items-center justify-between`}
      >
        <NavLink  to="/">
          <div className="text-[24px] font-bold text-amber-500 md:text-[26px]">
            AfoDyDigitals
          </div>
        </NavLink>
        <div
          className={`${
            props.NavTheme ? "text-white" : "text-black"
          } hidden md:flex ml-[155px] mr-[135px] gap-[50px] text-xl font-bold `}
        >
          <NavLink style={navLinkStyles} to="about">
            <div className="cursor-pointer">About</div>
          </NavLink>
          <NavLink style={navLinkStyles} to="/skills">
            <div className="cursor-pointer">Skills</div>
          </NavLink>
          <NavLink style={navLinkStyles} to="/projects">
            <div className="cursor-pointer">Projects</div>
          </NavLink>
          <NavLink style={navLinkStyles} to="/contact">
            <div className="cursor-pointer">Contact</div>
          </NavLink>
        </div>
        <NavLink style={navLinkStyles} to="/contact">
          <div className="hidden cursor-pointer hover:bg-yellow-500 md:flex text-black inline-block bg-amber-500 w-[142px] h-[45px] rounded-[20px] mr-[129.54px] justify-center items-center text-xl font-bold">
            Hire me
          </div>
        </NavLink>
        {props.NavTheme ? (
          <img
            onClick={darkmode}
            className="cursor-pointer bg-amber-500 rounded-[20px] w-[24px] md:w-[40px]"
            src="./src/Graphics/lightmode.svg"
          />
        ) : (
          <img
            onClick={darkmode}
            className="cursor-pointer bg-amber-500 rounded-[20px] w-[24px] md:w-[40px]"
            src="./src/Graphics/darkmode.svg"
          />
        )}

        {isSidebarVisible && (
          <img
            onClick={toggleSidebar}
            className="cursor-pointer inline-block w-[48px] h-[32px] md:hidden opacity-0"
            src="./src/Graphics/menubar.svg"
          />
        )}

        {!isSidebarVisible && (
          <img
            onClick={toggleSidebar}
            className="cursor-pointer inline-block w-[48px] h-[32px] md:hidden"
            src="./src/Graphics/menubar.svg"
          />
        )}
        {isSidebarVisible && <SideBar toggleSidebar={toggleSidebar} />}
      </nav>
    </div>
  );
}

export default NavBar;
