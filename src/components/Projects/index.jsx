import React from 'react'
import './Projects.css'
import {projects} from './projects.js'

const Projects = () => {
  
  console.log(projects);
  let currentProject = projects[0];

  return (
    <section id='projects'>
      <h5>Want to see some</h5>
      <h2>Projects ?</h2>
      <div className='container'>
        {/* Project History Carousel */}
        <div className='project_container'>
          {/* Project Name */}
          {currentProject.name}
          {/* Project Description */}
          {currentProject.description}
          {/* Project Technologies*/}
          {currentProject.technologies}
          {/* Project Links */}
          {currentProject.links.demo}
          {currentProject.links.code}
          {/* Image Gallery */}
          {currentProject.images}
        </div>
        {/* Arrows to move to next project*/}
      </div>
    </section>
  )
}

export default Projects