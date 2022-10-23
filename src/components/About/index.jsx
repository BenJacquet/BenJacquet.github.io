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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae interdum turpis. Phasellus convallis mi est, nec faucibus arcu euismod in. Fusce a nisl purus. Fusce eu tempor purus. Phasellus non est arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc sit amet enim eu sem feugiat tincidunt. Pellentesque tortor est, lobortis in urna ut, pharetra dictum felis. Aliquam lacus neque, viverra id rhoncus.
        </p>
        </div>
      </div>
    </section>
  )
}

export default About