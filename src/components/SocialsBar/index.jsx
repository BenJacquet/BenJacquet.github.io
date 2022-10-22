import React from 'react'
import './SocialsBar.css'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const SocialsBar = () => {
  return (
    <div className='socials__bar'>
      <a href="https://www.linkedin.com/in/benjamin-jacquet-87b953251/" rel='noreferrer' target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/BenJacquet" rel='noreferrer' target='_blank'><BsGithub/></a>
      <a href="https://profile.intra.42.fr/users/jabenjam" rel='noreferrer' target='_blank'>42</a>
    </div>
  )
}

export default SocialsBar