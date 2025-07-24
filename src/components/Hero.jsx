import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-primary mb-6">Hi, my name is</p>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-bold text-slate-lightest mb-4"
        >
          Namratha N B.
        </motion.h1>
        
        
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-xl text-slate text-lg mb-12"
        >
          I'm an AI & ML Engineer specializing in deep learning and large language models (LLMs). 
          Currently pursuing advanced studies in AI and ML with a focus on developing intelligent 
          systems that enhance organizational efficiency and solve real-world problems.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#projects"
            className="inline-block px-8 py-4 border-2 border-primary text-primary hover:bg-primary/10 
                     rounded font-mono text-sm hover-trigger transition-colors duration-300"
          >
            Check out my work!
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 