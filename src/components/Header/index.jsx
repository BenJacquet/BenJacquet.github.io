import React from 'react'
import './Header.css'
import CallToAction from '../CallToAction'
import SocialsBar from '../SocialsBar'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Nice to meet you ! I'm</h5>
        <h1>Benjamin Jacquet</h1>
        <h2 className="text-light">Software Engineer</h2>
        <CallToAction />
        <blockquote>
          <p><i>"Everybody has a creative potential and from the moment you can express this creative potential, you can start changing the world."</i></p>
        </blockquote>
        <figcaption><b>Paulo Coelho</b> <br /> The Alchemist</figcaption>
        <a href="#contact" className='scroll__down'>Scroll Down {'->'}</a>
        <SocialsBar />
      </div>
    </header>
  )
}

export default Header