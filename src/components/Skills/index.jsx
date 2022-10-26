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
            <h3>Frameworks</h3>
            <div className="skills__content">
            <article className="skill__details">
                <h4>Vuetify</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className="skill__details">
                <h4>Vue</h4>
                <small className='text-light'>Intermediate</small>
              </article>
              <article className="skill__details">
                <h4>Nuxt</h4>
                <small className='text-light'>Intermediate</small>
              </article>
              <article className="skill__details">
                <h4>Colyseus</h4>
                <small className='text-light'>Intermediate</small>
              </article>
              <article className="skill__details">
                <h4>React</h4>
                <small className='text-light'>Beginner</small>
              </article>
            </div>
          </div>
          <div className="category">
            <h3>Languages</h3>
            <div className="skills__content">
              <article className="skill__details">
                <h4>C & C++</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className="skill__details">
                <h4>Bash & Shell</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className="skill__details">
                <h4>Makefile</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className="skill__details">
                <h4>HTML5 & CSS3</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className="skill__details">
                <h4>JavaScript & TypeScript</h4>
                <small className='text-light'>Intermediate</small>
              </article>
              <article className="skill__details">
                <h4>ASMx64</h4>
                <small className='text-light'>Beginner</small>
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
                <h4>Docker</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className="skill__details">
                <h4>Nginx</h4>
                <small className='text-light'>Intermediate</small>
              </article>
              <article className="skill__details">
                <h4>Node.Js</h4>
                <small className='text-light'>Intermediate</small>
              </article>
              <article className="skill__details">
                <h4>Kubernetes</h4>
                <small className='text-light'>Beginner</small>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills