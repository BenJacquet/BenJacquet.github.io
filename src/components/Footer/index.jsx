import React from 'react'
import './Footer.css'
import Portrait from '../../assets/imgs/portrait.jpg'
import SocialsBar from '../SocialsBar'

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
        <p className='development'>This website was designed & developped by me with React.js</p>
        <p className='rights'>© 2022 Benjamin Jacquet - All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer