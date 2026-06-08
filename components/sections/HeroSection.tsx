'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Download, ArrowRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'
import { personalInfo } from '@/data/profile'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()

    const particles: Particle[] = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 1.8 + 0.4,
      opacity: Math.random() * 0.45 + 0.05,
    }))

    let animId: number
    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas!.width
        if (p.x > canvas!.width) p.x = 0
        if (p.y < 0) p.y = canvas!.height
        if (p.y > canvas!.height) p.y = 0
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(255, 255, 255, ${p.opacity})`
        ctx!.fill()
      })
      animId = requestAnimationFrame(animate)
    }
    animate()

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a]"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,77,79,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 100% 100%, rgba(99,102,241,0.08) 0%, transparent 60%), linear-gradient(180deg, #0f172a 0%, #111827 50%, #0f172a 100%)',
        }}
      />
      <ParticleCanvas />

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff4d4f]/30 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ff4d4f]/30 bg-[#ff4d4f]/10 text-[#ff4d4f] text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#ff4d4f] animate-pulse" />
          {personalInfo.availability}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-lg mb-3 tracking-wide"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-serif text-white mb-4 leading-tight"
        >
          {personalInfo.firstName}{' '}
          <span className="text-[#ff4d4f] drop-shadow-[0_0_30px_rgba(255,77,79,0.5)]">
            {personalInfo.lastName}
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#ff4d4f]" />
          <h2 className="text-xl sm:text-2xl text-gray-300 font-medium tracking-wide">
            {personalInfo.title}
          </h2>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#ff4d4f]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {personalInfo.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          {[
            { href: personalInfo.github, icon: GithubIcon, label: 'GitHub' },
            { href: personalInfo.linkedin, icon: LinkedinIcon, label: 'LinkedIn' },
            { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-full border border-gray-700 bg-gray-800/50 flex items-center justify-center text-gray-400 hover:border-[#ff4d4f] hover:text-[#ff4d4f] hover:bg-[#ff4d4f]/10 hover:shadow-[0_0_20px_rgba(255,77,79,0.3)] transition-all duration-300"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-[#ff4d4f] text-white font-semibold rounded-xl hover:bg-[#e03e3e] shadow-[0_0_25px_rgba(255,77,79,0.4)] hover:shadow-[0_0_40px_rgba(255,77,79,0.7)] transition-all duration-300"
          >
            Contact Me
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href={personalInfo.cvUrl}
            download
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-[#ff4d4f] hover:text-[#ff4d4f] hover:bg-[#ff4d4f]/10 transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-gray-600 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-1 rounded-full bg-[#ff4d4f]"
          />
        </div>
      </motion.div>
    </section>
  )
}
