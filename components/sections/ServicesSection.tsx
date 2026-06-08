'use client'
import { motion } from 'framer-motion'
import { Server, Globe, BarChart3, Zap, ShoppingCart, Code, CheckCircle } from 'lucide-react'
import { services } from '@/data/profile'
import { staggerContainer, staggerItem } from '@/utils/animations'
import SectionTitle from '@/components/ui/SectionTitle'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Server,
  Globe,
  BarChart3,
  Zap,
  ShoppingCart,
  Code,
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="What I Do"
          title="My Services"
          description="Specialized in backend systems, scalable APIs, and full-stack solutions for businesses of all sizes."
          dark
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Code
            return (
              <motion.div
                key={service.id}
                variants={staggerItem}
                className="group relative p-6 rounded-2xl bg-[#1f2937] border border-gray-700 hover:border-[#ff4d4f]/50 transition-all duration-400 hover:shadow-[0_0_40px_rgba(255,77,79,0.15)] overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff4d4f]/0 to-transparent group-hover:via-[#ff4d4f]/50 transition-all duration-500" />

                <div className="w-12 h-12 rounded-xl bg-[#ff4d4f]/10 flex items-center justify-center mb-5 group-hover:bg-[#ff4d4f]/20 transition-colors border border-[#ff4d4f]/20">
                  <Icon className="w-6 h-6 text-[#ff4d4f]" />
                </div>

                <h3 className="text-white font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-3.5 h-3.5 text-[#ff4d4f] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#ff4d4f] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
