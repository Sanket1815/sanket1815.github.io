import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledEducationSection = styled.section`
  max-width: 700px;

  .education-list {
    ${({ theme }) => theme.mixins.resetList};
  }
`;

const StyledEducationItem = styled.div`
  position: relative;
  padding: 25px 0;
  border-bottom: 1px solid var(--lightest-navy);
  transition: all 0.3s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    transform: translateY(-2px);
    
    .education-school {
      color: var(--green);
    }
  }

  .education-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .education-school {
    color: var(--lightest-slate);
    font-size: var(--fz-xl);
    font-weight: 600;
    transition: color 0.3s ease;
  }

  .education-degree {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    margin: 5px 0;
  }

  .education-duration {
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  .education-details {
    margin-top: 15px;
    color: var(--slate);
    
    ul {
      ${({ theme }) => theme.mixins.fancyList};
      margin-top: 10px;
    }
  }

  .education-gpa {
    color: var(--green);
    font-weight: 600;
    margin-top: 10px;
  }
`;

const Education = () => {
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
  ];

  return (
    <StyledEducationSection id="education" ref={ref}>
      <motion.h2 
        className="numbered-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>

      <div className="education-list">
        {educationData.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <StyledEducationItem>
              <div className="education-header">
                <div>
                  <div className="education-school">{edu.school}</div>
                  <div className="education-degree">{edu.degree}</div>
                  <div className="education-duration">{edu.duration} • {edu.location}</div>
                </div>
              </div>
              
              <div className="education-details">
                <ul>
                  {edu.details.map((detail, j) => (
                    <li key={j}>{detail}</li>
                  ))}
                </ul>
                <div className="education-gpa">{edu.gpa}</div>
              </div>
            </StyledEducationItem>
          </motion.div>
        ))}
      </div>
    </StyledEducationSection>
  );
};

export default Education;