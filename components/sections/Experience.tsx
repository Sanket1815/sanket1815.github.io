'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

const jobsData = [
  {
    title: 'Software Engineer',
    company: 'Kyndryl',
    location: 'Remote',
    range: 'August 2024 - Present',
    url: 'https://www.kyndryl.com',
    details: [
      'Currently working as a Software Engineer at Kyndryl, focusing on cloud infrastructure and enterprise solutions',
      'Developing and maintaining scalable applications using modern technologies and cloud platforms',
      'Collaborating with cross-functional teams to deliver high-quality software solutions',
      'Contributing to the design and implementation of microservices architecture',
      'Working with containerization technologies and DevOps practices for efficient deployment'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Proxima Systems',
    location: 'Pune, India',
    range: 'Nov 2020 - July 2023',
    url: 'http://www.proximabiz.com',
    details: [
      'Led the design and development of a comprehensive educational portal, enhancing user experience with interactive features and user-friendly interfaces.',
      'Developed over 50+ GraphQL APIs using MolecularJS, a progressive microservices framework for Node.js, leveraging TypeScript for type safety and maintainability.',
      'Collaborated with frontend teams to implement and optimize React.js components for high performance and seamless integration.',
      'Customized GraphQL schemas and resolvers to enhance data fetching flexibility; utilized Node.js for efficient asynchronous operations and scalability.',
      'Designed and implemented a PostgreSQL database, integrating Micro ORM for streamlined operations and data integrity.',
      'Spearheaded the integration of Azure DevOps into the workflow, improving project management and deployment processes.'
    ]
  }
]

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="experience" className="py-20 px-6 md:px-12" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Where I've Worked
        </motion.h2>

        <div className="flex flex-col md:flex-row">
          {/* Tab List */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible mb-8 md:mb-0 md:mr-8">
            {jobsData.map((job, index) => (
              <button
                key={index}
                className={`px-6 py-3 text-left font-mono text-sm whitespace-nowrap md:whitespace-normal border-b-2 md:border-b-0 md:border-l-2 transition-all duration-300 ${
                  activeTab === index
                    ? 'text-green border-green bg-green/10'
                    : 'text-slate border-navy-700 hover:text-green hover:bg-green/5'
                }`}
                onClick={() => setActiveTab(index)}
              >
                {job.company}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            className="flex-1 min-h-[400px]"
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-slate-100 text-xl font-semibold">
                  {jobsData[activeTab].title}{' '}
                  <Link
                    href={jobsData[activeTab].url}
                    target="_blank"
                    className="text-green hover:underline"
                  >
                    @ {jobsData[activeTab].company}
                  </Link>
                </h3>
                <p className="text-slate-light font-mono text-sm mt-1">
                  {jobsData[activeTab].range}
                </p>
              </div>

              <ul className="space-y-3">
                {jobsData[activeTab].details.map((detail, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start text-slate"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="text-green mr-3 mt-1 flex-shrink-0">▹</span>
                    <span>{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}