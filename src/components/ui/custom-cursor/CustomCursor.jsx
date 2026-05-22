import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import styles from './customCursor.module.css'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 15, y: 15 })
  const [isActive, setIsActive] = useState(false)
  const canUseCursor = useMediaQuery('(pointer: fine) and (min-width: 901px)', false)

  useEffect(() => {
    if (!canUseCursor) {
      return undefined
    }

    const handleMove = (event) => setPosition({ x: event.clientX, y: event.clientY })
    const handleOver = (event) => {
      setIsActive(Boolean(event.target.closest('a, button, [data-cursor="active"]')))
    }

    window.addEventListener('pointermove', handleMove)
    document.addEventListener('mouseover', handleOver)

    return () => {
      window.removeEventListener('pointermove', handleMove)
      document.removeEventListener('mouseover', handleOver)
    }
  }, [canUseCursor])

  if (!canUseCursor) {
    return null
  }

  return (
    <>
      <motion.div
        className={`${styles.halo} ${isActive ? styles.active : ''}`}
        animate={{ x: position.x - 42, y: position.y - 42, scale: isActive ? 1.35 : 1 }}
        transition={{ type: 'spring', stiffness: 170, damping: 22, mass: 0.45 }}
        aria-hidden="true"
      />
      <motion.div
        className={`${styles.cursor} ${isActive ? styles.active : ''}`}
        animate={{ x: position.x - 7, y: position.y - 7, rotate: isActive ? 45 : 0 }}
        transition={{ type: 'spring', stiffness: 560, damping: 34, mass: 0.24 }}
        aria-hidden="true"
      />
    </>
  )
}
