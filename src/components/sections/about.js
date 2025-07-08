import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      transition: all 0.3s ease;
      cursor: pointer;

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
        transition: all 0.3s ease;
      }
      
      &:hover {
        color: var(--green);
        transform: translateX(5px);
        
        &:before {
          color: var(--white);
        }
      }
    }
  }
  
  .highlight {
    color: var(--green);
    font-weight: 600;
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);
    transition: all 0.3s ease;

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);
      box-shadow: 0 25px 50px -15px var(--navy-shadow);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
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

  const skills = [
    'Full Stack Development',
    'Cloud Architecture (Azure)',
    'GraphQL & REST APIs',
    'React.js & Node.js',
    'Machine Learning',
    'Database Design',
    'DevOps & CI/CD',
    'System Architecture'
  ];

  return (
    <StyledAboutSection id="about" ref={ref}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <StyledText>
          <div>
            <p>
              Hello! I'm Sanket, a passionate software engineer with <span className="highlight">3+ years</span> of 
              experience in full-stack development. My journey began at <span className="highlight">Savitribai Phule Pune University</span>, 
              where I earned my Bachelor's in Computer Engineering, laying the foundation for my career in technology.
            </p>

            <p>
              At <span className="highlight">Proxima Systems</span>, I led the development of educational portals and 
              created <span className="highlight">50+ GraphQL APIs</span> using MolecularJS. I collaborated with frontend teams 
              to optimize React.js components and integrated Azure DevOps for improved deployment processes.
            </p>

            <p>
              Currently pursuing my <span className="highlight">Master's in Computer Science</span> at Old Dominion University, 
              I'm expanding my expertise in advanced algorithms and system design. I'm passionate about creating 
              innovative solutions that make a real impact.
            </p>

            <p>Here are some technologies I've been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
            )
            }
          </ul>
          </StyledText>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/sanket.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
          </StyledPic>
        </motion.div>
      </div>
    </StyledAboutSection>
  );
};

export default About;
