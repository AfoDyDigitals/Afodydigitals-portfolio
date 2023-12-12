function SideBar({ isVisible, toggleSidebar }) {
  return (
    <div
      className="fixed top-0 right-0 w-[80vw] bg-amber-500 flex flex-col justify-start gap-y-4 z-20"
    >
      <img
        onClick={toggleSidebar}
        className="cursor-pointer w-[24px] mx-[21px] my-[28px]"
        src="./src/Graphics/CloseIcon.svg"
      />
      <div className="flex flex-col gap-y-[4px] ml-[43px] my-[24px]">
        <div className="text-[20px] font-bold">About</div>
        <hr className="bg-black w-full h-[1px] mb-[12px]" />
      </div>
      <div className="flex flex-col gap-y-[4px] ml-[43px]">
        <div className="text-[20px] font-bold">Skills</div>
        <hr className="bg-black w-full h-[1px] mb-[12px]" />
      </div>
      <div className="flex flex-col gap-y-[4px] ml-[43px]">
        <div className="text-[20px] font-bold">Projects</div>
        <hr className="bg-black w-full h-[1px] mb-[12px]" />
      </div>
      <div className="flex flex-col gap-y-[4px] ml-[43px]">
        <div className="text-[20px] font-bold">Contact</div>
      </div>
      <div className="flex justify-left items-center gap-[13px] ml-[43px] mb-[30px]">
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
