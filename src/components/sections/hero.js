import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;
  position: relative;
  overflow: hidden;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(100, 255, 218, 0.1) 0%, rgba(10, 25, 47, 0.8) 100%);
    z-index: -1;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: left 0.5s;
    }
    
    &:hover::before {
      left: 100%;
    }
  }
`;

const StyledFloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;

  .floating-element {
    position: absolute;
    width: 20px;
    height: 20px;
    background: var(--green);
    border-radius: 50%;
    opacity: 0.1;
    animation: float 6s ease-in-out infinite;

    &:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
    &:nth-child(2) { top: 60%; left: 80%; animation-delay: 2s; }
    &:nth-child(3) { top: 80%; left: 20%; animation-delay: 4s; }
    &:nth-child(4) { top: 30%; left: 70%; animation-delay: 1s; }
    &:nth-child(5) { top: 70%; left: 50%; animation-delay: 3s; }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
`;
const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi there! My name is</h1>;
  const two = <h2 className="big-heading">Sanket Nadkarni</h2>;
  const three = <h3 className="medium-heading">Software Engineer & Full Stack Developer</h3>;
  const four = (
    <>
      <p>
        <b>Welcome to my digital space!</b>
      </p>

      <p>
        I'm currently pursuing my Master's in Computer Science at{' '}
        <a href="https://www.odu.edu/">Old Dominion University</a>.
      </p>

      <p>
        I'm a passionate software engineer with 3+ years of experience building scalable web applications
        and innovative solutions. I love turning complex problems into elegant, user-friendly experiences.
      </p>
    </>
  );
  
  const five = (
    <motion.a
      className="email-link"
      href="#projects"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      View My Work
    </motion.a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      <StyledFloatingElements>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </StyledFloatingElements>
      
      {prefersReducedMotion ? (
        <>
          {items?.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items?.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
