// App.tsx
import React from 'react';
import NavBar from '../components/NavBar';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import SkillsPage from './SkillsPage';
import ProjectPage from './ProjectPage';
import Contact from '../components/Contact';

const LandingPage: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <NavBar />
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <ProjectPage />
      <Contact />
    </div>
    
   
  );
};

export default LandingPage;
