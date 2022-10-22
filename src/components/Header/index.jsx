import React from 'react'
import './Header.css'
import Portrait from '../../assets/imgs/portrait.jpg'
import CallToAction from '../CallToAction'
import SocialsBar from '../SocialsBar'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Nice to meet you ! I'm</h5>
        <h1>Benjamin Jacquet</h1>
        <h5 className="text-light">Software Engineer</h5>

        <CallToAction />
        <SocialsBar />

        <div className="portrait">
          <img src={Portrait} alt="Portrait" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header