'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Folder } from 'lucide-react'
import Link from 'next/link'

const projectsData = [
  {
    title: 'AI Healthcare Chatbot',
    description: 'Advanced AI-powered healthcare chatbot using natural language processing and machine learning. Built with TensorFlow and deployed using Flask backend with React frontend. Achieved 95% accuracy in symptom classification and medical query responses.',
    tech: ['Python', 'TensorFlow', 'Natural Language Processing', 'Flask', 'React.js', 'Machine Learning'],
    github: 'https://github.com/Sanket1815/healthcare-chatbot',
    external: '',
    featured: true
  },
  {
    title: 'Cloud Infrastructure Automation',
    description: 'Automated cloud infrastructure deployment and management system using Infrastructure as Code principles. Implemented with Terraform for Azure cloud, featuring auto-scaling, monitoring, and disaster recovery capabilities.',
    tech: ['Azure', 'Terraform', 'Docker', 'Kubernetes', 'CI/CD', 'DevOps'],
    github: 'https://github.com/Sanket1815/cloud-automation',
    external: '',
    featured: true
  },
  {
    title: 'Course Advisory Portal',
    description: 'Lead Developer for a Course Advisory Portal, architecting and implementing the frontend using React.js and Next.js, coupled with a robust backend built on Node.js and Nest.js.',
    tech: ['React/Next.js', 'Node/Nest.js', 'Apollo GraphQL', 'Git', 'PostgreSQL', 'TailwindCss'],
    github: 'https://github.com/Sanket1815/CS418-Web-Programming-Sanket',
    external: ''
  },
  {
    title: 'Leaf Disease Detection',
    description: 'Developed an innovative Plant Disease Detection system using advanced image processing and deep learning techniques, achieving a 95% accuracy rate in identifying diseased plant leaves.',
    tech: ['Image Processing', 'Deep Learning', 'Python'],
    github: '',
    external: ''
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Personal portfolio website built with modern web technologies, featuring responsive design, smooth animations, and optimized performance.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/sanket1815/sanket1815.github.io',
    external: 'https://sanket1815.github.io'
  },
  {
    title: 'Chatbot AI',
    description: 'Developed an advanced NLP chatbot using Python, TensorFlow, and Keras, hosted on Django and React platforms, designed to classify user intents from textual inputs with over 95% accuracy.',
    tech: ['Tensorflow', 'Deep learning', 'Keras', 'NLP', 'Python', 'Django', 'React.js'],
    github: '',
    external: ''
  }
]

export function Projects() {
  const [showMore, setShowMore] = useState(false)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const featuredProjects = projectsData.filter(project => project.featured)
  const otherProjects = projectsData.filter(project => !project.featured)
  const displayedProjects = showMore ? otherProjects : otherProjects.slice(0, 4)

  return (
    <section id="projects" className="py-20 px-6 md:px-12" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Some Things I've Built
        </motion.h2>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              className={`grid md:grid-cols-12 gap-8 items-center ${
                index % 2 === 1 ? 'md:text-right' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:col-start-6' : ''}`}>
                <div className="relative group">
                  <div className="bg-navy-800 rounded-lg p-8 border border-navy-700 hover:border-green transition-all duration-300 hover:-translate-y-1 hover:shadow-custom-lg">
                    <div className="w-full h-48 bg-navy-700 rounded flex items-center justify-center">
                      <Folder className="w-16 h-16 text-green" />
                    </div>
                  </div>
                </div>
              </div>

              <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <div className="space-y-4">
                  <p className="text-green font-mono text-sm">Featured Project</p>
                  <h3 className="text-slate-100 text-2xl font-semibold hover:text-green transition-colors">
                    {project.title}
                  </h3>
                  <div className="bg-navy-800 p-6 rounded-lg shadow-custom">
                    <p className="text-slate">{project.description}</p>
                  </div>
                  <ul className={`flex flex-wrap gap-3 font-mono text-sm text-slate ${
                    index % 2 === 1 ? 'md:justify-end' : ''
                  }`}>
                    {project.tech.map((tech, techIndex) => (
                      <li key={techIndex}>{tech}</li>
                    ))}
                  </ul>
                  <div className={`flex items-center gap-4 ${
                    index % 2 === 1 ? 'md:justify-end' : ''
                  }`}>
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="text-slate hover:text-green transition-colors"
                      >
                        <Github size={20} />
                      </Link>
                    )}
                    {project.external && (
                      <Link
                        href={project.external}
                        target="_blank"
                        className="text-slate hover:text-green transition-colors"
                      >
                        <ExternalLink size={20} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.h3
          className="text-slate-100 text-2xl font-semibold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Other Noteworthy Projects
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-navy-800 rounded-lg p-6 border border-navy-700 hover:border-green transition-all duration-300 hover:-translate-y-1 hover:shadow-custom-lg group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-6">
                <Folder className="w-10 h-10 text-green" />
                <div className="flex items-center gap-3">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="text-slate hover:text-green transition-colors"
                    >
                      <Github size={18} />
                    </Link>
                  )}
                  {project.external && (
                    <Link
                      href={project.external}
                      target="_blank"
                      className="text-slate hover:text-green transition-colors"
                    >
                      <ExternalLink size={18} />
                    </Link>
                  )}
                </div>
              </div>

              <h3 className="text-slate-100 text-lg font-semibold mb-3 group-hover:text-green transition-colors">
                {project.title}
              </h3>
              <p className="text-slate text-sm mb-6 line-clamp-3">{project.description}</p>

              <ul className="flex flex-wrap gap-2 font-mono text-xs text-slate">
                {project.tech.map((tech, techIndex) => (
                  <li key={techIndex} className="bg-navy-700 px-2 py-1 rounded">
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.button
            className="btn-secondary"
            onClick={() => setShowMore(!showMore)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Show {showMore ? 'Less' : 'More'}
          </motion.button>
        </div>
      </div>
    </section>
  )
}