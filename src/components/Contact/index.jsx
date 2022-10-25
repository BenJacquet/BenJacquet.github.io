import React from 'react'
import './Contact.css'
import {MdAlternateEmail, MdLocalPhone} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Feel free to</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
          <h4><MdLocalPhone /> Phone</h4>
            <a href="https://wa.me/33602264530" rel="noreferrer" target="_blank"><h5>(+33) 6 02 26 45 30</h5></a>
          </article>
          <article className='contact__option'>
          <h4><MdAlternateEmail /> Email</h4>
            <a href="mailto:benjaminjacquet.dev@gmail.com"><h5>benjaminjacquet.dev@gmail.com</h5></a>
          </article>
          <article className='contact__option'>
          <h4><BsMessenger /> Messenger</h4>
            <a href="https://m.me/benjamin.jacquet.33" rel="noreferrer" target="_blank"><h5>Benjamin Jacquet</h5></a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact