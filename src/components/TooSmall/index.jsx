import React from 'react'
import './TooSmall.css'
import {GrRotateLeft} from 'react-icons/gr'

const TooSmall = () => {
  return (
    <div className='warning'>
    <h3>Please rotate your phone or use a bigger display<br /><br /><GrRotateLeft /></h3>
    </div>
  )
}

export default TooSmall