import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaCalendar, FaMedal, FaUniversity } from 'react-icons/fa';

const Education = () => {
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

  const educationData = [
    {
      id: 1,
      degree: "Master of Computer Applications (MCA)",
      institution: "Techno Main SaltLake",
      period: "2023 - 2025",
      score: "CGPA: 8.01"
    },
    {
      id: 2,
      degree: "Bachelor of Education (B.ED)",
      institution: "WBUTTEPA",
      period: "2021 - 2023",
      score: "CGPA: 9.06"
    },
    {
      id: 3,
      degree: "Bachelor of Science (B.Sc) Math",
      institution: "Bankura University",
      period: "2018 - 2021",
      score: "CGPA: 8.33"
    },
    {
      id: 4,
      degree: "Class XII (WBCHSE)",
      institution: "Kenduadihi High School",
      period: "2018",
      score: "81.8%"
    },
    {
      id: 5,
      degree: "Class X (WBBSE)",
      institution: "Kenduadihi High School",
      period: "2016",
      score: "85.14%"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const glowVariants = {
    initial: { scale: 1, opacity: 0.5 },
    animate: {
      scale: 1.2,
      opacity: 0.8,
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <section id="education" className="py-24 bg-gradient-to-b from-blue-950 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial="initial"
          animate="animate"
          variants={glowVariants}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
        ></motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={glowVariants}
          className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl"
        ></motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            ...glowVariants,
            animate: {
              ...glowVariants.animate,
              transition: {
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }
          }}
          className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"
        ></motion.div>
       
        {/* Education Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="text-xs text-white whitespace-pre font-mono leading-tight overflow-hidden">
            {Array(80).fill(
              "education(learning, growing, developing);"
            ).join("\n")}
          </div>
        </div>
      </div>
     
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white font-display mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="relative"
          >
            {/* Timeline line for desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-500 opacity-50"></div>
           
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className="mb-12 md:mb-24 relative"
              >
                <div className="flex md:items-center flex-col md:flex-row">
                  {/* Timeline Dot for desktop */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/20 z-10"
                  >
                    <FaGraduationCap size={22} />
                  </motion.div>
                 
                  {/* Mobile version icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="md:hidden flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/20 mb-4"
                  >
                    <FaGraduationCap size={22} />
                  </motion.div>
                 
                  {/* Content - alternating sides for desktop */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <motion.div
                      whileHover={{
                        y: -5,
                        boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(147, 51, 234, 0.1)"
                      }}
                      className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 border-t-4 border-blue-500 hover:border-purple-500 transition-all duration-300"
                    >
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <div className="mt-3 flex items-center text-gray-300 text-sm mb-3">
                        <FaUniversity className={`${index % 2 === 0 ? 'md:ml-2 md:order-2' : 'mr-2'} text-blue-400`} />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center text-gray-300 text-sm mb-2">
                        <FaCalendar className={`${index % 2 === 0 ? 'md:ml-2 md:order-2' : 'mr-2'} text-blue-400`} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center text-gray-300 text-sm">
                        <FaMedal className={`${index % 2 === 0 ? 'md:ml-2 md:order-2' : 'mr-2'} text-blue-400`} />
                        <span>{edu.score}</span>
                      </div>
                    </motion.div>
                  </div>
                 
                  {/* Empty div for alternating layout */}
                  {index % 2 === 0 ? <div className="hidden md:block w-1/2"></div> : <div className="hidden md:block w-1/2"></div>}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;