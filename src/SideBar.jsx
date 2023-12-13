import React from "react";

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
        <div className="ml-[43px] text-[20px] font-bold">About</div>
        <hr className="bg-black"></hr>
        <div className="ml-[43px] text-[20px] font-bold">Skills</div>
        <hr className="bg-black"></hr>
        <div className="ml-[43px] text-[20px] font-bold">Projects</div>
        <hr className="bg-black"></hr>
        <div className="ml-[43px] text-[20px] font-bold">Contact</div>
      </div>
      <div className="flex justify-left items-center gap-[13px] ml-[43px] pt-[57px] mb-[57px]">
        <img
          className="cursor-pointer w-[24px]"
          src="./src/Graphics/DribbbleSidebar.svg"
        />
        <img 
          className="w-[24px]" 
          src="./src/Graphics/GithubSidebar.svg" 
        />
      </div>
    </div>
  );
}

export default SideBar;
