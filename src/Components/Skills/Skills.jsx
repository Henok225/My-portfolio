import React, { useState, useEffect, useRef, useCallback } from 'react';

const SkillIcon = ({ icon, name, isDarkMode }) => (
    <div className={`flex flex-col items-center p-4 rounded-lg shadow-md transition-all duration-300 group ${isDarkMode ? 'bg-gray-700 hover:bg-orange-700' : 'bg-white hover:bg-orange-100'}`}>
      <div className={`text-4xl mb-2 transition-colors duration-300 ${isDarkMode ? 'text-orange-400 group-hover:text-white' : 'text-orange-600 group-hover:text-orange-800'}`}>
        {icon}
      </div>
      <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-200 group-hover:text-white' : 'text-gray-800 group-hover:text-orange-900'}`}>{name}</span>
    </div>
  );

  const Skills = ({ isDarkMode }) => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.15 }
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
  
    const skillsData = {
      Frontend: [
        { name: 'React', icon: '⚛️' },
        { name: 'JavaScript', icon: 'JS' },
        { name: 'HTML5', icon: '🌐' },
        { name: 'CSS3', icon: '🎨' },
        { name: 'Tailwind CSS', icon: '💨' },
      ],
      Backend: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Express.js', icon: '⚡' },
        { name: 'Python', icon: '🐍' },
        { name: 'Django', icon: '?️' },
      ],
      Databases: [
        { name: 'MongoDB', icon: '🍃' },
        { name: 'PostgreSQL', icon: '🐘' },
      ],
      Tools: [
        { name: 'Git', icon: '🐙' },
        { name: 'VS Code', icon: '💻' },
        { name: 'REST APIs', icon: '📡' },
      ],
    };
  
    return (
      <section id="skills" ref={sectionRef} className={`py-20 px-4 md:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-50' : 'bg-gray-100 text-gray-800'}`}>
        <div className="container mx-auto max-w-5xl">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'} transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            My Skills
          </h2>
          <div className={`space-y-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category}>
                <h3 className={`text-2xl font-semibold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {category}
                </h3>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                  {skills.map((skill) => (
                    <div key={skill.name} className="w-24 sm:w-28 lg:w-32">
                      <SkillIcon icon={skill.icon} name={skill.name} isDarkMode={isDarkMode} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Skills;
