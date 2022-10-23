import './App.css'
import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
// import Projects from './components/Projects'
// import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Navbar/>
      <About />
      <Skills />
      <Education />
      {/* <Projects /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  )
}

export default App