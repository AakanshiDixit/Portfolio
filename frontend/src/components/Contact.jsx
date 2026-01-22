import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('http://127.0.0.1:8000/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to send message');
      }

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-bg-secondary min-h-screen"
    >
      <div className="max-w-2xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-text-primary"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg md:text-xl text-center text-text-muted mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Have a project in mind? I'd love to hear from you.
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-4 sm:gap-6 my-8 sm:my-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.a
            href="mailto:your.email@example.com"
            className="flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-bg-primary text-text-primary rounded-lg font-semibold text-sm sm:text-base border-2 border-border-color hover:bg-accent-primary hover:text-white hover:border-accent-primary hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-bg-secondary"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl">📧</span>
            <span>Email</span>
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yourprofile"
            className="flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-bg-primary text-text-primary rounded-lg font-semibold text-sm sm:text-base border-2 border-border-color hover:bg-accent-primary hover:text-white hover:border-accent-primary hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-bg-secondary"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl">💼</span>
            <span>LinkedIn</span>
          </motion.a>
          <motion.a
            href="https://github.com/yourusername"
            className="flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-bg-primary text-text-primary rounded-lg font-semibold text-sm sm:text-base border-2 border-border-color hover:bg-accent-primary hover:text-white hover:border-accent-primary hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-bg-secondary"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl">🔗</span>
            <span>GitHub</span>
          </motion.a>
        </motion.div>

        <motion.form
          className="mt-8"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="mb-7">
            <label htmlFor="name" className="block font-semibold mb-3 text-text-primary text-base sm:text-lg">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full px-4 py-3 sm:py-4 border-2 border-border-color rounded-lg text-base sm:text-lg font-sans transition-all duration-300 bg-bg-primary text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-primary focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <div className="mb-7">
            <label htmlFor="email" className="block font-semibold mb-3 text-text-primary text-base sm:text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 sm:py-4 border-2 border-border-color rounded-lg text-base sm:text-lg font-sans transition-all duration-300 bg-bg-primary text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-primary focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <div className="mb-7">
            <label htmlFor="message" className="block font-semibold mb-3 text-text-primary text-base sm:text-lg">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Your message here..."
              className="w-full px-4 py-3 sm:py-4 border-2 border-border-color rounded-lg text-base sm:text-lg font-sans transition-all duration-300 bg-bg-primary text-text-primary placeholder:text-text-muted resize-y min-h-[140px] focus:outline-none focus:border-accent-primary focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          {status.message && (
            <motion.div
              className={`py-5 px-5 rounded-lg mb-6 font-medium ${
                status.type === 'success'
                  ? 'bg-green-500/10 text-green-400 border border-green-500/30'
                  : 'bg-red-500/10 text-red-400 border border-red-500/30'
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {status.message}
            </motion.div>
          )}

          <motion.button
            type="submit"
            className="w-full py-4 sm:py-4.5 bg-gradient-to-r from-accent-primary to-accent-primary-hover text-white rounded-lg text-lg sm:text-xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-bg-secondary"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
