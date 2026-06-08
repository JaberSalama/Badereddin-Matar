'use client'
import { motion } from 'framer-motion'
import { fadeUp } from '@/utils/animations'

interface Props {
  subtitle: string
  title: string
  description?: string
  dark?: boolean
  center?: boolean
}

export default function SectionTitle({ subtitle, title, description, dark = false, center = true }: Props) {
  return (
    <motion.div
      className={`mb-14 ${center ? 'text-center' : ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-[#ff4d4f] mb-3">
        {subtitle}
      </span>
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-4 ${dark ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl text-base sm:text-lg leading-relaxed ${center ? 'mx-auto' : ''} ${dark ? 'text-gray-400' : 'text-slate-500'}`}>
          {description}
        </p>
      )}
      <div className={`mt-5 flex gap-2 ${center ? 'justify-center' : ''}`}>
        <div className="w-12 h-1 rounded-full bg-[#ff4d4f]" />
        <div className="w-3 h-1 rounded-full bg-[#ff4d4f] opacity-50" />
        <div className="w-1.5 h-1 rounded-full bg-[#ff4d4f] opacity-30" />
      </div>
    </motion.div>
  )
}
