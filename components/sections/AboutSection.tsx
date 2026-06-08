'use client'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Download, Briefcase, CheckCircle } from 'lucide-react'
import { personalInfo, stats } from '@/data/profile'
import { fadeLeft, fadeRight, staggerContainer, staggerItem } from '@/utils/animations'
import SectionTitle from '@/components/ui/SectionTitle'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="About Me"
          title="Who I Am"
          description="A passionate developer dedicated to building systems that scale, perform, and last."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeLeft}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden relative">
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, #1f2937 0%, #111827 40%, #0f172a 100%)',
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <span className="text-7xl sm:text-8xl font-bold font-serif text-white/90 leading-none">
                    BM
                  </span>
                  <span className="text-[#ff4d4f] text-sm font-medium tracking-widest uppercase px-3 py-1 rounded-full border border-[#ff4d4f]/30 bg-[#ff4d4f]/10">
                    Laravel Dev
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff4d4f]/5 via-transparent to-[#3b82f6]/5" />
              </div>

              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-[#ff4d4f] text-white px-3 py-2 rounded-xl text-xs font-bold shadow-[0_0_20px_rgba(255,77,79,0.5)]"
              >
                4+ Years
              </motion.div>
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 bg-gray-900 text-white px-3 py-2 rounded-xl text-xs font-bold shadow-xl border border-gray-700"
              >
                15+ Projects
              </motion.div>

              <div className="absolute inset-0 rounded-2xl border-2 border-[#ff4d4f]/20 translate-x-3 translate-y-3 -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeRight}
          >
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 mb-4">
              Full-Stack Laravel Developer{' '}
              <span className="text-[#ff4d4f]">(Backend-Focused)</span>
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">{personalInfo.fullBio}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                { icon: Mail, label: 'Email', value: personalInfo.email },
                { icon: Phone, label: 'Phone', value: personalInfo.phone },
                { icon: MapPin, label: 'Location', value: personalInfo.location },
                { icon: Briefcase, label: 'Status', value: personalInfo.availability },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#ff4d4f]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#ff4d4f]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400 font-medium">{label}</p>
                    <p className="text-sm text-slate-700 font-semibold truncate">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              {['Clean Architecture', 'TDD', 'SOLID Principles', 'Performance Opt.'].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-[#ff4d4f] flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <a
              href={personalInfo.cvUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff4d4f] text-white font-semibold rounded-xl hover:bg-[#e03e3e] shadow-[0_0_20px_rgba(255,77,79,0.35)] hover:shadow-[0_0_30px_rgba(255,77,79,0.6)] transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#ff4d4f]/30 hover:shadow-[0_0_30px_rgba(255,77,79,0.1)] transition-all duration-300 group"
            >
              <p className="text-4xl sm:text-5xl font-bold text-[#ff4d4f] mb-2 font-serif">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
