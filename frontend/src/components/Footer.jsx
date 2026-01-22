import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-bg-primary text-text-secondary py-12 px-4 sm:px-6 lg:px-8 text-center border-t border-border-color"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        <p className="mb-2 text-base text-text-secondary">
          © {currentYear} Your Name. All rights reserved.
        </p>
        <p className="text-sm text-text-muted">
          Built with React & Django REST Framework
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
