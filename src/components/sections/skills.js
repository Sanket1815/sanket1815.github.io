import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledSkillsSection = styled.section`
  max-width: 900px;

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 30px;
    margin-top: 50px;
  }
`;

const StyledSkillCategory = styled.div`
  background-color: var(--light-navy);
  border-radius: var(--border-radius);
  padding: 30px;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--green);
    box-shadow: 0 20px 30px -15px var(--navy-shadow);
  }

  .category-title {
    color: var(--green);
    font-size: var(--fz-xl);
    font-weight: 600;
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    &::before {
      content: '';
      width: 20px;
      height: 2px;
      background-color: var(--green);
      margin-right: 15px;
    }
  }

  .skills-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    grid-gap: 15px;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      background-color: var(--lightest-navy);
      padding: 10px 15px;
      border-radius: 5px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      text-align: center;
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        background-color: var(--green);
        color: var(--navy);
        transform: translateY(-2px);
      }
    }
  }
`;

const Skills = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
  }, []);

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
  ];

  return (
    <StyledSkillsSection id="skills" ref={ref}>
      <motion.h2 
        className="numbered-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Skills & Technologies
      </motion.h2>

      <div className="skills-grid">
        {skillsData.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <StyledSkillCategory>
              <h3 className="category-title">{category.category}</h3>
              <ul className="skills-list">
                {category.skills.map((skill, j) => (
                  <motion.li
                    key={j}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </StyledSkillCategory>
          </motion.div>
        ))}
      </div>
    </StyledSkillsSection>
  );
};

export default Skills;