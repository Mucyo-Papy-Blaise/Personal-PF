import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from './HomePage';
import About from './AboutPage';
import Service from './ServicePage';
import Skills from './SkillsPage';
import Projects from './ProjectPage';
import Contact from '../components/Contact';

const LandingPage: React.FC = () => {
  return (
      <div className='flex flex-col'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service/>} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
  );
};

export default LandingPage;
