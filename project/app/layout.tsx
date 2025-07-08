import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sanket Nadkarni - Software Engineer',
  description: 'Software Engineer and Full Stack Developer with 3+ years of experience building scalable web applications.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'React', 'Node.js', 'TypeScript'],
  authors: [{ name: 'Sanket Nadkarni' }],
  openGraph: {
    title: 'Sanket Nadkarni - Software Engineer',
    description: 'Software Engineer and Full Stack Developer with 3+ years of experience building scalable web applications.',
    url: 'https://sanket1815.github.io',
    siteName: 'Sanket Nadkarni Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanket Nadkarni - Software Engineer',
    description: 'Software Engineer and Full Stack Developer with 3+ years of experience building scalable web applications.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="counter-section">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}