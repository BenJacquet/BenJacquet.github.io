import React from 'react'

const Skill = ({title, level}) => {
  return (
    <article className="skill__details">
      <h4>{title}</h4>
      <small className='text-light'>{level}</small>
    </article>
  )
}

export default Skill