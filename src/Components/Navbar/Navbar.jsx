import React, { useState, useEffect, useRef, useCallback } from 'react';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu
    const [isScrolled, setIsScrolled] = useState(false); // State for sticky header background
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50); // Set true if scrolled down more than 50px
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const navLinks = [
      { name: 'Home', id: 'home' },
      { name: 'About', id: 'about' },
      { name: 'Projects', id: 'projects' },
      { name: 'Skills', id: 'skills' },
      { name: 'Contact', id: 'contact' },
    ];

    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? isDarkMode ? 'bg-gray-800 bg-opacity-90 backdrop-blur-sm shadow-lg' : 'bg-white bg-opacity-90 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo/Name */}
          <div className="text-3xl font-bold text-orange-500 cursor-pointer" onClick={() => scrollToSection('home')}>
            Henok Zena
          </div>
  
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                className={`text-lg font-medium relative group ${isDarkMode ? 'text-gray-200 hover:text-orange-400' : 'text-gray-700 hover:text-orange-600'}`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full ${isDarkMode ? 'bg-orange-400' : 'bg-orange-600'}`}></span>
              </a>
            ))}
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                
                <circle cx="12" cy="12" r="5" />
                
                <line x1="12" y1="1" x2="12" y2="4" />
                <line x1="12" y1="20" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
                <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="4" y2="12" />
                <line x1="20" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
                <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
              </svg>
              
              )}
            </button>
          </div>
  
          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-gray-800 focus:outline-none ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}
              aria-label="Open menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
  
        {/* Mobile Navigation Links */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-t border-gray-700`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.id); setIsOpen(false); }}
                className={`block px-3 py-2 rounded-md text-base font-medium ${isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => { toggleDarkMode(); setIsOpen(false); }}
              className={`w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center justify-between ${
                isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              Toggle Dark Mode
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                
                <circle cx="12" cy="12" r="5" />
                
                <line x1="12" y1="1" x2="12" y2="4" />
                <line x1="12" y1="20" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
                <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="4" y2="12" />
                <line x1="20" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
                <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
              </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
    );
  };

  export default Navbar;