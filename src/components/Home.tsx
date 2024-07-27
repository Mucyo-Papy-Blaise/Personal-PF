import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import image1 from '../assets/Mypng.png'
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className='min-h-screen relative flex flex-col md:flex-row'>
      {/* Left Side Of Portfolio */}
      <div className='flex flex-col p-8 md:w-2/3 lg:w-1/2 md:ml-20 mt-[240px]'>
        <div className='text-white flex flex-row items-center mb-4'>
          <div className='h-1 w-6 bg-Color3 mr-2 rounded-xl' />
          <p className='font-acme text-base'>Hello</p>
        </div>
        <div className='text-white mt-4'>
          <h1 className='font-roboto font-bold text-3xl md:text-4xl lg:text-5xl'>
            <span className='text-Color3'>MUCYO </span>BLAISE
          </h1>
          <h3 className='font-roboto text-xl md:text-2xl pt-3'>Visual Designer & Front-End Developer</h3>
          <p className='pt-3 text-sm md:text-base'>
            Based in Rwanda, I am a dedicated visual designer and skilled front-end and back-end developer.
            I specialize in creating aesthetically compelling and highly functional digital solutions.
            With a passion for design and a strong technical background, I am eager to collaborate
            on innovative projects and contribute my expertise to teams and clients worldwide.
          </p>
          <div className='h-10 w-44 rounded-xl bg-white mt-8 flex justify-center items-center cursor-pointer hover:bg-slate-400 active:bg-slate-700'>
            <Link to={'/contact'} className='text-black font-semibold text-lg' >Contact Me</Link>
          </div>
        </div>
        <div className='text-white flex justify-start space-x-6 text-xl mt-40'>
          <FontAwesomeIcon
            icon={faGithub}
            className='cursor-pointer transition-all duration-300 ease-in-out hover:scale-150 hover:underline hover:text-Color3'
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className='cursor-pointer transition-all duration-300 ease-in-out hover:scale-150 hover:underline hover:text-Color3'
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className='cursor-pointer transition-all duration-300 ease-in-out hover:scale-150 hover:underline hover:text-Color3'
          />
          <FontAwesomeIcon
            icon={faFacebook}
            className='cursor-pointer transition-all duration-300 ease-in-out hover:scale-150 hover:underline hover:text-Color3'
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className='cursor-pointer transition-all duration-300 ease-in-out hover:scale-150 hover:underline hover:text-Color3'
          />
        </div>
      </div>

      {/* Right-Side of Portfolio */}
      <div className='md:w-1/3 lg:w-1/2 mt-8 md:mt-10'>
        <img
          src={image1}
          alt="My image"
          className='mt-[175px] w-full h-auto max-h-[600px] object-contain'
        />
      </div>
    </div>
  )
}

export default Home