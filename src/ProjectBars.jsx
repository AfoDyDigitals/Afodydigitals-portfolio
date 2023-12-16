import React, { useState } from "react";

function ProjectBars({changeProject, setChange}) {
function toggle(){
  setChange(!changeProject)
}

  return (
    <div className="relative">
      <img
        className="animate-pulse w-[106px] absolute top-[50px] right-[30px] z-[0]"
        src="./src/Graphics/pattern.svg"
      />

      <div className="flex justify-center items-center bg-gray-200 w-[300px] h-[43px] mx-[auto] gap-[58px] items-center rounded-[20px] justify-between md:w-[420px] h-[43px] gap-[87px] mx-[auto] ">
        <div onClick={toggle} className={`flex justify-center text-black items-center cursor-pointer rounded-[20px] w-[178px] h-[43px] py-[0px]  text-center font-bold md:h-[43px] ${changeProject?"bg-gray-200":"bg-amber-500"}`}
          id="frontend-dragbar"
        >
          Frontend
        </div>
        <div onClick={toggle} className={`flex justify-center text-black items-center cursor-pointer rounded-[20px] w-[178px] h-[43px] py-[0px] text-center font-bold md:h-[43px]" ${changeProject?"bg-amber-500":"bg-gray-200"} `} id="ui-dragbar">
          UI/UX
        </div>
      </div>
    </div>
  );
}

export default ProjectBars;
