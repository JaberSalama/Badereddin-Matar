'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PageLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[99999] bg-[#0f172a] flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-16 h-16 rounded-full bg-[#ff4d4f] flex items-center justify-center text-white text-2xl font-bold font-serif shadow-[0_0_40px_rgba(255,77,79,0.6)]">
              BM
            </div>
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-2 h-2 rounded-full bg-[#ff4d4f]"
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
