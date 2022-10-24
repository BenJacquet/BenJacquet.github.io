import React from 'react'
import './CallToAction.css'
import ResumeEN from '../../assets/pdfs/Benjamin Jacquet - CV - EN.pdf'
import ResumeFR from '../../assets/pdfs/Benjamin Jacquet - CV - FR.pdf'

const CallToAction = () => {
  return (
    <div className='cta'>
      <a href={ResumeFR} rel='noreferrer' target='_blank' className='btn'>CV - FR</a>
      <a href={ResumeEN} rel='noreferrer' target='_blank' className='btn'>CV - EN</a>
      <a href="#contact" className='btn btn-primary' >Want to Talk ?</a>
    </div>
  )
}

export default CallToAction