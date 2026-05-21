import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './MagneticButton.module.css'

export function MagneticButton({ children, href, onClick, variant = 'primary', className = '' }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - bounds.left - bounds.width / 2
    const y = event.clientY - bounds.top - bounds.height / 2
    setOffset({ x: x * 0.18, y: y * 0.26 })
  }

  const sharedProps = {
    className: `${styles.button} ${styles[variant]} ${className}`,
    onMouseMove: handleMove,
    onMouseLeave: () => setOffset({ x: 0, y: 0 }),
    onClick,
    animate: offset,
    transition: { type: 'spring', stiffness: 180, damping: 18, mass: 0.35 },
    whileTap: { scale: 0.97 },
  }

  if (!href) {
    return (
      <motion.button type="button" {...sharedProps}>
        <span>{children}</span>
      </motion.button>
    )
  }

  return (
    <motion.a href={href} {...sharedProps}>
      <span>{children}</span>
    </motion.a>
  )
}
