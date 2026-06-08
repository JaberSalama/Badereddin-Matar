'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { easeOutCubic } from '@/lib/utils'

interface Props {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
}

export default function AnimatedCounter({ value, suffix = '', prefix = '', duration = 1800 }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const startTime = performance.now()

    function step(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.round(value * easeOutCubic(progress)))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}
