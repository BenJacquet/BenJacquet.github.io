import React from 'react'
import {FiHome} from 'react-icons/fi'
import {GiSpellBook, GiDiploma} from 'react-icons/gi'
import {MdWorkOutline} from 'react-icons/md'
import {BsChatText} from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'

import './Navbar.css'

const Navbar = () => {

  return (
    <nav>
      {/* eslint-disable-next-line */}
      <a href="#"><FiHome/></a>
      <a href="#about"><BiUser/></a>
      <a href="#skills"><GiSpellBook/></a>
      <a href="#education"><GiDiploma/></a>
      <a href="#projects"><MdWorkOutline/></a>
      <a href="#contact"><BsChatText/></a>
    </nav>
    )
}

export default Navbar