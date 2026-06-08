'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, personalInfo } from '@/data/profile'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navLinks.map((l) => l.href.slice(1))
      let current = 'home'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 100) current = id
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0f172a]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <motion.button
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => handleNav('#home')}
          className="flex items-center gap-2 group"
        >
          <span className="w-9 h-9 rounded-lg bg-[#ff4d4f] flex items-center justify-center text-white text-sm font-bold shadow-[0_0_15px_rgba(255,77,79,0.4)] group-hover:shadow-[0_0_25px_rgba(255,77,79,0.7)] transition-all duration-300">
            BM
          </span>
          <span className="font-bold text-white text-lg hidden sm:block">
            {personalInfo.firstName}
            <span className="text-[#ff4d4f]"> {personalInfo.lastName}</span>
          </span>
        </motion.button>

        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden lg:flex items-center gap-1"
        >
          {navLinks.map(({ href, label }) => {
            const id = href.slice(1)
            return (
              <li key={href}>
                <button
                  onClick={() => handleNav(href)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 relative group ${
                    activeSection === id
                      ? 'text-[#ff4d4f]'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {label}
                  {activeSection === id && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#ff4d4f]"
                    />
                  )}
                </button>
              </li>
            )
          })}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <a
            href={personalInfo.cvUrl}
            download
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-[#ff4d4f] text-white rounded-lg hover:bg-[#e03e3e] transition-all duration-300 shadow-[0_0_15px_rgba(255,77,79,0.3)] hover:shadow-[0_0_25px_rgba(255,77,79,0.6)]"
          >
            Hire Me
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </motion.div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-[#0f172a]/98 backdrop-blur-md border-t border-gray-800"
          >
            <ul className="flex flex-col py-4 px-4 gap-1">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <button
                    onClick={() => handleNav(href)}
                    className="w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200 text-sm font-medium"
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={personalInfo.cvUrl}
                  download
                  className="block text-center px-4 py-3 bg-[#ff4d4f] text-white rounded-lg font-semibold text-sm hover:bg-[#e03e3e] transition-colors"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
