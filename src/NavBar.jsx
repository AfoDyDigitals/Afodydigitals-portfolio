import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

function NavBar(props) {
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
    <div className="w-[100%]">
    <nav
      className={`${
        props.theme ? "bg-black" : "bg-white"
      } fixed top-0 pt-[50px] mb-[20px] px-[36px] flex justify-center items-center justify-between z-10 md:px-[129px] flex justify-center items-center justify-between`}
    >
      <Link to="/">
        <div className="text-[24px] font-bold text-amber-500 md:text-[26px]">
          AfoDyDigitals
        </div>
      </Link>
      <div
        className={`${
          props.theme ? "text-white" : "text-black"
        } hidden md:flex ml-[155px] mr-[135px] gap-[50px] text-xl font-bold `}
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
      <div className="hidden cursor-pointer hover:bg-yellow-500 md:flex inline-block bg-amber-500 w-[142px] h-[45px] rounded-[20px] mr-[129.54px] justify-center items-center text-xl font-bold">
        Hire me
      </div>
      {props.theme ? (
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
