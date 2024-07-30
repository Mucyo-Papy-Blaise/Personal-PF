import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import NavBar from './components/NavBar';
import LandingPage from './pages/landingPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Service from './pages/ServicePage'
import SkillsPage from './pages/SkillsPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import ServicePage from './pages/ServicePage';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/Service" element={<Service/>} />
        <Route path="/service" element={<ServicePage/>} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
