import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import ProjectBars from "./ProjectBars";
import FrontendProjects from "./FrontendProjects";
import UiProjects from "./UiProjects";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import SideBar from "./SideBar";


function App() {
  return (
    <div className="relative text-black dark:bg-slate-800 text-white">
      <NavBar />
      <SideBar />
      <Hero />
      <About />
      <Skills />
      <ProjectBars />
      <FrontendProjects />
      <UiProjects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
