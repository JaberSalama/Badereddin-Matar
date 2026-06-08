'use client'
import { motion } from 'framer-motion'
import { Calendar, Briefcase, Users, Award } from 'lucide-react'
import { stats } from '@/data/profile'
import { staggerContainer, staggerItem } from '@/utils/animations'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calendar,
  Briefcase,
  Users,
  Award,
}

export default function StatsSection() {
  return (
    <section className="py-16 bg-[#ff4d4f] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.5) 20px, rgba(255,255,255,0.5) 21px)',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat) => {
            const Icon = iconMap[stat.icon] ?? Award
            return (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="flex flex-col items-center text-center py-4 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-4xl sm:text-5xl font-bold text-white font-serif leading-none mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-red-100 text-sm font-medium">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
