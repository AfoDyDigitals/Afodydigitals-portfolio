import React from 'react'
import About from './About'
import Hero from './Hero'
import Skills from './Skills'
import Project from './Project'
import ContactForm from './ContactForm'

function Home(theme) {
  // const [theme, setTheme] = useState(false);
  // function toggle() {
  //   setTheme(!theme);
  // }
  
  return (
    <div>
        <Hero theme={theme}/>
        <About theme={theme} />
        <Skills theme={theme}/>
        <Project theme={theme}/>
        <ContactForm theme={theme}/>
    </div>
  )
}

export default Home