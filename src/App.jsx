import React, { useState } from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import ProjectBars from "./ProjectBars";
import FrontendProjects from "./FrontendProjects";
import UiProjects from "./UiProjects";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
// import SideBar from "./SideBar";
import NoPage from "./NoPage";
import {BrowserRouter, Router, Routes, Route, Link} from "react-router-dom";

function App() {
  const [theme, setTheme]=useState(false)
  function toggle() {
    setTheme(!theme)

    
  }

  return (
    // <div className={`relative ${themeClass()} text-black dark:bg-slate-800 text-white`}>
    <div className={`relative ${theme?"bg-black":"bg-white"} text-black dark:bg-slate-800 text-white`}>
  
          <NavBar switchMode={toggle} theme={theme} />
          {/* <SideBar /> */}
          <Hero theme={theme} />
          <About theme={theme} />
          <Skills theme={theme} />
          <ProjectBars />
          <FrontendProjects />
          <UiProjects />
          <ContactForm />
          <Footer theme={theme} />
    
    </div>
  );
}

export default App;
