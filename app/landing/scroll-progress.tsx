'use client'

import { motion, useScroll } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[6px] rounded-full z-[9999] bg-transparent"
      role="progressbar"
      aria-label="Page scroll progress"
    >
      <motion.div
        className="
          h-full
          bg-green-600
        "
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
      />
    </motion.div>
  )
}
