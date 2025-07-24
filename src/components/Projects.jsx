import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Feedback Mechanism for Public-Speaking using Audio and Video Analysis',
      description: 'Developed a comprehensive feedback system for public speaking that leverages audio and video analysis to provide constructive feedback to speakers. Utilizing the VGG16 model for video analysis and large language models (LLMs) for generating personalized feedback, the system evaluates various aspects of a speaker\'s performance, including body language, voice modulation, and content delivery.',
      tech: ['Python', 'VGG16', 'OpenCV', 'Librosa', 'TensorFlow/Keras', 'Hugging Face Transformers', 'LLMs'],
      links: {
        github: 'https://github.com/namrathanb/public-speaking-feedback',
        external: 'https://public-speaking-feedback-demo.vercel.app'
      }
    },
    {
      title: 'Smart Pedestrian System using YOLOV8',
      description: 'Developed a Smart Pedestrian System using the YOLOv8 object detection model to identify and track pedestrians in real time. The system provides enhanced safety features for urban environments and traffic management applications.',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'YOLOv8', 'Real-time Detection'],
      links: {
        github: 'https://github.com/namrathanb/smart-pedestrian-system',
        external: 'https://smart-pedestrian-system-demo.vercel.app'
      }
    },
    {
      title: 'Image Classification for Medical Diagnosis: Dermatology',
      description: 'Worked on a medical image classification project focused on dermatology, using the VGG16 deep learning model to accurately identify and classify skin conditions from images. The system provides reliable diagnostic support for healthcare professionals.',
      tech: ['Python', 'TensorFlow', 'Keras', 'VGG16', 'Medical Imaging'],
      links: {
        github: 'https://github.com/namrathanb/medical-image-classification',
        external: 'https://medical-classification-demo.vercel.app'
      }
    },
    {
      title: 'Expense Tracker Web Application',
      description: 'Developed a web-based expense tracker that allows users to efficiently manage and track their spending in real time, with features like user authentication, data visualization, and secure expense management.',
      tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'XAMPP'],
      links: {
        github: 'https://github.com/namrathanb/expense-tracker',
        external: 'https://expense-tracker-demo.vercel.app'
      }
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-4">05. Some Things I've Built</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-lightest">Notable Projects</h2>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative bg-navy-light rounded-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-slate-lightest group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-primary transition-colors duration-300"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a
                      href={project.links.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-primary transition-colors duration-300"
                    >
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                <p className="text-slate text-lg">{project.description}</p>

                <ul className="flex flex-wrap gap-3 pt-4">
                  {project.tech.map((tech, j) => (
                    <li
                      key={j}
                      className="font-mono text-sm text-primary bg-navy px-3 py-1 rounded"
                    >
                      {tech}
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

export default Projects; 