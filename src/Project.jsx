import React from 'react'
import ProjectBars from './ProjectBars'
import FrontendProjects from './FrontendProjects'
import UiProjects from './UiProjects'

function Project() {
  return (
    <div style={{width:"100%"}}>
        <ProjectBars />
        <FrontendProjects />
        <UiProjects />
    </div>
  )
}

export default Project