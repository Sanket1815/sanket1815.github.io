'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-start px-6 md:px-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-5 h-5 bg-green rounded-full opacity-10 animate-float"></div>
        <div className="absolute top-60 right-20 w-5 h-5 bg-green rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-20 w-5 h-5 bg-green rounded-full opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-32 right-32 w-5 h-5 bg-green rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-40 w-5 h-5 bg-green rounded-full opacity-10 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <motion.div
        className="max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-green font-mono text-base md:text-lg mb-6"
          variants={itemVariants}
        >
          Hi there! My name is
        </motion.h1>

        <motion.h2
          className="text-slate-100 text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          variants={itemVariants}
        >
          Sanket Nadkarni
        </motion.h2>

        <motion.h3
          className="text-slate text-3xl md:text-5xl lg:text-6xl font-bold mb-8"
          variants={itemVariants}
        >
          Software Engineer & Full Stack Developer
        </motion.h3>

        <motion.div
          className="max-w-2xl space-y-4 text-slate text-lg leading-relaxed mb-12"
          variants={itemVariants}
        >
          <p>
            <strong className="text-slate-100">Welcome to my digital space!</strong>
          </p>
          <p>
            I'm currently pursuing my Master's in Computer Science at{' '}
            <Link href="https://www.odu.edu/" target="_blank" className="text-green hover:underline">
              Old Dominion University
            </Link>
            .
          </p>
          <p>
            I'm a passionate software engineer with 3+ years of experience building scalable web applications
            and innovative solutions. I love turning complex problems into elegant, user-friendly experiences.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link href="#projects" className="btn-primary">
            View My Work
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}