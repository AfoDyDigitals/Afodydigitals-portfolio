import React from "react";

function SideBar() {
  return (
    <div className="w-[100vw] bg-amber-500 absolute top-0 right-0 flex flex-col justify-end gap-[245px] md:hidden">
      <img
        className="w-[32px] mx-[21px] my-[28px]"
        src="./src/Graphics/CloseIcon.svg"
      />
      <div className="flex flex-col gap-[22px]">
        <div className="ml-[43px] text-[20px] font-bold">About</div>
        <hr className="bg-black"></hr>
        <div className="ml-[43px] text-[20px] font-bold">Skills</div>
        <hr className="bg-black"></hr>
        <div className="ml-[43px] text-[20px] font-bold">Projects</div>
        <hr className="bg-black"></hr>
        <div className="ml-[43px] text-[20px] font-bold">Contact</div>
      </div>
      <div className="flex justify-left items-center gap-[13px] ml-[43px] mb-[57px]">
        <img
          className="cursor-pointer w-[24px]"
          src="./src/Graphics/DribbbleSidebar.svg"
        />
        <img className=" w-[24px]" src="./src/Graphics/GithubSidebar.svg" />
      </div>
    </div>
  );
}

export default SideBar;
