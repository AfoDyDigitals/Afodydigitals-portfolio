import React from "react";

function ProjectBars() {
  return (
    <div className="relative">
      <img
        className="animate-pulse w-[106px] absolute top-[50px] right-[30px] z-[0]"
        src="./src/Graphics/pattern.svg"
      />
      <div className="flex mt-[32px] justify-center text-[20px] font-bold text-amber-500 mb-[30.3px] md:text-[43px] mb-[40px]">
        Projects
      </div>

      <div className="flex justify-center items-center bg-gray-200 w-[300px] h-[43px] mx-[auto] gap-[58px] items-center rounded-[20px] justify-between md:w-[420px] h-[43px] gap-[87px] mx-[auto] ">
        <div className="flex justify-center items-center cursor-pointer rounded-[20px] w-[178px] h-[43px] py-[0px] bg-amber-500 text-center font-bold md:h-[43px]"
          id="frontend-dragbar"
        >
          Frontend
        </div>
        <div className="flex justify-center items-center cursor-pointer rounded-[20px] w-[178px] h-[29px] py-[0px] bg-gray-200 text-center font-bold md:h-[43px]" id="ui-dragbar">
          UI/UX
        </div>
      </div>
    </div>
  );
}

export default ProjectBars;
