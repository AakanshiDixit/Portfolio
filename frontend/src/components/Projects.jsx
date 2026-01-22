import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://127.0.0.1:8000/api/projects/');
        
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        
        const data = await response.json();
        setProjects(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Unable to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
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
      id="projects" 
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-bg-primary min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-text-primary"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg md:text-xl text-center text-text-muted mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Here are some of my recent projects
        </motion.p>

        {loading && (
          <motion.div
            className="text-center py-12 text-lg text-text-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Loading projects...
          </motion.div>
        )}

        {error && (
          <motion.div
            className="text-center py-6 px-6 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 my-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {error}
          </motion.div>
        )}

        {!loading && !error && projects.length === 0 && (
          <motion.div
            className="text-center py-12 text-lg text-text-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <p>No projects available at the moment.</p>
            <p className="text-sm text-text-muted mt-2">Check back soon for updates!</p>
          </motion.div>
        )}

        {!loading && !error && projects.length > 0 && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-bg-secondary rounded-2xl p-6 sm:p-8 flex flex-col border border-border-color shadow-lg hover:shadow-2xl hover:shadow-black/40 hover:border-accent-primary transition-all duration-300"
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-text-primary">
                  {project.title}
                </h3>
                <p className="text-base sm:text-lg leading-relaxed text-text-secondary mb-6 flex-grow">
                  {project.description}
                </p>
                
                {project.tech_stack && (
                  <div className="mb-6">
                    <span className="text-sm font-semibold text-text-muted block mb-3">
                      Tech Stack:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {typeof project.tech_stack === 'string' 
                        ? project.tech_stack.split(',').map((tech, idx) => (
                            <motion.span
                              key={idx}
                              className="px-3 py-1.5 rounded-full text-sm font-medium bg-bg-primary text-text-secondary border border-border-color"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                              transition={{ delay: index * 0.05 + idx * 0.03 }}
                            >
                              {tech.trim()}
                            </motion.span>
                          ))
                        : Array.isArray(project.tech_stack)
                        ? project.tech_stack.map((tech, idx) => (
                            <motion.span
                              key={idx}
                              className="px-3 py-1.5 rounded-full text-sm font-medium bg-bg-primary text-text-secondary border border-border-color"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                              transition={{ delay: index * 0.05 + idx * 0.03 }}
                            >
                              {tech}
                            </motion.span>
                          ))
                        : null
                      }
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.github_link && (
                    <motion.a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-lg text-sm font-semibold bg-bg-primary text-text-primary border-2 border-border-color hover:bg-text-primary hover:text-bg-primary hover:border-text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-bg-secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                  )}
                  {project.live_link && (
                    <motion.a
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-lg text-sm font-semibold bg-gradient-to-r from-accent-primary to-accent-primary-hover text-white hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-bg-secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
