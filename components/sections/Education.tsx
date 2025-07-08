'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const educationData = [
  {
    school: 'Old Dominion University',
    degree: 'Master of Science in Computer Science',
    duration: '2023 - 2025 (Expected)',
    location: 'Norfolk, VA',
    details: [
      'Focus on Advanced Algorithms, Machine Learning, and Software Engineering',
      'Relevant Coursework: Data Structures, Database Systems, Web Programming',
      'Graduate Research in AI and Natural Language Processing'
    ],
    gpa: 'GPA: 3.8/4.0'
  },
  {
    school: 'Savitribai Phule Pune University',
    degree: 'Bachelor of Engineering in Computer Engineering',
    duration: '2016 - 2020',
    location: 'Pune, India',
    details: [
      'Strong foundation in Computer Science fundamentals',
      'Specialized in Software Development and Database Management',
      'Active member of Computer Engineering Society'
    ],
    gpa: 'First Class with Distinction'
  }
]

export function Education() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="education" className="py-20 px-6 md:px-12" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-navy-800 rounded-lg p-6 border border-navy-700 hover:border-green transition-all duration-300 hover:-translate-y-1 hover:shadow-custom-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-slate-100 text-xl font-semibold hover:text-green transition-colors">
                    {edu.school}
                  </h3>
                  <p className="text-green font-mono text-sm mt-1">{edu.degree}</p>
                  <p className="text-slate-light font-mono text-xs mt-1">
                    {edu.duration} • {edu.location}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <ul className="space-y-2">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-slate">
                      <span className="text-green mr-3 mt-1 flex-shrink-0">▹</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-green font-semibold">{edu.gpa}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}