import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'Python',
    'C',
    'Java',
    'HTML/CSS',
    'JavaScript',
    'SQL',
    'TensorFlow',
    'PyTorch',
    'OpenCV',
    'NLP',
    'LLMs',
    'React.js',
    'MySQL',
    'MongoDB',
    'Figma'
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-4">01. About Me</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-lightest">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-4 text-slate"
          >
            <p>
              Hello! I'm Namratha N B, an AI & ML enthusiast with a passion for deep learning and 
              large language models. I am proficient in a range of programming languages including 
              Python, C, HTML, and Java, and have applied these skills in various software development projects.
            </p>
            
            <p>
              Currently, I am pursuing advanced studies in AI and ML at Global Academy of Technology 
              with a CGPA of 9.72. My particular interest lies in deep learning and large language models (LLMs), 
              where I focus on developing intelligent systems that enhance organizational efficiency.
            </p>

            <p>
              My commitment to continuous growth, both technically and professionally, positions me to 
              contribute effectively in cutting-edge environments. When I'm not coding, you can find me 
              exploring the latest developments in AI, participating in hackathons, or mentoring other 
              students in their tech journey.
            </p>

            <div className="pt-4">
              <p className="mb-3">Here are some technologies I work with:</p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {skills.map((skill, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-primary">▹</span>
                    <span className="font-mono text-sm">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative w-full max-w-[300px] mx-auto">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 