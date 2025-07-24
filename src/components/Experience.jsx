import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: 'Bharat Electronics Limited',
      title: 'Software Intern',
      period: 'October-November, 2024',
      responsibilities: [
        'Developed an Intelligent AI report summarizer using offline models',
        'Explored and implemented Pegasus, DistilBART and FlanT5 models for text summarization',
        'Worked on optimizing model performance for enterprise-level document processing',
        'Collaborated with cross-functional teams to integrate AI solutions into existing systems',
      ],
    },
    {
      company: 'IEEE CS Bangalore Chapter',
      title: 'Project Intern',
      period: 'April-September, 2024',
      responsibilities: [
        'Developed an Intelligent Enterprise Assistant: Enhancing Organizational Efficiency through AI-driven Chatbot Integration',
        'Led the development of conversational AI systems for enterprise applications',
        'Implemented natural language processing techniques for improved user interaction',
        'Mentored junior team members in AI/ML concepts and project development',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-4">03. Where I've Been</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-lightest">My Experience</h2>
        </motion.div>

        <div className="relative border-l border-slate/20">
          {experiences.map((experience, i) => (
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
                <span className="font-mono text-primary text-sm">{experience.period}</span>
                <h3 className="text-xl font-bold text-slate-lightest">
                  {experience.title}
                  <span className="text-primary"> @ {experience.company}</span>
                </h3>
                <ul className="space-y-3">
                  {experience.responsibilities.map((responsibility, j) => (
                    <li key={j} className="text-slate flex items-start">
                      <span className="text-primary mr-2">▹</span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 