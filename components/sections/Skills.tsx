'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillsData = [
  {
    category: 'Frontend Development',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Styled Components']
  },
  {
    category: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'GraphQL', 'REST APIs', 'Microservices', 'MolecularJS', 'Python', 'Flask']
  },
  {
    category: 'Database & Cloud',
    skills: ['PostgreSQL', 'MongoDB', 'Azure', 'Docker', 'Kubernetes', 'Redis', 'Firebase', 'AWS']
  },
  {
    category: 'Tools & Technologies',
    skills: ['Git', 'Azure DevOps', 'CI/CD', 'Terraform', 'Jest', 'Webpack', 'Vite', 'Linux']
  },
  {
    category: 'Machine Learning',
    skills: ['TensorFlow', 'Python', 'Keras', 'NLP', 'Deep Learning', 'Data Analysis', 'Scikit-learn', 'Pandas']
  },
  {
    category: 'Soft Skills',
    skills: ['Team Leadership', 'Problem Solving', 'Communication', 'Project Management', 'Agile/Scrum', 'Mentoring']
  }
]

export function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="skills" className="py-20 px-6 md:px-12" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              className="bg-navy-800 rounded-lg p-6 border border-navy-700 hover:border-green transition-all duration-300 hover:-translate-y-1 hover:shadow-custom-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-green text-lg font-semibold mb-4 flex items-center">
                <span className="w-5 h-0.5 bg-green mr-3"></span>
                {category.category}
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="bg-navy-700 px-3 py-2 rounded text-center font-mono text-xs text-slate hover:bg-green hover:text-navy transition-all duration-300 cursor-pointer hover:-translate-y-0.5"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}