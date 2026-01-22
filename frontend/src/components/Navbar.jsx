import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-border-color ${
        isScrolled 
          ? 'bg-bg-primary/95 shadow-lg shadow-black/30' 
          : 'bg-bg-primary/80 shadow-md shadow-black/20'
      } backdrop-blur-xl`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold text-accent-primary cursor-pointer hover:text-accent-primary-hover transition-colors duration-300"
          onClick={() => scrollToSection('hero')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Portfolio
        </motion.div>
        <ul className="flex list-none gap-4 sm:gap-8 m-0 p-0">
          {['hero', 'about', 'projects', 'contact'].map((section, index) => (
            <motion.li
              key={section}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <motion.button
                className="group relative bg-transparent border-none text-base sm:text-lg font-medium text-text-secondary cursor-pointer py-2 transition-colors duration-300 hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-bg-primary rounded"
                onClick={() => scrollToSection(section)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section === 'hero' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-primary transition-all duration-300 group-hover:w-full" />
              </motion.button>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
