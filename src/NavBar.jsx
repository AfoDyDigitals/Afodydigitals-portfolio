import React from "react";

function NavBar() {
  return (
    <div className=" absolute top-6 w-[100vw] flex px-[36px] md:flex px-[129px] justify-center items-center justify-between">
      <div className="text-[24px] font-bold text-amber-500 md:ml-[257px] text-[26px]">
        AfoDyDigitals
      </div>
      <div className="hidden md:flex ml-[155px] mr-[135px] gap-[50px] text-xl font-bold ">
        <div>About</div>
        <div>Skills</div>
        <div>Projects</div>
        <div>Contact</div>
      </div>
      <div className="hidden hover:bg-yellow-500 md:flex inline-block bg-amber-500 w-[142px] h-[45px] rounded-[20px] mr-[129.54px]  justify-center items-center text-xl font-bold">
        Hire me
      </div>
      <img
        className="bg-amber-500 rounded-[20px] w-[24px] md:mr-[257px] w-[40px]"
        src="./src/Graphics/darkmode.svg"
      />
      <img
        className="inline-block w-[48px] h-[32px] sm:hidden"
        src="./src/Graphics/menubar.svg"
      />
    </div>
  );
}

export default NavBar;
