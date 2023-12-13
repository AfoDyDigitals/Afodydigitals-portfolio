import React from 'react'
import About from './About'
import Hero from './Hero'
import Skills from './Skills'
import Project from './Project'
import ContactForm from './ContactForm'

function Home() {
  return (
    <div>
        <Hero />
        <About />
        <Skills />
        <Project />
        <ContactForm />
    </div>
  )
}

export default Home