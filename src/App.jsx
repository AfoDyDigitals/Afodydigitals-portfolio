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
import Home from "./Home";

function App() {
  const [theme, setTheme] = useState(false);
  function toggle() {
    setTheme(!theme);
  }

  return (
    <div
      className={`relative w-[100vw] h-[auto] ${theme ? "bg-black" : "bg-white"} ${
        theme ? "text-white" : "text-black"
      }`}
    >
      <BrowserRouter>
        <NavBar switchMode={toggle} NavTheme={theme} />

        <Routes>
          <Route path="/" element={<Home textColor={theme} />} />
          <Route path="/about" element={<About AboutTextColors={theme} />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>

        <Footer theme={theme} />
      </BrowserRouter>
    </div>
  );
}

export default App;
