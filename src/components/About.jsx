import React from 'react';
import { motion } from 'framer-motion';
import arnab from "/imgs/arn.jpg"
import arnab_cv from "/imgs/Arnab_Dhua.pdf"
import { FaDownload, FaEnvelope, FaGraduationCap, FaBriefcase, FaLaptopCode, FaUserTie } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-gradient-to-b from-blue-950 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-10 md:mb-16"
        >
          <motion.h2 
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            About <span className="text-blue-400">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 md:w-20 h-1 bg-blue-500 mx-auto mb-8" 
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Image Side - Now with rounded image and smaller size */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-4/12"
          >
            <div className="relative max-w-xs mx-auto">
              {/* Main image - now rounded and smaller */}
              <div className="relative z-10 rounded-full overflow-hidden shadow-2xl border-4 border-blue-500 w-48 h-48 md:w-64 md:h-64 mx-auto">
                <img 
                  src={arnab} 
                  alt="Arnab Dhua" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Background elements - adjusted for rounded image */}
              <motion.div 
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-5 left-5 md:top-8 md:left-8 w-48 h-48 md:w-64 md:h-64 bg-blue-600 rounded-full -z-10 mx-auto"
              ></motion.div>
              <div className="absolute right-5 bottom-5 md:right-8 md:bottom-8 w-48 h-48 md:w-64 md:h-64 bg-gray-800 rounded-full -z-20 mx-auto"></div>
              
              {/* Floating icons - repositioned */}
              <motion.div 
                className="absolute -right-2 top-1/3 bg-blue-500 p-2 md:p-3 rounded-full shadow-lg"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaLaptopCode className="text-xl md:text-2xl text-white" />
              </motion.div>
              <motion.div 
                className="absolute -left-2 top-2/3 bg-blue-700 p-2 md:p-3 rounded-full shadow-lg"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaUserTie className="text-xl md:text-2xl text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-8/12 mt-8 lg:mt-0"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 text-center lg:text-left">Software Developer </h3>
            <p className="text-gray-300 mb-4 md:mb-6 text-base md:text-lg text-center lg:text-left">
            I'm a passionate software developer skilled in full-stack web development with expertise in React.js, Node.js, and MongoDB. I’ve built responsive applications like an E-Commerce platform and a College Management System. My internship at Celebal Technologies enhanced my skills in real-world project development and collaboration. I bring a strong foundation in DBMS, OOP, and web security, with hands-on experience using modern tools and frameworks like Tailwind CSS, JWT, and REST APIs.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              <InfoItem icon={<FaEnvelope />} label="Email" value="arnabdhua74@gmail.com" />
              <InfoItem icon={<FaGraduationCap />} label="Degree" value="MCA (Pursuing)" />
              <InfoItem icon={<FaBriefcase />} label="Experience" value="Internship at Celebal" />
              <InfoItem icon={<FaLaptopCode />} label="Freelance" value="Available" />
            </div>
            
            <p className="text-gray-300 mb-6 md:mb-8 text-center lg:text-left">
              With a background in Mathematics from my BSc degree and Education from my B.Ed, I bring a unique 
              perspective to problem-solving and creating intuitive user experiences. I'm constantly learning and 
              expanding my skills to stay at the forefront of web development technologies.
            </p>
            
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start mb-6 md:mb-8">
              <SkillBadge>React</SkillBadge>
              <SkillBadge>Node.js</SkillBadge>
              <SkillBadge>MongoDB</SkillBadge>
              <SkillBadge>Express</SkillBadge>
              <SkillBadge>JavaScript</SkillBadge>
              <SkillBadge>TypeScript</SkillBadge>
              <SkillBadge>Tailwind CSS</SkillBadge>
            </div>
            
            <div className="text-center lg:text-left">
              <motion.a
                href={arnab_cv}
                download
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full shadow-lg transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="group-hover:animate-bounce" /> Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-20"
        >
          <StatCard number={1} text="Years of Experience" />
          <StatCard number={4} text="Projects Completed" />
          <StatCard number={1} text="Happy Clients" />
          <StatCard number={1} text="Internships" />
        </motion.div>
      </div>
    </section>
  );
};

// Helper Components
const InfoItem = ({ icon, label, value }) => (
  <motion.div 
    whileHover={{ x: 5 }}
    className="flex items-center gap-2 md:gap-3"
  >
    <div className="text-blue-500 text-lg md:text-xl">{icon}</div>
    <div>
      <span className="text-gray-400 text-sm md:text-base">{label}:</span>
      <span className="text-white font-medium ml-1 md:ml-2 text-sm md:text-base">{value}</span>
    </div>
  </motion.div>
);

const SkillBadge = ({ children }) => (
  <motion.span
    whileHover={{ scale: 1.1 }}
    className="bg-blue-900 text-blue-200 py-1 px-3 md:py-2 md:px-4 rounded-full text-xs md:text-sm font-medium"
  >
    {children}
  </motion.span>
);

const StatCard = ({ number, text }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-gray-800 border border-blue-900 p-4 md:p-6 rounded-xl text-center"
  >
    <motion.h3 
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-3xl md:text-4xl font-bold text-blue-400 mb-1 md:mb-2"
    >
      <Counter end={number} />+
    </motion.h3>
    <p className="text-gray-300 text-sm md:text-base">{text}</p>
  </motion.div>
);

// Animation counter
const Counter = ({ end }) => {
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [end]);
  
  return count;
};

export default About;