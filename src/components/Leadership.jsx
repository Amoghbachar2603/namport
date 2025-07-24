import React from 'react';
import { motion } from 'framer-motion';

const Leadership = () => {
  const leadership = [
    {
      role: 'Founding Core Committee Member',
      organization: 'WORDSMITHS: The Content Writing Club',
      period: 'Department of AI ML',
      description: 'Led the establishment and development of the official content writing club for the AI ML department, fostering creative expression and technical communication skills among students.'
    },
    {
      role: 'Member',
      organization: 'IEEE Computer Society Bangalore',
      period: 'Current',
      description: 'Active member contributing to the advancement of computer science and technology through professional networking and knowledge sharing.'
    },
    {
      role: 'Editor',
      organization: 'extrodinAIre - Official Department Newsletter',
      period: 'Current',
      description: 'Managing and curating content for the official department newsletter, ensuring high-quality technical articles and department updates.'
    }
  ];

  return (
    <section id="leadership" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-4">04. Leadership & Activities</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-lightest">Leadership Roles</h2>
        </motion.div>

        <div className="space-y-12">
          {leadership.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-navy-light rounded-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-slate-lightest group-hover:text-primary transition-colors duration-300">
                    {item.role}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-primary">
                    {item.organization}
                  </h4>
                  <p className="text-slate-light font-mono text-sm">
                    {item.period}
                  </p>
                </div>

                <p className="text-slate text-lg">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership; 