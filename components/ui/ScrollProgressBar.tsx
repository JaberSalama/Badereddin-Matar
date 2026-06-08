'use client'
import { motion } from 'framer-motion'
import { useScrollProgress } from '@/hooks/useScrollProgress'

export default function ScrollProgressBar() {
  const scaleX = useScrollProgress()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[#ff4d4f] origin-left z-[9999]"
      style={{ scaleX }}
    />
  )
}
