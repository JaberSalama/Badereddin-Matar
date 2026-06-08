'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Code } from 'lucide-react'
import { projects } from '@/data/profile'
import { staggerContainer, staggerItem } from '@/utils/animations'
import SectionTitle from '@/components/ui/SectionTitle'

const categories = ['All', 'Backend', 'Full-Stack', 'ERP', 'POS']

export default function PortfolioSection() {
  const [filter, setFilter] = useState('All')

  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="My Work"
          title="Portfolio"
          description="A selection of projects showcasing real-world impact and technical depth across multiple domains."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'bg-[#ff4d4f] text-white shadow-[0_0_20px_rgba(255,77,79,0.4)]'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                layout
                className="group relative bg-white rounded-2xl border border-slate-200 hover:border-[#ff4d4f]/40 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_40px_rgba(255,77,79,0.15)] flex flex-col"
              >
                <div
                  className="h-32 flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff4d4f]/10 via-transparent to-[#3b82f6]/10 group-hover:from-[#ff4d4f]/20 transition-all duration-500" />
                  <Code className="w-10 h-10 text-[#ff4d4f]/70 group-hover:text-[#ff4d4f] transition-colors duration-300" />
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-[#ff4d4f]/20 text-[#ff4d4f] text-xs font-semibold border border-[#ff4d4f]/30">
                    {project.category}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-gray-900 font-bold text-base mb-2 group-hover:text-[#ff4d4f] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                    {project.description}
                  </p>

                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="space-y-1 mb-4">
                      {project.highlights.slice(0, 2).map((h) => (
                        <li key={h} className="text-xs text-slate-400 flex items-start gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#ff4d4f] mt-1.5 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-400 text-xs">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
