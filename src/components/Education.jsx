import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: 'BE in Artificial Intelligence and Machine Learning',
      institution: 'Global Academy of Technology',
      period: '2021 – 2025',
      details: 'CGPA: 9.72'
    },
    {
      degree: 'Pre University State Board',
      institution: 'MES PU College',
      period: '2019 – 2021',
      details: 'Percentage: 90.33'
    },
    {
      degree: '10th Standard State Board',
      institution: 'Stella Maris High School',
      period: '2018 – 2019',
      details: 'Percentage: 96.80'
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-4">02. Education</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-lightest">My Academic Journey</h2>
        </motion.div>

        <div className="relative border-l border-slate/20">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="mb-12 ml-8 relative last:mb-0"
            >
              <div className="absolute w-4 h-4 bg-navy border-2 border-primary rounded-full -left-[41px] mt-1" />
              <div className="flex flex-col space-y-3">
                <span className="font-mono text-primary text-sm">{edu.period}</span>
                <h3 className="text-xl font-bold text-slate-lightest">
                  {edu.degree}
                  <span className="text-primary"> @ {edu.institution}</span>
                </h3>
                <p className="text-slate">{edu.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 