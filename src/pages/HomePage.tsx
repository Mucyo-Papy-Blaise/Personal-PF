import React from 'react'
import Homebg from '../components/HomeBg'
import Home from '../components/Home'
const HomePage:React.FC = () => {
  return (
    <div className='relative min-h-screen'>
      <Homebg />
      <Home />
    </div>
  )
}

export default HomePage
