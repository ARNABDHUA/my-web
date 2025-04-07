import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // For active section tracking
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'];

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-sm shadow-lg py-2' 
          : 'bg-black/70 backdrop-blur-sm py-3 sm:py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo/Brand with responsive sizing */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <span className="text-xl sm:text-2xl font-bold text-white font-display tracking-wider">
              ARNAB <span className="text-cyan-400">DHUA</span>
            </span>
            {scrolled && screenWidth < 640 && (
              <span className="ml-2 text-xs text-cyan-400 font-medium">
                Developer
              </span>
            )}
          </motion.div>

          {/* Desktop Menu with responsive sizing */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-1 lg:space-x-2">
              {navItems.map((item) => {
                const lowercaseItem = item.toLowerCase();
                const isActive = activeSection === lowercaseItem;
                
                return (
                  <motion.li 
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    className="relative"
                  >
                    <a 
                      href={`#${lowercaseItem}`}
                      className={`px-2 lg:px-3 py-2 rounded-md text-sm lg:text-base block transition-all duration-300 relative ${
                        isActive 
                          ? 'text-cyan-400 font-medium' 
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {item}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 rounded-full"
                          initial={false}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4"
            >
              <a
                href="#contact"
                className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white rounded-md text-sm transition-all duration-300 shadow-lg shadow-cyan-900/20"
              >
                Hire Me
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button with improved touch area */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen(!open)}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none transition-colors p-2 -mr-2"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu with enhanced animations */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <motion.div 
                className="bg-black/95 backdrop-blur-lg border border-gray-800 rounded-lg shadow-xl overflow-hidden"
                variants={{
                  open: { 
                    transition: {
                      staggerChildren: 0.07
                    }
                  }
                }}
                initial="closed"
                animate="open"
              >
                {/* Mobile menu items with enhanced styling */}
                <motion.ul>
                  {navItems.map((item, i) => {
                    const lowercaseItem = item.toLowerCase();
                    const isActive = activeSection === lowercaseItem;
                    
                    return (
                      <motion.li 
                        key={item}
                        variants={{
                          closed: { x: -20, opacity: 0 },
                          open: { x: 0, opacity: 1 }
                        }}
                        className={`border-b border-gray-800/80 last:border-0 transition-colors duration-300 ${
                          isActive ? 'bg-gray-900/70' : 'hover:bg-gray-900/40'
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        <a 
                          href={`#${lowercaseItem}`}
                          className={`block px-6 py-4 flex justify-between items-center ${
                            isActive 
                              ? 'text-cyan-400 font-medium' 
                              : 'text-gray-300'
                          }`}
                        >
                          <span>{item}</span>
                          {isActive && <span className="text-xs bg-cyan-900/30 text-cyan-400 px-2 py-1 rounded-full">Active</span>}
                        </a>
                      </motion.li>
                    );
                  })}
                </motion.ul>

                {/* Call-to-action in mobile menu */}
                <motion.div
                  variants={{
                    closed: { y: 20, opacity: 0 },
                    open: { y: 0, opacity: 1 }
                  }}
                  className="p-4 bg-gradient-to-r from-black to-gray-900"
                >
                  <a
                    href="#contact"
                    className="block w-full text-center py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white font-medium rounded-md transition-all duration-300 shadow-lg"
                    onClick={() => setOpen(false)}
                  >
                    Hire Me
                  </a>
                  
                  {/* Social links in mobile menu (optional) */}
                  <div className="mt-4 flex justify-center space-x-6">
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <span className="sr-only">GitHub</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Progress indicator at the top of navbar */}
      {scrolled && (
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600"
        />
      )}
    </motion.nav>
  );
};

export default Navbar;