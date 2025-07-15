import React, { useState, useEffect, useRef, useCallback } from 'react';


import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SuccessMessage from './Components/Contact/ContactSuccess';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to light mode

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };


  

  useEffect(() => {
    // Apply dark mode class to HTML body
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`font-sans ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <BrowserRouter>

      <Routes>
        <Route path="/" element={
          <>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Hero isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
          </>
        } />
        <Route path="/projects" element={<Projects isDarkMode={isDarkMode} />} />
        <Route path="/contact-successful" element={<SuccessMessage message="Your message has been sent successfully. I look forward to reviewing it and will be in touch soon." />} />
      </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App


