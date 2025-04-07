import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendar, FaMapMarkerAlt, FaBriefcase, FaStar } from 'react-icons/fa';

const Experience = () => {
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

  const experienceData = [
    {
      id: 1,
      title: "Intern Frontend Developer",
      company: "Celebal Technologies",
      location: "Remote",
      period: "May 2024 - July 2024",
      description: "Gained experience in real-world projects, team collaboration, and software development methodologies. Developed a Spotify 2.0 Clone Music App with enhanced features including music playlists, search functionality, player controls, albums, genre options, and a responsive user interface using React JS and Tailwind CSS.",
      skills: ["React", "Tailwind CSS", "JavaScript", "Team Collaboration", "Responsive Design"]
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-blue-950 to-gray-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl"></div>
     
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`
            }}
          ></div>
        ))}
      </div>
     
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white font-display mb-4 tracking-tight">
            Work <span className="text-blue-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-blue-200/80 max-w-2xl mx-auto">
            My professional journey and work experiences that have shaped my expertise.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="relative pl-8 border-l-2 border-blue-400 before:content-[''] before:w-4 before:h-4 before:bg-blue-400 before:absolute before:rounded-full before:-left-[9px] before:top-0 before:z-10"
          >
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="mb-12 relative before:content-[''] before:w-3 before:h-3 before:bg-blue-950 before:border-2 before:border-blue-400 before:absolute before:rounded-full before:-left-[24px] before:top-0"
              >
                <div className="bg-gradient-to-br from-gray-800/80 to-blue-900/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border-t-4 border-blue-400 hover:shadow-blue-500/20 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                    <div className="mb-4 md:mb-0">
                      <div className="flex items-center">
                        <FaStar className="text-blue-400 mr-2" />
                        <h3 className="text-xl md:text-2xl font-bold text-white">{exp.title}</h3>
                      </div>
                      <h4 className="text-lg font-semibold text-blue-300 mt-1">{exp.company}</h4>
                    </div>
                    <div className="md:text-right">
                      <div className="flex items-center text-gray-300 mb-2 md:justify-end">
                        <FaCalendar className="mr-2 text-blue-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-300 md:justify-end">
                        <FaMapMarkerAlt className="mr-2 text-blue-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                 
                  <div className="bg-blue-950/30 p-4 rounded-lg border-l-2 border-blue-400 mb-4">
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                 
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-800/50 text-blue-200 text-sm font-medium px-4 py-1.5 rounded-full border border-blue-700/50 hover:bg-blue-700/50 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
         
          {/* Project Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center mt-12"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 cursor-pointer">
              <FaBriefcase className="mr-2 text-blue-200" />
              <span className="font-medium">Check out my projects section for more work examples!</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Add global CSS for the floating animation */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-100vh) translateX(100px); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Experience;