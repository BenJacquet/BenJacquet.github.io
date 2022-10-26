import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <section id='education'>
      <h5>What about my</h5>
      <h2>Education ?</h2>
      <div className="education__container">
          <h3>I started studying <strong>Computer Science</strong> at <a href="https://42.fr/en/homepage/" rel="noreferrer" target="_blank">42Paris</a> in October 2019</h3>
          <br />
          <p>If you are not familiar with the concept, the learning process is based on projects and peer-learning as a vector of progress instead of sitting in a class hearing about stuff that you will most likely forget.</p>
          <br />
          <p>If you are able to stay focused and work on tasks on your own and without directions, it allows for significantly better knowledge retention and faster progress !</p>
          <br />
          <p>I'm still completing various projects outside the common core or the cursus to this day.</p>
          <br />
          <p>All Hail the Assembly !</p>
          {/* <p>Here is my badge</p> */}
          {/* <img className="badge" src="https://badge42.vercel.app/api/v2/cl9h8a93b00390hmqa9bg4a7c/stats?cursusId=21&coalitionId=48" alt="badge 42" /> */}
      </div>
    </section>
  )
}

export default Education