import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import ProjectBars from "./ProjectBars";
import FrontendProjects from "./FrontendProjects";
import UiProjects from "./UiProjects";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <ProjectBars />
      <FrontendProjects />
      <UiProjects />
    </div>
  );
}

export default App;
