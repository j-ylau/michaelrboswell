// components/Navbar.js
import React from 'react';

const Navbar = () => {
  // Dummy function for scrolling to sections. You'll need to implement this functionality.
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10 top-0 left-0">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* Website Logo */}
              <a href="#" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">Michael R. Boswell</span>
              </a>
            </div>
          </div>
          {/* Primary Navbar items */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="#" className="py-4 px-2 text-gray-500 font-semibold" onClick={() => scrollToSection('home')}>Home</a>
            <a href="#" className="py-4 px-2 text-gray-500 font-semibold" onClick={() => scrollToSection('about')}>About</a>
            <a href="#" className="py-4 px-2 text-gray-500 font-semibold" onClick={() => scrollToSection('services')}>Services</a>
            <a href="#" className="py-4 px-2 text-gray-500 font-semibold" onClick={() => scrollToSection('contact')}>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
