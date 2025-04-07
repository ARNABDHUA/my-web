import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/mzzekryz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setFormStatus({
          submitted: true,
          error: false,
          message: 'Thank you! Your message has been sent successfully.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus({
          submitted: true,
          error: true,
          message: 'Oops! There was a problem sending your message. Please try again.'
        });
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Oops! There was a problem sending your message. Please try again.'
      });
    }
    
    // Reset form status after 3 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        error: false,
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    { icon: <FaEnvelope className="text-2xl" />, text: 'arnabdhua74@gmail.com', link: 'mailto:arnabdhua74@gmail.com' },
    { icon: <FaPhone className="text-2xl" />, text: '(+91)70015 59406', link: 'tel:+917001559406' },
    { icon: <FaLinkedin className="text-2xl" />, text: 'linkedin.com/in/arnab-dhua', link: 'https://www.linkedin.com/in/arnab-dhua' },
    { icon: <FaGithub className="text-2xl" />, text: 'github.com/ARNABDHUA', link: 'https://github.com/ARNABDHUA' },
    { icon: <FaMapMarkerAlt className="text-2xl" />, text: 'Techno Main SaltLake', link: 'https://maps.google.com/?q=Techno+Main+SaltLake' },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-blue-950">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Get In <span className="text-blue-400">Touch</span>
          </motion.h2>
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-1 bg-blue-500 mx-auto mb-8" 
          />
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm actively looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3 bg-gray-800 p-8 rounded-xl shadow-2xl border border-blue-900"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ x: 10, color: '#60a5fa' }}
                >
                  <div className="bg-blue-900 p-3 rounded-full">{item.icon}</div>
                  <span>{item.text}</span>
                </motion.a>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex gap-4">
                <motion.a 
                  href="https://www.linkedin.com/in/arnab-dhua" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-900 p-3 rounded-full text-white hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <FaLinkedin className="text-2xl" />
                </motion.a>
                <motion.a 
                  href="https://github.com/ARNABDHUA" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-900 p-3 rounded-full text-white hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: -10 }}
                >
                  <FaGithub className="text-2xl" />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 bg-gray-800 p-8 rounded-xl shadow-2xl border border-blue-900"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                Send Message
              </motion.button>
              
              {formStatus.submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`mt-4 p-3 ${formStatus.error ? 'bg-red-800 text-red-100' : 'bg-green-800 text-green-100'} rounded-lg`}
                >
                  {formStatus.message}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;