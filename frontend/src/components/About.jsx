import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const technicalSkills = [
    'JavaScript',
    'Python',
    'React',
    'Django',
    'Node.js',
    'PostgreSQL',
    'Git',
    'Docker',
    'AWS',
    'REST APIs',
    'TypeScript',
    'HTML/CSS'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-bg-secondary min-h-screen"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-text-primary"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg md:text-xl text-center text-text-muted mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Learn more about my background and expertise
        </motion.p>

        <motion.div
          className="flex flex-col gap-8 sm:gap-12 mt-8 sm:mt-12 lg:mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Professional Experience */}
          <motion.div 
            className="bg-bg-primary rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-300 border border-border-color hover:shadow-2xl hover:shadow-black/30"
            variants={itemVariants}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-text-primary flex items-center gap-3">
              <span className="text-2xl sm:text-3xl">💼</span>
              Professional Experience
            </h3>
            <div className="flex flex-col gap-4 sm:gap-6">
              <motion.div
                className="bg-bg-secondary p-6 sm:p-8 rounded-xl border-l-4 border-accent-primary transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-text-primary">
                  Senior Developer
                </h4>
                <p className="text-base sm:text-lg font-medium text-accent-primary mb-1">
                  Company Name
                </p>
                <p className="text-sm sm:text-base text-text-muted mb-4 italic">
                  2022 - Present
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-text-secondary">
                  Leading development of scalable web applications using modern technologies.
                  Collaborating with cross-functional teams to deliver high-quality software solutions.
                </p>
              </motion.div>
              <motion.div
                className="bg-bg-secondary p-6 sm:p-8 rounded-xl border-l-4 border-accent-primary transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-text-primary">
                  Full Stack Developer
                </h4>
                <p className="text-base sm:text-lg font-medium text-accent-primary mb-1">
                  Previous Company
                </p>
                <p className="text-sm sm:text-base text-text-muted mb-4 italic">
                  2020 - 2022
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-text-secondary">
                  Developed and maintained multiple web applications, improving performance and user experience.
                  Implemented RESTful APIs and integrated third-party services.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div 
            className="bg-bg-primary rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-300 border border-border-color hover:shadow-2xl hover:shadow-black/30"
            variants={itemVariants}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-text-primary flex items-center gap-3">
              <span className="text-2xl sm:text-3xl">🎓</span>
              Education
            </h3>
            <div className="flex flex-col gap-4 sm:gap-6">
              <motion.div
                className="bg-bg-secondary p-6 sm:p-8 rounded-xl border-l-4 border-accent-primary transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-text-primary">
                  Bachelor of Science in Computer Science
                </h4>
                <p className="text-base sm:text-lg font-medium text-accent-primary mb-1">
                  University Name
                </p>
                <p className="text-sm sm:text-base text-text-muted mb-4 italic">
                  2016 - 2020
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-text-secondary">
                  Focused on software engineering, algorithms, and web development.
                  Graduated with honors.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div 
            className="bg-bg-primary rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-300 border border-border-color hover:shadow-2xl hover:shadow-black/30"
            variants={itemVariants}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-text-primary flex items-center gap-3">
              <span className="text-2xl sm:text-3xl">🏆</span>
              Certifications
            </h3>
            <div className="flex flex-col gap-4 sm:gap-6">
              <motion.div
                className="bg-bg-secondary p-6 sm:p-8 rounded-xl border-l-4 border-accent-primary transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-text-primary">
                  AWS Certified Solutions Architect
                </h4>
                <p className="text-base sm:text-lg font-medium text-accent-primary mb-1">
                  Amazon Web Services
                </p>
                <p className="text-sm sm:text-base text-text-muted italic">
                  2023
                </p>
              </motion.div>
              <motion.div
                className="bg-bg-secondary p-6 sm:p-8 rounded-xl border-l-4 border-accent-primary transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-text-primary">
                  React Developer Certification
                </h4>
                <p className="text-base sm:text-lg font-medium text-accent-primary mb-1">
                  Meta
                </p>
                <p className="text-sm sm:text-base text-text-muted italic">
                  2022
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div 
            className="bg-bg-primary rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-300 border border-border-color hover:shadow-2xl hover:shadow-black/30"
            variants={itemVariants}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-text-primary flex items-center gap-3">
              <span className="text-2xl sm:text-3xl">⚡</span>
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-bg-secondary px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-center font-medium text-text-primary border-2 border-border-color transition-all duration-300 cursor-default hover:border-accent-primary hover:bg-blue-500/10 hover:text-accent-primary"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
