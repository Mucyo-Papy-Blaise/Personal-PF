import React from 'react'
import About from '../components/About'
import AboutBg from '../components/AboutBg'

const AboutPage: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <AboutBg />
      <About />
    </div>
  )
}

export default AboutPage