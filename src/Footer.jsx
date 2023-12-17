import React from "react";
import { NavLink } from "react-router-dom";

function Footer(props) {
  const navLinkStyles=({isActive})=> {
    return {
      fontweight: isActive ? "font-bold":"normal",
      textDecoration: isActive ? "underline":"none",
    }
  }

  return (
    <div className="w-[100%]  flex justify-center items-center dark:text-white ">
      <div className="flex gap-[187px] mx-[36px] mt-[157px] mb-[50px] md:flex mx-[129px] justify-center items-center justify-evenly">
        <div className="flex justify-center items-center md:">
          <a href="https://dribbble.com/AfoDyDigitals">
            <img
              className="cursor-pointer w-[32px] md:w-[40.34px]"
              src="./Graphics/Dribbble.svg"
            />
          </a>
          <a href="https://github.com/AfoDyDigitals">
            <img
              className="cursor-pointer w-[32px] md:w-[40.34px]"
              src="./Graphics/Github.svg"
            />
          </a>
        </div>
        <div
          className={`${
            props.theme ? "text-white" : "text-black"
          } hidden md:flex gap-[50px] text-xl font-bold`}
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
          <div className="cursor-pointer text-black flex text-[13px] font-bold  w-[77px] h-[30px] hover:bg-yellow-500 justify-center items-center  md:flex bg-amber-500 w-[142px] h-[45px] rounded-[20px]  justify-center items-center text-[15px] font-bold ">
            Hire me
          </div>
        </NavLink>
        {/* <img
          className="hidden cursor-pointer bg-amber-500 rounded-[20px] w-[24px] md:mr-[257px] w-[40px]"
          src="./Graphics/darkmode.svg"
        />
        <img
          className="hidden cursor-pointer inline-block w-[48px] h-[32px] sm:hidden"
          src="./Graphics/menubar.svg"
        /> */}
      </div>
    </div>
  );
}

export default Footer;
