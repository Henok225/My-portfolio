import React, { useState, useEffect, useRef, useCallback } from 'react';
import Navbar from '../Navbar/Navbar';


const Footer = ({ isDarkMode }) => {
    return (
      <footer className={`py-8 px-4 md:px-8 text-center ${isDarkMode ? 'bg-gray-900 text-gray-400' : 'bg-gray-800 text-gray-300'}`}>
        <div className="container mx-auto">
        
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Henok Zena. All rights reserved.
          </p>
        </div>

      </footer>
    );
  };

export default Footer;

