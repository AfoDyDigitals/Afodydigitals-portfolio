import React from "react";

function NavBar() {
  return (
    <div className=" absolute top-0 w-[100vw] flex mx-[36px] md:flex mx-[129px] justify-center items-center justify-between">
      <div className="text-[24px] font-bold text-amber-500 md:text-[26px]">
        AfoDyDigitals
      </div>
      <div className="hidden md:flex ml-[155px] mr-[135px] gap-[50px] text-xl font-bold ">
        <div className="cursor-pointer">About</div>
        <div className="cursor-pointer">Skills</div>
        <div className="cursor-pointer">Projects</div>
        <div className="cursor-pointer">Contact</div>
      </div>
      <div className="hidden cursor-pointer hover:bg-yellow-500 md:flex inline-block bg-amber-500 w-[142px] h-[45px] rounded-[20px] mr-[129.54px]  justify-center items-center text-xl font-bold">
        Hire me
      </div>
      <img
        className="cursor-pointer bg-amber-500 rounded-[20px] w-[24px] md:mr-[257px] w-[40px]"
        src="./src/Graphics/darkmode.svg"
      />
      <img
        className="inline-block w-[48px] h-[32px] md:hidden"
        src="./src/Graphics/menubar.svg"
      />
    </div>
  );
}

export default NavBar;
