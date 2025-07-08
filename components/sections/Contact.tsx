'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="contact" className="py-20 px-6 md:px-12" ref={ref}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-green font-mono text-base">What's Next?</p>
          <h2 className="text-slate-100 text-4xl md:text-5xl font-bold">Get In Touch</h2>
          <p className="text-slate text-lg max-w-lg mx-auto">
            My inbox is open in case you have any questions or just want to say hello!
            Let's get in touch if you have any relevant opportunities for me!
          </p>
          <motion.div
            className="pt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="mailto:snadkarn@odu.edu" className="btn-primary">
              Say Hello
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}