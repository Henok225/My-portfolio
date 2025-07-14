import React, { useState, useEffect, useRef, useCallback } from 'react';
import { assets } from '../../assets/assets';


const About = ({ isDarkMode }) => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once visible
          }
        },
        { threshold: 0.2 } // Trigger when 20% of the section is visible
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);
  
    return (
      <section id="about" ref={sectionRef} className={`py-20 px-4 md:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 text-gray-50' : 'bg-white text-gray-800'}`}>
        <div className="container mx-auto max-w-4xl">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'} transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            About Me
          </h2>
          <div className={`flex flex-col md:flex-row items-center md:items-start gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="md:w-1/3 flex justify-center">
              <img
                src={assets.myprofile_image} // Placeholder image
                alt="Your Name"
                className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-xl border-4 border-orange-500 transition-transform duration-300 hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x300/a8a8a8/ffffff?text=Image+Error"; }}
              />
            </div>
            <div className="md:w-2/3 text-lg space-y-6">
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
  Hi, I’m Henok — a physics student and passionate fullstack developer. I started coding in high school and have since built several real-world web apps using the MERN stack.
</p>
<p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
  I enjoy solving problems, learning new technologies, and building clean, user-friendly interfaces that work smoothly. I believe in writing maintainable code and growing through real projects.
</p>
<p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
  Outside of tech, I’m deeply interested in science and innovation, and I love sharing what I learn. I’m always open to meaningful collaborations and new challenges.
</p>

            </div>
          </div>
        </div>
      </section>
    );
  };

export default About;