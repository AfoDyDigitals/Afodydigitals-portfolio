import React from "react";
import ProjectBars from "./ProjectBars";
import FrontendProjects from "./FrontendProjects";
import UiProjects from "./UiProjects";

function Project() {
  return (
    <div style={{ width: "100%" }}>
      <div className="flex mt-[32px] justify-center text-[20px] font-bold text-amber-500 mb-[30.3px] md:text-[43px] mb-[40px]">
        Projects
      </div>
      <ProjectBars />
      <FrontendProjects />
      <UiProjects />
    </div>
  );
}

export default Project;
