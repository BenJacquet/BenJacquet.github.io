import React from 'react'
import './About.css'
import Portrait from '../../assets/imgs/portrait_casual.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Let me</h5>
      <h2>Introduce Myself !</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__portrait">
            <img src={Portrait} alt="portrait" />
          </div>
        </div>
        <div className="about__content">
        <div className="about__cards">

          <article className="about__card">
            <h6>Coding</h6>
            <small>3+<br />Years</small>
          </article>

          <article className="about__card">
            <h6>Projects</h6>
            <small>30+<br />achieved</small>
          </article>

          <article className="about__card">
            <h6>Workouts</h6>
            <small>5<br />per week</small>
          </article>
        </div>
        <p>
          I'm a former luxury concierge that fell in love with software development after succeeding <strong>42Paris</strong> month long entrance tests with no past experience !
          <br />
          <br />
          My goal is to become a versatile developper, able to give shape to about any idea that comes to my mind whether it is a solution for an real world problem or just a funny project 😋
          <br />
          <br />
          I've worked on many projects using multiple technologies and languages but I must say I have a soft spot for  <strong>Frontend Developement</strong> !
        </p>
        </div>
      </div>
    </section>
  )
}

export default About