import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import arnab_cv from "/imgs/Arnab_Dhua.pdf"

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-b from-[#0a192f] to-[#112240] py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-8 md:top-16 left-4 md:left-16 w-36 sm:w-48 md:w-72 h-36 sm:h-48 md:h-72 rounded-full bg-blue-400/5 blur-3xl"></div>
        <div className="absolute bottom-12 md:bottom-24 right-8 md:right-24 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 rounded-full bg-blue-300/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-cyan-400/5 blur-3xl"></div>
        
        {/* Improved Code Pattern Background */}
        <div className="absolute inset-0 opacity-3 hidden md:block">
          <div className="text-xs text-white whitespace-pre font-mono leading-tight overflow-hidden">
            {Array(50).fill(
              "const Portfolio = () => { return <div>Arnab Dhua</div> } export default Portfolio;"
            ).join("\n")}
          </div>
        </div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 lg:w-3/5 text-white"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-cyan-400 font-medium text-lg sm:text-xl mb-2 sm:mb-4"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-2 sm:mb-4 leading-tight"
            >
              Arnab Dhua
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-blue-200"
            >
              Full Stack Developer
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-lg"
            >
              I build responsive and user-friendly web applications using modern technologies like React, Node.js, and MongoDB.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex space-x-4 sm:space-x-6 mb-6 sm:mb-8"
            >
              <motion.a 
                whileHover={{ scale: 1.1, y: -5 }}
                href="https://github.com/ARNABDHUA" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FiGithub size={24} className="sm:w-7 sm:h-7" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -5 }}
                href="https://www.linkedin.com/in/arnab-dhua" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={24} className="sm:w-7 sm:h-7" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -5 }}
                href="mailto:arnabdhua74@gmail.com"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                aria-label="Email"
              >
                <FiMail size={24} className="sm:w-7 sm:h-7" />
              </motion.a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={arnab_cv} 
                download
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/30 flex items-center justify-center transition-all duration-300"
              >
                Resume <FiDownload className="ml-2" />
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-900/30 font-semibold rounded-lg shadow-lg flex items-center justify-center transition-all duration-300"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md mx-auto md:mx-0 md:w-2/5 lg:w-2/5 mt-8 md:mt-0"
          >
            <div className="relative">
              {/* Enhanced Animated Code Editor UI */}
              <motion.div 
                initial={{ y: 20 }}
                animate={{ y: [20, 0, 20] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-[#1e2d4d] rounded-xl shadow-2xl overflow-hidden border border-blue-800"
              >
                <div className="bg-[#162137] p-2 flex items-center space-x-2 border-b border-blue-900">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                  <div className="text-xs text-gray-400 ml-2 flex-1 truncate">arnab-portfolio.jsx</div>
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm text-gray-300 overflow-x-auto">
                  <div className="text-gray-500">// Welcome to my portfolio</div>
                  <div><span className="text-pink-400">const</span> <span className="text-blue-400">developer</span> <span className="text-white">=</span> <span className="text-orange-400">{`{`}</span></div>
                  <div className="pl-4"><span className="text-green-400">name</span><span className="text-white">:</span> <span className="text-yellow-300">'Arnab Dhua'</span><span className="text-white">,</span></div>
                  <div className="pl-4"><span className="text-green-400">skills</span><span className="text-white">:</span> <span className="text-orange-400">[</span></div>
                  <div className="pl-8"><span className="text-yellow-300">'React'</span><span className="text-white">,</span></div>
                  <div className="pl-8"><span className="text-yellow-300">'Node.js'</span><span className="text-white">,</span></div>
                  <div className="pl-8"><span className="text-yellow-300">'MongoDB'</span><span className="text-white">,</span></div>
                  <div className="pl-8"><span className="text-yellow-300">'TypeScript'</span></div>
                  <div className="pl-4"><span className="text-orange-400">]</span><span className="text-white">,</span></div>
                  <div className="pl-4"><span className="text-green-400">loves</span><span className="text-white">:</span> <span className="text-yellow-300">'Building awesome web apps'</span></div>
                  <div><span className="text-orange-400">{`}`}</span><span className="text-white">;</span></div>
                  <div className="mt-4"><span className="text-pink-400">function</span> <span className="text-blue-400">connectWithMe</span><span className="text-white">() {`{`}</span></div>
                  <div className="pl-4"><span className="text-pink-400">return</span> <span className="text-yellow-300">'Let\'s create something amazing!'</span><span className="text-white">;</span></div>
                  <div><span className="text-white">{`}`}</span></div>
                </div>
              </motion.div>
              
              {/* Enhanced Decorative Elements */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-20 sm:w-32 h-20 sm:h-32 bg-cyan-400/20 rounded-full blur-xl"
              />
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-16 sm:w-24 h-16 sm:h-24 bg-blue-500/20 rounded-full blur-xl"
              />
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.5 }}
                className="absolute top-1/2 right-0 transform translate-x-4 sm:translate-x-6 -translate-y-1/2 hidden sm:block"
              >
                <div className="w-2 sm:w-4 h-14 sm:h-20 bg-gradient-to-b from-cyan-400/30 to-transparent rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-cyan-400 text-xs sm:text-sm mb-2">Scroll Down</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-cyan-400 rounded-full flex justify-center p-1"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-cyan-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;