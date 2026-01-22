import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 overflow-hidden bg-gradient-to-br from-bg-secondary via-bg-primary to-bg-secondary"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.1)_0%,transparent_50%)] pointer-events-none" />
      
      <motion.div
        className="max-w-4xl text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight bg-gradient-to-br from-text-primary to-text-secondary bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Your Name
        </motion.h1>
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 text-accent-primary"
          variants={itemVariants}
        >
          Full Stack Developer
        </motion.h2>
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 sm:mb-12 text-text-secondary max-w-3xl mx-auto"
          variants={itemVariants}
        >
          I build modern web applications with clean code and great user experiences.
          Passionate about creating solutions that make a difference.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center"
          variants={itemVariants}
        >
          <motion.button
            className="px-8 py-3.5 text-base font-semibold rounded-lg bg-gradient-to-r from-accent-primary to-accent-primary-hover text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-bg-primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>
          <motion.button
            className="px-8 py-3.5 text-base font-semibold rounded-lg bg-transparent text-text-primary border-2 border-border-color hover:bg-bg-secondary hover:border-accent-primary hover:text-accent-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-bg-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
          <motion.button
            className="px-8 py-3.5 text-base font-semibold rounded-lg bg-gradient-to-r from-accent-secondary to-accent-secondary-hover text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-secondary focus:ring-offset-2 focus:ring-offset-bg-primary"
            onClick={handleResumeDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📄 Download Resume
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
