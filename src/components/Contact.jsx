import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-primary text-sm mb-4">06. What's Next?</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-lightest mb-4">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-slate max-w-lg mb-8">
              I'm currently looking for internship and full-time opportunities in AI and Machine Learning. 
              Whether you have a question about my projects or just want to say hi, feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <p className="text-slate font-mono text-sm">
                <span className="text-primary">Location:</span> Bengaluru, Karnataka
              </p>
              <p className="text-slate font-mono text-sm">
                <span className="text-primary">Phone:</span> +91 9353796013
              </p>
              <p className="text-slate font-mono text-sm">
                <span className="text-primary">Email:</span> namrathanb1ga21ai031@gmail.com
              </p>
            </div>

            <div className="flex space-x-6 pt-4">
              <a
                href="https://linkedin.com/in/Namratha N B"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-primary hover-trigger"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/namrathanb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-primary hover-trigger"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              // Add form submission logic here
            }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-mono text-slate mb-2">Name</label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-navy-light border border-slate/20 rounded text-slate-light 
                         focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                         placeholder:text-slate/50"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-mono text-slate mb-2">Email</label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-navy-light border border-slate/20 rounded text-slate-light 
                         focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                         placeholder:text-slate/50"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-mono text-slate mb-2">Message</label>
              <textarea
                id="message"
                placeholder="Your message..."
                rows="6"
                className="w-full px-4 py-3 bg-navy-light border border-slate/20 rounded text-slate-light 
                         focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                         placeholder:text-slate/50 resize-none"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full px-8 py-4 bg-primary text-navy font-mono text-sm rounded hover:bg-primary/90
                       transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 