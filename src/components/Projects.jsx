import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';
import ecom from "/imgs/ecom.jpg";
import spo from "/imgs/spo.png";
import ecoll from "/imgs/ecoll.png";

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "A responsive E-Commerce platform with product listing, shopping cart, filtering options, and smooth navigation for an enhanced user experience.",
      image: ecom,
      link: "https://mobifyx.netlify.app",
      github: "https://github.com/ARNABDHUA/mobify",
      tech: [
        { name: "React", icon: <FaReact size={20} className="text-cyan-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={20} className="text-cyan-500" /> },
      ],
    },
    {
      id: 2,
      title: "Ecollege Management System",
      description:
        "A College Management System with multiple roles, featuring API data fetching, search, filters, and add-to-cart for products. Includes systems for teachers to schedule classes and students to access materials.",
      image: ecoll,
      link: "https://e-college-nu.vercel.app/",
      github: "https://github.com/ARNABDHUA/MajorProject",
      tech: [
        { name: "React", icon: <FaReact size={20} className="text-cyan-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={20} className="text-cyan-500" /> },
        { name: "MongoDB", icon: <SiMongodb size={20} className="text-green-400" /> },
        { name: "Express", icon: <SiExpress size={20} className="text-gray-100" /> },
        { name: "Node.js", icon: <FaNodeJs size={20} className="text-green-500" /> },
      ],
    },
    {
      id: 3,
      title: "Spotify Clone",
      description:
        "A Spotify 2.0 Clone Music App with enhanced features including music playlists, search functionality, player controls, albums, genre options, and a responsive UI.",
      image: spo,
      link: "https://arnab-spotify-clone.netlify.app",
      github: "https://github.com/ARNABDHUA/spotify-react",
      tech: [
        { name: "React", icon: <FaReact size={20} className="text-cyan-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={20} className="text-cyan-500" /> },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-blue-950 to-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>

        <div className="absolute inset-0 opacity-5">
          <div className="text-xs text-white whitespace-pre font-mono leading-tight overflow-hidden">
            {Array(80)
              .fill("<div className='project'>Arnab Dhua Portfolio</div>")
              .join('\n')}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white font-display mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Check out some of my recent work and personal projects.
          </p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-gradient-to-br from-primary to-primary-light rounded-xl overflow-hidden shadow-2xl border border-gray-700 group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />

                {/* Tech Icons */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-primary to-transparent">
                  <div className="flex flex-wrap gap-2 bg-blue-900 rounded-2xl">
                    {project.tech.map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex items-center bg-primary/80 px-2 py-1 rounded text-xs text-white"
                      >
                        <span className="mr-1">{tech.icon}</span>
                        {tech.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-6 h-24 overflow-hidden">{project.description}</p>

                {/* Buttons */}
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition-colors text-sm"
                  >
                    <FiExternalLink className="mr-2" /> Live Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
                  >
                    <FiGithub className="mr-2" /> Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
