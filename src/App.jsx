import './App.css'
import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
// import Projects from './components/Projects'
import Contact from './components/Contact'
import Separator from './components/Separator'
import Footer from './components/Footer'
// import TooSmall from './components/TooSmall'

const App = () => {
  return (
    <div>
      {/* <TooSmall /> */}
      <Header />
      <Navbar/>
      <About />
      <Skills />
      <Education />
      {/* <Projects /> */}
      <Contact />
      <Separator />
      <Footer />
    </div>
  )
}

export default App