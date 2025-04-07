import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaLock, FaPython, FaJava, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiExpress, SiMongodb, SiTailwindcss, SiBootstrap, SiPostman } from 'react-icons/si';

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const skillsData = [
    {
      category: "Frontend Technologies",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, level: 90 },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, level: 85 },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, level: 85 },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600 w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" />, level: 80 },
        { name: "React.js", icon: <FaReact className="text-cyan-400 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, level: 85 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, level: 90 },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, level: 85 },
      ]
    },
    {
      category: "Backend Technologies",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, level: 80 },
        { name: "Express.js", icon: <SiExpress className="text-gray-100 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, level: 80 },
        { name: "REST API", icon: <FaDatabase className="text-blue-300 w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" />, level: 85 },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, level: 80 },
        { name: "SQL", icon: <FaDatabase className="text-blue-400 w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" />, level: 75 },
        { name: "JWT Auth", icon: <FaLock className="text-yellow-300 w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" />, level: 80 },
      ]
    },
    {
      category: "Others",
      skills: [
        { name: "Python", icon: <FaPython className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, level: 75 },
        { name: "Java", icon: <FaJava className="text-red-500 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, level: 60 },
        { name: "Git", icon: <FaGitAlt className="text-orange-600 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, level: 85 },
        { name: "Postman", icon: <SiPostman className="text-orange-500 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, level: 90 },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-blue-950 to-gray-900 relative overflow-hidden ">
      {/* Background Elements - Contained within section */}
      <div className="absolute top-0 right-0 w-24 sm:w-32 md:w-48 lg:w-64 h-24 sm:h-32 md:h-48 lg:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 sm:w-40 md:w-60 lg:w-80 h-32 sm:h-40 md:h-60 lg:h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-16 sm:w-20 md:w-32 lg:w-40 h-16 sm:h-20 md:h-32 lg:h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
      
      {/* Floating particles effect - confined to section */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-blue-400/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
        >
          <motion.h2 
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4"
          >
            My <span className="text-blue-400">Skills</span>
          </motion.h2>
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-10 sm:w-12 md:w-16 lg:w-20 h-0.5 sm:h-1 bg-blue-500 mx-auto mb-3 sm:mb-4 md:mb-5 lg:mb-6"
          />
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto">
            Here are my technical skills and proficiency levels across various technologies.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 w-full"
        >
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ translateY: -5 }}
              className="bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-lg p-4 sm:p-5 md:p-6 border-t-2 border-blue-500 hover:shadow-blue-500/20 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-300 mb-3 sm:mb-4 md:mb-5">{category.category}</h3>
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-1 md:space-y-2">
                    <div className="flex items-center">
                      <div className="mr-2 md:mr-3 bg-gray-900/80 p-1 sm:p-1.5 md:p-2 rounded-md sm:rounded-lg">
                        {skill.icon}
                      </div>
                      <span className="text-white font-medium text-xs sm:text-sm md:text-base">{skill.name}</span>
                      <span className="ml-auto text-blue-300 text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-900/80 rounded-full h-1 sm:h-1.5 md:h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.1 * idx }}
                        className="h-1 sm:h-1.5 md:h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-400"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Key Technologies Summary - improved width control */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 bg-gray-800/50 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-xl border border-gray-700 mx-auto w-full max-w-4xl"
        >
          <h4 className="text-sm sm:text-base md:text-lg font-semibold text-blue-300 mb-3 sm:mb-4 text-center">Key Technologies</h4>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              { icon: <FaReact className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />, text: "React" },
              { icon: <FaNodeJs className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />, text: "Node.js" },
              { icon: <SiMongodb className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />, text: "MongoDB" },
              { icon: <SiExpress className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />, text: "Express" },
              { icon: <SiTypescript className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />, text: "TypeScript" },
              { icon: <SiTailwindcss className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />, text: "Tailwind" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                className="flex items-center bg-gray-900/80 text-blue-200 py-1 px-2 sm:px-3 md:px-4 rounded-full text-xs sm:text-sm font-medium"
              >
                {item.icon} {item.text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;