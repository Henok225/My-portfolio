import React, { useState, useEffect, useRef, useCallback } from 'react';


const Contact = ({ isDarkMode }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(''); // 'loading', 'success', 'error'
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   setStatus('loading');
  
    //   // Basic validation
    //   if (!formData.name || !formData.email || !formData.message) {
    //     setStatus('error');
    //     setTimeout(() => setStatus(''), 3000); // Clear error after 3 seconds
    //     return;
    //   }
  
    //   try {
    //     // In a real application, you would send this to an API endpoint.
    //     // For this example, we'll simulate an API call.
    //     console.log('Form data submitted:', formData);
    //     await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay
    //     setStatus('success');
    //     setFormData({ name: '', email: '', message: '' }); // Clear form
    //     setTimeout(() => setStatus(''), 3000);
    //   } catch (error) {
    //     console.error('Form submission error:', error);
    //     setStatus('error');
    //     setTimeout(() => setStatus(''), 3000);
    //   }
    // };
  
    const socialLinks = [
      { name: 'LinkedIn', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
  <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.12 20H3.56V9h3.56v11zM5.34 7.52c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zM20.44 20h-3.56v-5.4c0-1.29-.03-2.95-1.8-2.95s-2.08 1.4-2.08 2.85V20h-3.56V9h3.42v1.5h.05c.48-.91 1.65-1.87 3.4-1.87 3.64 0 4.31 2.4 4.31 5.52V20z"/>
</svg>

      
        ), url: 'https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit' }, 
      { name: 'GitHub', icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.878 8.207 11.414.75.147 1.025-.323 1.025-.729 0-.361-.015-1.326-.021-2.592-3.337.724-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.758-1.334-1.758-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.492.998.108-.775.419-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.295-1.552 3.3-1.23 3.3-1.23.645 1.653.24 2.873.105 3.176.77.84 1.235 1.911 1.235 3.22 0 4.61-2.801 5.625-5.476 5.922.43.37.823 1.102.823 2.222v3.293c0 .409.275.874 1.03.727C20.565 21.82 24 17.346 24 12c0-6.627-5.373-12-12-12z" clipRule="evenodd" />
          </svg>
        ), url: 'https://github.com/Henok225' }, 
      { name: 'Email', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 4.5A2.25 2.25 0 0 1 3.75 2.25h16.5A2.25 2.25 0 0 1 22.5 4.5v15a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 19.5v-15Zm2.28.75a.75.75 0 0 0-.78 1.26l8.22 5.48a.75.75 0 0 0 .84 0l8.22-5.48a.75.75 0 1 0-.84-1.26L12 10.38 3.78 5.25Z" />
      </svg>
      
      
        ), url: 'mailto:henokzena650@gmail.com' },
    ];
  
    return (
      <section id="contact" className={`py-20 px-4 md:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-50' : 'bg-gray-100 text-gray-800'}`}>
        <div className="container mx-auto max-w-xl">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`}>
            Get In Touch
          </h2>
          <div className={`p-8 rounded-lg shadow-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <form name="contact" method="POST" data-netlify="true" className="space-y-6">
              
            <input type="hidden" name="form-name" value="contact" />
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md border focus:ring-2 focus:ring-orange-500 transition-colors duration-200 ${
                    isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'
                  }`}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md border focus:ring-2 focus:ring-orange-500 transition-colors duration-200 ${
                    isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'
                  }`}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md border focus:ring-2 focus:ring-orange-500 transition-colors duration-200 ${
                    isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'
                  }`}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full py-3 bg-orange-500 text-white text-lg font-semibold rounded-md shadow-lg hover:bg-orange-600 transition-all duration-300 ${
                  status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''
                }`}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="text-green-500 text-center mt-3">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-center mt-3">Failed to send message. Please fill all fields.</p>
              )}
            </form>
  
            <div className="flex justify-center space-x-6 mt-10">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-3xl transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-orange-500' : 'text-gray-600 hover:text-orange-600'}`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

export default Contact;