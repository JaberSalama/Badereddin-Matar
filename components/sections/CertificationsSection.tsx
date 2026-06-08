'use client'
import { motion } from 'framer-motion'
import { Award, Clock } from 'lucide-react'
import { certifications } from '@/data/profile'
import { staggerContainer, staggerItem } from '@/utils/animations'
import SectionTitle from '@/components/ui/SectionTitle'

export default function CertificationsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Training & Courses"
          title="Certifications"
          description="Continuous learning through professional training programs and industry certifications."
          dark
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={staggerItem}
              className="group bg-[#1f2937] rounded-2xl p-6 border border-gray-700 hover:border-[#ff4d4f]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,77,79,0.15)]"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#ff4d4f]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ff4d4f]/20 transition-colors border border-[#ff4d4f]/20">
                  <Award className="w-5 h-5 text-[#ff4d4f]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm leading-snug mb-2 line-clamp-2">
                    {cert.name}
                  </h3>
                  <p className="text-[#ff4d4f] text-xs font-medium mb-2">{cert.issuer}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    {cert.hours && (
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {cert.hours} hours
                      </span>
                    )}
                    {cert.year && <span>{cert.year}</span>}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
