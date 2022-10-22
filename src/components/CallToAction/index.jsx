import React from 'react'
import './CallToAction.css'
// import ResumeEN from '../../assets/pdfs/Benjamin Jacquet - Resume.pdf'
import ResumeFR from '../../assets/pdfs/Benjamin Jacquet - CV.pdf'

const CallToAction = () => {
  return (
    <div className='cta'>
      <a href={ResumeFR} className='btn'>Download Resume</a>
      <a href="#contact" className='btn btn-primary' >Want to Talk ?</a>
    </div>
  )
}

export default CallToAction