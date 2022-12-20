import React from 'react'
import Skill from '../Skill'
import './Skills.css'

const Skills = () => {
  return (
    <section id='skills'>
      <h5>Check out my</h5>
      <h2>Skills</h2>
      <div className='container'>
        <div className="skills__container">
          <div className="category">
            <h3>Frameworks</h3>
            <div className="skills__content">
              <Skill title="Vuetify" level="Experienced"/>
              <Skill title="Vue" level="Intermediate"/>
              <Skill title="Nuxt" level="Intermediate"/>
              <Skill title="Colyseus" level="Intermediate"/>
              <Skill title="React" level="Beginner"/>
            </div>
          </div>
          <div className="category">
            <h3>Languages</h3>
            <div className="skills__content">
              <Skill title="C & C++" level="Experienced"/>
              <Skill title="Bash & Shell" level="Experienced"/>
              <Skill title="Makefile" level="Experienced"/>
              <Skill title="HTML5 & CSS3" level="Experienced"/>
              <Skill title="JavaScript & TypeScript" level="Intermediate"/>
              <Skill title="ASMx64" level="Beginner"/>
            </div>
          </div>
          <div className="category">
            <h3>Technologies</h3>
            <div className="skills__content">
              <Skill title="Git" level="Experienced"/>
              <Skill title="Docker" level="Experienced"/>
              <Skill title="Nginx" level="Intermediate"/>
              <Skill title="Node.Js" level="Intermediate"/>
              <Skill title="Kubernetes" level="Beginner"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills