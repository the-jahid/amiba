'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter, Github, Linkedin } from 'lucide-react'

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Registration', href: '/registration' },
  { name: 'Workshops', href: '/workshops' },
  { name: 'Prizes', href: '/prizes' },
  { name: 'Faq', href: '/faq' },
  { name: 'Contact', href: '/contact' },
]

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'GitHub', icon: Github, href: 'https://github.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
]

export function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="h-10"
              src="/placeholder.svg?height=40&width=160"
              alt="Company logo"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-500 text-base"
            >
              Empowering connections through innovative events.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex space-x-6"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-gray-500 transition-colors duration-300"
                  onMouseEnter={() => setHoveredIcon(social.name)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <span className="sr-only">{social.name}</span>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon
                      className="h-6 w-6"
                      color={hoveredIcon === social.name ? '#4a5568' : '#a0aec0'}
                    />
                  </motion.div>
                </a>
              ))}
            </motion.div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Navigation</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigationLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Link href={link.href} className="text-base text-gray-500 hover:text-gray-900 transition-colors duration-300">
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <Link href="/#" className="text-base text-gray-500 hover:text-gray-900 transition-colors duration-300">
                      Privacy Policy
                    </Link>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <Link href="#" className="text-base text-gray-500 hover:text-gray-900 transition-colors duration-300">
                      Terms of Service
                    </Link>
                  </motion.li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 border-t border-gray-200 pt-8"
        >
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {currentYear}  Event Name. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

