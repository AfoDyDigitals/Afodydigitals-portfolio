import React, { useState } from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";

import ContactForm from "./ContactForm";
import Footer from "./Footer";
// import SideBar from "./SideBar";
import NoPage from "./NoPage";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import Project from "./Project";

function App() {
  const [theme, setTheme] = useState(false);
  function toggle() {
    setTheme(!theme);
  }

  return (
    <div
    className={`relative ${
      theme ? "bg-black" : "bg-white"
        } text-black dark:bg-slate-800 text-white w-[100vw]`}
        >
        <BrowserRouter>
        <NavBar switchMode={toggle} theme={theme} />

        <Routes>
          <Route path="/" element={<Hero theme={theme} />} />
          <Route path="/about" element={<About theme={theme} />} />
          <Route path="/skills" element={<Skills theme={theme} />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>

        <Footer theme={theme} />
    </BrowserRouter>
      </div>
  );
}

export default App;
