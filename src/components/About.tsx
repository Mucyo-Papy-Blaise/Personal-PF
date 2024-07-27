import React from 'react'
import Image2 from '../assets/Mypng2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import CV from '../assets/MY RESUME.pdf'

const About: React.FC = () => {
  return (
    <div className='relative min-h-screen flex flex-col lg:flex-row items-center justify-center p-4 lg:p-8'>
      <div className='w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0'>
        <img 
          src={Image2} 
          alt="Image 2"
          className='h-auto max-h-[450px] lg:max-h-[650px] w-auto object-contain'
        />
      </div>
      
      <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:pl-16'>
        <h1 className='font-roboto font-bold text-Color3 text-2xl lg:text-[28px] mb-6 lg:mb-12'>About Me!</h1>
        
        <p className='text-white text-center lg:text-left font-semibold mb-8 lg:mb-12 max-w-md'>
          Hello! I'm Mucyo Papy Blaise, a budding 
          web developer with a passion for both 
          front-end and back-end design. I'm 
          enthusiastic about creating seamless and 
          user-friendly web experiences and am constantly 
          learning new technologies to enhance my skills.
        </p>
        
        <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6'>
          <div className='border-2 border-Color3 rounded-md h-[50px] w-full sm:w-[170px] hover:underline active:bg-slate-700'>
            <a href={CV} className='h-full w-full flex items-center justify-center'>
              <button className='text-white flex items-center justify-center' type='submit'>
                DOWNLOAD CV <FontAwesomeIcon icon={faDownload} className='ml-2' />
              </button>
            </a>
          </div>
          
          <div className='border-2 border-Color3 rounded-md h-[50px] w-full sm:w-[170px] hover:underline active:bg-slate-700'>
            <button className='text-white h-full w-full flex items-center justify-center'>VIEW MORE</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About