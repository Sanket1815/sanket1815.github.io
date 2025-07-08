'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const skills = [
  'Full Stack Development',
  'Cloud Architecture (Azure)',
  'GraphQL & REST APIs',
  'React.js & Node.js',
  'Machine Learning',
  'Database Design',
  'DevOps & CI/CD',
  'System Architecture'
]

export function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="about" className="py-20 px-6 md:px-12" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          <motion.div
            className="md:col-span-2 space-y-4 text-slate"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p>
              Hello! I'm Sanket, a passionate software engineer with{' '}
              <span className="text-green font-semibold">3+ years</span> of 
              experience in full-stack development. My journey began at{' '}
              <span className="text-green font-semibold">Savitribai Phule Pune University</span>, 
              where I earned my Bachelor's in Computer Engineering, laying the foundation for my career in technology.
            </p>

            <p>
              At <span className="text-green font-semibold">Proxima Systems</span>, I led the development of educational portals and 
              created <span className="text-green font-semibold">50+ GraphQL APIs</span> using MolecularJS. I collaborated with frontend teams 
              to optimize React.js components and integrated Azure DevOps for improved deployment processes.
            </p>

            <p>
              Currently pursuing my <span className="text-green font-semibold">Master's in Computer Science</span> at Old Dominion University, 
              I'm expanding my expertise in advanced algorithms and system design. I'm passionate about creating 
              innovative solutions that make a real impact.
            </p>

            <p>Here are some technologies I've been working with recently:</p>

            <ul className="grid grid-cols-2 gap-2 mt-6">
              {skills.map((skill, index) => (
                <motion.li
                  key={skill}
                  className="flex items-center text-sm font-mono text-slate hover:text-green transition-colors cursor-pointer group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <span className="text-green mr-2 group-hover:text-slate-100 transition-colors">▹</span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="relative max-w-xs mx-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative group">
              <div className="relative z-10 rounded bg-green">
                <Image
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Sanket Nadkarni"
                  width={300}
                  height={300}
                  className="rounded mix-blend-multiply filter grayscale contrast-100 transition-all duration-300 group-hover:filter-none group-hover:mix-blend-normal"
                />
              </div>
              <div className="absolute top-4 left-4 w-full h-full border-2 border-green rounded -z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}