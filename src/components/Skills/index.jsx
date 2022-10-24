import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <section id='skills'>
      <h5>Check out my</h5>
      <h2>Skills</h2>
      <div className='container'>
        <div className="skills__container">
          <div className="category">
            <h3>Frontend</h3>
            <div className="skills__content">
              <article className="skill__details">
                <h4>HTML5</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className="skill__details">
                <h4>CSS3</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className="skill__details">
                <h4>JavaScript & TypeScript</h4>
                <small className='text-light'>Intermediate</small>
              </article>
              <article className="skill__details">
                <h4>Vue & Nuxt</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className="skill__details">
                <h4>Vuetify</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className="skill__details">
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </article>
            </div>
          </div>
          <div className="category">
            <h3>Technologies</h3>
            <div className="skills__content">
              <article className="skill__details">
                <h4>Git</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className="skill__details">
                <h4>Docker & Docker-Compose</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className="skill__details">
                <h4>Kubernetes</h4>
                <small className='text-light'>Beginner</small>
              </article>
              <article className="skill__details">
                <h4>Nginx</h4>
                <small className='text-light'>Intermediate</small>
              </article>
              <article className="skill__details">
                <h4>Node.Js</h4>
                <small className='text-light'>Intermediate</small>
              </article>
            </div>
          </div>
          <div className="category">
            <h3>Wizardry</h3>
            <div className="skills__content">
              <article className="skill__details">
                <h4>C</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className="skill__details">
                <h4>C++</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className="skill__details">
                <h4>ASMx64</h4>
                <small className='text-light'>Beginner</small>
              </article>
              <article className="skill__details">
                <h4>Bash & Shell</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className="skill__details">
                <h4>Makefile</h4>
                <small className='text-light'>Experienced</small>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills