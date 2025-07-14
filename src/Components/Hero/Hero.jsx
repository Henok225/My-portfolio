import React, { useState, useEffect, useRef, useCallback } from 'react';

const Hero = ({ isDarkMode }) => {
    const [taglineText, setTaglineText] = useState('');
    const fullTagline = "Crafting Digital Experiences";
    const typewriterSpeed = 100; // milliseconds per character
  
    useEffect(() => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < fullTagline.length) {
          setTaglineText(fullTagline.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, typewriterSpeed);
  
      return () => clearInterval(typingInterval);
    }, []);
  
    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <section id="home" className={`relative h-screen flex items-center justify-center overflow-hidden px-4 md:px-8 ${isDarkMode ? 'bg-gray-900 text-gray-50' : 'bg-gray-50 text-gray-800'}`}>
        {/* Subtle SVG Pattern Background */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="w-full h-full" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <path d="M0 100V0h100L0 100zm100 0V0H0l100 10" />
          </svg>
        </div>
  
        <div className="relative z-10 text-center space-y-6">
          <h1 className={`text-4xl md:text-6xl font-extrabold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Hi, I'm <span className="text-orange-500">Henok</span>
          </h1>
          <p className={`text-lg md:text-2xl font-semibold mb-4 animate-fade-in ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {taglineText} <span className="inline-block animate-blink">|</span>
          </p>
          <p className={`max-w-3xl mx-auto text-base md:text-lg mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I'm a passionate developer with expertise in creating dynamic and user-friendly web applications. I love building things that make a difference.
          </p>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-orange-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            View My Work
          </button>
        </div>
      </section>
    );
  };
  
  export default Hero;