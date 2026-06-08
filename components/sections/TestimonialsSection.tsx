'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '@/data/profile'
import { fadeUp } from '@/utils/animations'
import SectionTitle from '@/components/ui/SectionTitle'

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const total = testimonials.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  const t = testimonials[current]

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#111827]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="What They Say"
          title="Testimonials"
          description="Feedback from the clients and teams I've had the pleasure of working with."
          dark
        />

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-[#1f2937] rounded-2xl p-8 sm:p-10 border border-gray-700 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff4d4f]/30 to-[#1f2937] flex items-center justify-center border-2 border-[#ff4d4f]/30 text-[#ff4d4f] text-xl font-bold shadow-[0_0_20px_rgba(255,77,79,0.2)]">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
              </div>

              <Quote className="w-8 h-8 text-[#ff4d4f]/30 mx-auto mb-4" />

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto italic">
                &ldquo;{t.content}&rdquo;
              </p>

              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-white font-bold text-lg">{t.name}</p>
              <p className="text-[#ff4d4f] text-sm font-medium">{t.role}</p>
              <p className="text-gray-500 text-sm">{t.company}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full bg-[#1f2937] border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#ff4d4f] hover:text-[#ff4d4f] transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? 'w-6 h-2.5 bg-[#ff4d4f]'
                      : 'w-2.5 h-2.5 bg-gray-700 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full bg-[#1f2937] border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#ff4d4f] hover:text-[#ff4d4f] transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
