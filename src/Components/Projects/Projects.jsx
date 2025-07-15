import React, { useState, useEffect, useRef, useCallback } from 'react';
import { assets } from '../../assets/assets';
import LoadingSpinner from '../loader/LoadingSpinner';

const ProjectCard = ({ project, isDarkMode }) => {


  

    return (
      <div className={`relative rounded-lg overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105 group ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          style={{height:'300px', width:'100%'}}
          className=" object-cover object-center"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/cccccc/333333?text=Project+Image"; }}
        />
        {/* Overlay for details on hover */}
        <div className={`absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-sm text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {project.tags.map(tag => (
              <span key={tag} className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex space-x-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-orange-600 text-white text-sm font-semibold rounded-full hover:bg-orange-700 transition-colors duration-200"
            >
              Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-600 text-white text-sm font-semibold rounded-full hover:bg-gray-700 transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    );
  };

  const Projects = ({ isDarkMode }) => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [loading, setLoading] = useState(true);
  
    const [viewAllProject, setViewAllProject] = useState(false);
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
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
  
    const projectsData = [
      {
        id: 1,
        title: 'FoodieXpress, food delivery website',
        description: 'A full-stack food delivery website built using the MERN stack (MongoDB, Express.js, React.js, Node.js), featuring user and admin authentication, order management, and responsive design',
        image: assets.foodiexpress_image, 
        tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
        liveLink: 'https://foodi-express.netlify.app', 
        githubLink: 'https://github.com/Henok225/FoodieXpress?tab=readme-ov-file',
      },
      {
        id: 2,
        title: 'FOCAL, Physics club website in Addis Ababa University',
        description: 'A responsive website for the Focal Physics Club at Addis Ababa University',
        image: assets.focal_image,
        tags: ['React', 'Node.js', 'Express.js', 'mongoDB', 'Firebase', 'Tailwind CSS'],
        liveLink: 'https://focalclub.netlify.app',
        githubLink: 'https://github.com/Henok225/FOCAL-club/blob/main',
      },
      {
        id: 3,
        title: 'Spark Study',
        description: 'Spark Study is a modern educational platform designed to help students learn more effectively through structured lessons, interactive quizzes, and smart progress tracking.',
        image: assets.commingsoon,
        tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
        liveLink: '#',
        githubLink: 'https://github.com/Henok225/Spark-Study',
      },
    ];

    const projectsDataAll = [
      {
        id: 4,
        title: 'Simple quiz app',
        description: 'A simple quiz app that allows users to take quizzes on various topics, with features like score tracking and question randomization.',
        image: assets.myquizapp,
        tags: ['HTML', 'JavaScript', 'CSS'],
        liveLink: 'https://myquizzapp.netlify.app', 
        githubLink: 'https://github.com/Henok225/myquizzapp',
      },
      {
        id: 5,
        title: 'My first e-commerce website',
        description: 'A simple e-commerce website that showcases products and allows users to add items to a cart.',
        image: assets.myfirst_ecommerce,
        tags: ['HTML', 'JavaScript', 'CSS'],
        liveLink: 'https://henokwebdev.netlify.app/projects/my-ecommerce%20webs/index.html', 
        githubLink: ''
      },
      {
        id: 6,
        title: 'Age Calculator',
        description: 'A simple age calculator that allows users to input their birth date and calculates their age in years, months, and days.',
        image: assets.age_calculator,
        tags: ['HTML', 'JavaScript', 'CSS'],
        liveLink: 'https://henokwebdev.netlify.app/projects/challenge-4-age-calc/',
        githubLink: 'https://github.com/Henok225/Challenge-4-age-calc'
      },
      {
        id: 7,
        title: 'Multi-step Form',
        description: 'A multi-step form that guides users through a series of questions, collecting information in a structured way.',
        image: assets.multistep_form,
        tags: ['HTML', 'JavaScript', 'CSS'],
        liveLink: 'https://henokwebdev.netlify.app/projects/challenge-3-multi-step-form/',
        githubLink: 'https://github.com/Henok225/Challenge-2-html-css-js'
      },
      {
        id: 8,
        title: 'Tic Tac Toe Game',
        description: 'A simple Tic Tac Toe game that allows users to play against another player.',
        image: assets.tictactoe,
        tags: ['HTML', 'JavaScript', 'CSS'],
        liveLink: 'https://henokwebdev.netlify.app/projects/tiktak%20game%20by%20js/index.html',
        githubLink: '#'
      },
    ]
  
    return (
      <section id="projects" ref={sectionRef} className={`py-20 px-4 md:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 text-gray-50' : 'bg-white text-gray-800'}`}>
        <div className="container mx-auto max-w-6xl">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'} transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            My Projects
          </h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {projectsData.map(project => (
              <ProjectCard key={project.id} project={project} isDarkMode={isDarkMode} />
            ))}

            {/* View all projects */}
            {viewAllProject ? 
            <>
            {
              projectsDataAll ?
              projectsDataAll.map(project => (
              <ProjectCard key={project.id} project={project} isDarkMode={isDarkMode} />
            ))
            :<LoadingSpinner />
            }
            </>
            
            :null}
          </div>
          <div className="text-center mt-12">
            <button
              className="px-8 py-3 bg-orange-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
              onClick={() => setViewAllProject(!viewAllProject)}
            >
              {viewAllProject ? 
                'View Less Projects' :
                ' View All Projects'
            }
            </button>
          </div>
        </div>
      </section>
    );
  };

export default Projects;