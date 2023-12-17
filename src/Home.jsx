import React from 'react'
import About from './About'
import Hero from './Hero'
import Skills from './Skills'
import Project from './Project'
import ContactForm from './ContactForm'

function Home({textColor}) {
  // function Home (props) {
  
  return (
    <div>
        <Hero effect={textColor}/>
        <About AboutTextColors={textColor} />
        <Skills />
        <Project />
        <ContactForm />
    </div>
  )
}

export default Home