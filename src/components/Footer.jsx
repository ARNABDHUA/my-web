import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const technologies = [
    { icon: <FaReact />, name: 'React' },
    { icon: <SiTailwindcss />, name: 'Tailwind' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiExpress />, name: 'Express' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <FaDatabase />, name: 'SQL' },
    { icon: <FaCode />, name: 'TypeScript' }
  ];

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Tech Stack Banner */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-8 bg-blue-950"
      >
        <div className="container mx-auto px-4">
          <h3 className="text-center text-2xl font-bold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center"
              >
                <div className="text-4xl text-blue-400 mb-2">{tech.icon}</div>
                <span className="text-sm">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <motion.h2 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-4"
            >
              Arnab <span className="text-blue-400">Dhua</span>
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              transition={{ duration: 0.5 }}
              className="h-1 bg-blue-500 mb-4" 
            />
            <p className="text-gray-400 mb-6">
              Full Stack Developer specializing in MERN stack with a passion for creating responsive and intuitive user interfaces. Currently pursuing MCA at Techno Main SaltLake.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://github.com/ARNABDHUA" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/arnab-dhua" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="mailto:arnabdhua74@gmail.com" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                </svg>
              </motion.a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <motion.h2 
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-4"
            >
              Quick Links
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              transition={{ duration: 0.5 }}
              className="h-1 bg-blue-500 mb-4" 
            />
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="text-blue-500 mr-2">›</span> {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <motion.h2 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-4"
            >
              Newsletter
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              transition={{ duration: 0.5 }}
              className="h-1 bg-blue-500 mb-4" 
            />
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates about my latest projects and tech articles.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 text-white border border-gray-700 rounded-l-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="py-6 bg-gray-950 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400"
        >
          © {currentYear} Arnab Dhua. All rights reserved. Made with 
          <motion.span 
            className="inline-block text-red-500 mx-1"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, repeatDelay: 1 }}
          >
            <FaHeart />
          </motion.span> 
          using React & Tailwind CSS
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;