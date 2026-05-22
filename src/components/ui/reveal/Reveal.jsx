import { motion } from 'framer-motion'
import { useMediaQuery } from '../../../hooks/useMediaQuery'

export function Reveal({ children, className, delay = 0, as = 'div' }) {
  const Component = motion[as]
  const isLiteMotion = useMediaQuery('(max-width: 900px), (pointer: coarse)', false)

  return (
    <Component
      className={className}
      initial={isLiteMotion ? { opacity: 0, y: 18 } : { opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-90px' }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
      style={{ filter: 'none' }}
    >
      {children}
    </Component>
  )
}
