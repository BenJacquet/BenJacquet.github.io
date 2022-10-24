import React from 'react'
import './Footer.css'
import Portrait from '../../assets/imgs/portrait.jpg'
import SocialsBar from '../SocialsBar'
import ReactIcon from '../../assets/imgs/react.svg'

const Footer = () => {
  return (
    <footer>
      <div className='container footer__container'>
        {/* eslint-disable-next-line */}
        <a href="#" className='scroll__up'>Scroll Up {'->'}</a>
        <img src={Portrait} alt="portrait" className='portrait' />
        <p><span className='flag__blue'>Cheers</span> from <span className='flag__red'>France</span></p>
        <div className='big__socials__bar'>
          <SocialsBar/>
        </div>
        <h6 className='development'>This website was designed & developped by me with <a className='react' href="https://reactjs.org/" rel="noreferrer" target="_blank">React</a><img src={ReactIcon} alt="react_icon"/></h6>
        <p className='rights'>© 2022 Benjamin Jacquet - All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer