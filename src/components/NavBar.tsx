import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="flex flex-row relative justify-between p-4 md:p-8 items-center">
        <div className="text-[20px] md:text-[27px] text-Color3 font-roboto">
          <Link to="/" className="ml-4 md:ml-20 font-acme cursor-pointer">MUCYO</Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white text-xl focus:outline-none mr-4"
          onClick={toggleMenu}
        >
          Menu
        </button>

        {/* Desktop menu */}
        <div className="hidden lg:flex font-acme text-white text-[16px] xl:text-[20px] space-x-6 xl:space-x-10 mr-4 xl:mr-44 cursor-pointer items-center">
          <Link to="/" className="hover:text-Color3 transition-all duration-300 ease-in-out hover:scale-110 hover:underline">Home</Link>
          <Link to="/about" className="hover:text-Color3 transition-all duration-300 ease-in-out hover:scale-110 hover:underline">About Me</Link>
          <Link to="/service" className="hover:text-Color3 transition-all duration-300 ease-in-out hover:scale-110 hover:underline">Service</Link>
          <Link to="/skills" className="hover:text-Color3 transition-all duration-300 ease-in-out hover:scale-110 hover:underline">Skills</Link>
          <Link to="/projects" className="hover:text-Color3 transition-all duration-300 ease-in-out hover:scale-110 hover:underline">Projects</Link>
          <div className="relative">
            <div className="h-10 w-32 bg-Color3 absolute -right-36 top-1/2 -translate-y-1/2 rounded-lg " />
            <Link to="/contact" className="absolute -right-28 top-1/2 transform -translate-y-1/2 text-white transition-all duration-300 ease-in-out hover:scale-110 hover:underline z-20" style={{whiteSpace:'nowrap'}}>Contact!</Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-800 py-2">
          <Link to="/" className="block text-white px-4 py-2 hover:bg-gray-700" onClick={closeMenu}>Home</Link>
          <Link to="/about" className="block text-white px-4 py-2 hover:bg-gray-700" onClick={closeMenu}>About Me</Link>
          <Link to="/service" className="block text-white px-4 py-2 hover:bg-gray-700" onClick={closeMenu}>Service</Link>
          <Link to="/skills" className="block text-white px-4 py-2 hover:bg-gray-700" onClick={closeMenu}>Skills</Link>
          <Link to="/projects" className="block text-white px-4 py-2 hover:bg-gray-700" onClick={closeMenu}>Projects</Link>
          <Link to="/contact" className="block text-white px-4 py-2 hover:bg-gray-700" onClick={closeMenu}>Contact</Link>
          {/* <Link to="#" className="block text-white px-4 py-2 hover:bg-gray-700" onClick={closeMenu}>Contact!</Link> */}
        </div>
      )}
    </div>
  );
};

export default NavBar;
