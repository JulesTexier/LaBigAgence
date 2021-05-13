import React from 'react'
import { Link } from 'react-router-dom'
import projects from 'components/CardProjects/data/projects'

const ProjectsNavbar = () => {


return(
  <nav>
    <ul>{projects.map((project, i) => (
      <li key={i}><Link to={"/projects/" + project.name}>{project.name}</Link></li>
      ))}
    </ul>
  </nav>
  )

}

export default ProjectsNavbar