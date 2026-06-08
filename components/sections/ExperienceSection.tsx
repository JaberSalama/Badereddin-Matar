'use client'
import { motion } from 'framer-motion'
import { MapPin, Wifi, Building2 } from 'lucide-react'
import { experiences } from '@/data/profile'
import { staggerContainer, staggerItem } from '@/utils/animations'
import SectionTitle from '@/components/ui/SectionTitle'

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#111827]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Work History"
          title="Experience"
          description="A track record of delivering high-impact solutions for teams across the globe."
          dark
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="relative"
        >
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#ff4d4f]/80 via-[#ff4d4f]/30 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                variants={staggerItem}
                className="relative sm:pl-16"
              >
                <div className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 border-[#ff4d4f] bg-[#111827] hidden sm:block z-10">
                  {exp.current && (
                    <span className="absolute inset-0.5 rounded-full bg-[#ff4d4f] animate-pulse" />
                  )}
                </div>

                <div className="bg-[#1f2937] rounded-2xl p-6 border border-gray-700 hover:border-[#ff4d4f]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,77,79,0.1)]">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 rounded-full bg-[#ff4d4f]/20 text-[#ff4d4f] text-xs font-semibold border border-[#ff4d4f]/30">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-[#ff4d4f] font-semibold text-sm">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                      <span className="text-gray-300 text-sm font-medium bg-gray-800 px-3 py-1 rounded-lg border border-gray-700">
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 text-gray-500 text-xs">
                        {exp.type === 'remote' ? (
                          <Wifi className="w-3 h-3" />
                        ) : (
                          <Building2 className="w-3 h-3" />
                        )}
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-gray-400 text-sm leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d4f] mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
