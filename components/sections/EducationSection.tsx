'use client'
import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'
import { educations } from '@/data/profile'
import { staggerContainer, staggerItem, fadeUp } from '@/utils/animations'
import SectionTitle from '@/components/ui/SectionTitle'

export default function EducationSection() {
  return (
    <section id="education" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Academic Background"
          title="Education"
          description="The academic foundation that underpins my engineering approach and problem-solving mindset."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="space-y-6"
        >
          {educations.map((edu) => (
            <motion.div
              key={edu.id}
              variants={staggerItem}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#ff4d4f]/10 border-2 border-[#ff4d4f]/20 flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-[#ff4d4f]" />
              </div>

              <div className="flex-1 bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#ff4d4f]/30 hover:shadow-[0_0_30px_rgba(255,77,79,0.08)] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-gray-900 font-bold text-xl">
                      {edu.degree}
                    </h3>
                    <p className="text-[#ff4d4f] font-semibold text-base">{edu.field}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 text-sm font-medium border border-slate-200 flex-shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.year}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                  <MapPin className="w-3.5 h-3.5 text-[#ff4d4f]" />
                  <span className="font-medium text-slate-700">{edu.institution}</span>
                  <span>·</span>
                  <span>{edu.location}</span>
                </div>

                {edu.description && (
                  <p className="text-slate-500 text-sm leading-relaxed">{edu.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 text-center"
        >
          <p className="text-slate-600 text-sm mb-1">
            In addition to formal education, I have completed
          </p>
          <p className="text-gray-900 font-bold text-2xl mb-1">
            289+ hours
          </p>
          <p className="text-slate-500 text-sm">
            of professional training across Laravel, Java, Flutter, PHP, and Web Development.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
