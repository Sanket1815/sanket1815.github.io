'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Sanket1815',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sanket-nadkarni-ba1bb9151',
    icon: Linkedin,
  },
  {
    name: 'Email',
    url: 'mailto:snadkarn@odu.edu',
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="py-8 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Social Links - Mobile Only */}
        <div className="flex justify-center space-x-6 mb-6 md:hidden">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-green transition-colors p-2"
                aria-label={social.name}
              >
                <Icon size={20} />
              </Link>
            )
          })}
        </div>

        <div className="text-slate-light font-mono text-sm">
          <p>Designed & Built by Sanket Nadkarni</p>
          <p className="mt-2">© 2024 All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}