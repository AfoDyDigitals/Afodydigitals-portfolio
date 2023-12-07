import React from "react";

function Footer() {
  return (
    <div className="relative">
      <div className="w-[100vw] flex gap-[187px] mx-[36px] mt-[157px] mb-[50px] md:flex px-[129px] justify-center items-center justify-between">
        <div className="flex justify-center items-center md:ml-[257px]">
        <img
          className="w-[32px] md:w-[40.34px]"
          src="./src/Graphics/Dribbble.svg"
        />
        <img
          className="w-[32px] md:w-[40.34px]"
          src="./src/Graphics/Github.svg"
        />
      </div>
        <div className="hidden md:flex ml-[155px] mr-[135px] gap-[50px] text-xl font-bold ">
          <div>About</div>
          <div>Skills</div>
          <div>Projects</div>
          <div>Contact</div>
        </div>
        <div className="flex text-[13px] font-bold  w-[77px] h-[30px] hover:bg-yellow-500 justify-center items-center  md:flex bg-amber-500 w-[142px] h-[45px] rounded-[20px] mr-[129.54px]  justify-center items-center text-[15px] font-bold ">
          Hire me
        </div>
        <img
          className="hidden bg-amber-500 rounded-[20px] w-[24px] md:mr-[257px] w-[40px]"
          src="./src/Graphics/darkmode.svg"
        />
        <img
          className="hidden inline-block w-[48px] h-[32px] sm:hidden"
          src="./src/Graphics/menubar.svg"
        />
      </div>
    </div>
  );
}

export default Footer;
