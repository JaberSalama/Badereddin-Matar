'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Server, Monitor, Layers, GitBranch } from 'lucide-react'
import { skillCategories } from '@/data/profile'
import { staggerContainer, staggerItem } from '@/utils/animations'
import SectionTitle from '@/components/ui/SectionTitle'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Server,
  Monitor,
  Layers,
  GitBranch,
}

export default function SkillsSection() {
  const [active, setActive] = useState(0)
  const category = skillCategories[active]
  const Icon = iconMap[category.icon] ?? Server

  return (
    <section id="skills" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="My Skills"
          title="Technical Expertise"
          description="A comprehensive overview of the technologies and methodologies I work with daily."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((cat, i) => {
            const CatIcon = iconMap[cat.icon] ?? Server
            return (
              <button
                key={cat.name}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  active === i
                    ? 'bg-[#ff4d4f] text-white shadow-[0_0_20px_rgba(255,77,79,0.4)]'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-[#ff4d4f]/50 hover:text-[#ff4d4f]'
                }`}
              >
                <CatIcon className="w-4 h-4" />
                {cat.name}
              </button>
            )
          })}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#ff4d4f]/10 flex items-center justify-center">
              <Icon className="w-6 h-6 text-[#ff4d4f]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
              <p className="text-slate-400 text-sm">{category.skills.length} skills</p>
            </div>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {category.skills.map((skill) => (
              <motion.div key={skill.name} variants={staggerItem}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-800">{skill.name}</span>
                  <span className="text-sm font-bold text-[#ff4d4f]">{skill.level}%</span>
                </div>
                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, #ff4d4f 0%, #ff7875 100%)`,
                      boxShadow: '0 0 8px rgba(255,77,79,0.4)',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {['Laravel', 'MySQL', 'Redis', 'PHP', 'REST APIs', 'TDD', 'Clean Architecture', 'Git'].map((tech) => (
            <motion.div
              key={tech}
              variants={staggerItem}
              className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-center text-sm font-semibold text-slate-700 hover:border-[#ff4d4f]/40 hover:text-[#ff4d4f] hover:shadow-sm transition-all duration-200"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
