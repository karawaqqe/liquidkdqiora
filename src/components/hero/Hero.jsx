import { motion, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { MagneticButton } from '../ui/magnetic-button/MagneticButton'
import portraitImage from '../../assets/me.jpg'
import styles from './hero.module.css'

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 1.25,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Hero({ copy, onContactOpen }) {
  const canUseParallax = useMediaQuery('(pointer: fine) and (min-width: 901px)', false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const cardX = useTransform(mouseX, [-0.5, 0.5], [-18, 18])
  const cardY = useTransform(mouseY, [-0.5, 0.5], [16, -16])
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [4, -4])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5])
  const sheenX = useTransform(mouseX, [-0.5, 0.5], [20, 80])
  const sheenY = useTransform(mouseY, [-0.5, 0.5], [20, 80])
  const sheen = useMotionTemplate`radial-gradient(circle at ${sheenX}% ${sheenY}%, rgba(255,255,255,0.24), transparent 35%)`

  const handleMouseMove = (event) => {
    if (!canUseParallax) {
      return
    }

    const bounds = event.currentTarget.getBoundingClientRect()
    mouseX.set((event.clientX - bounds.left) / bounds.width - 0.5)
    mouseY.set((event.clientY - bounds.top) / bounds.height - 0.5)
  }

  return (
    <section
      id="hero"
      className={styles.hero}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0)
        mouseY.set(0)
      }}
    >
      <motion.div className={styles.copy} variants={container} initial="hidden" animate="visible" style={{ filter: 'none' }}>
        <motion.p className="eyebrow" variants={item}>
          {copy.eyebrow}
        </motion.p>
        <motion.h1 variants={item} style={{ filter: 'none' }}>
          {copy.title}
        </motion.h1>
        <motion.div className={styles.animatedLine} variants={item} style={{ filter: 'none' }} />
        <motion.p className={styles.subtitle} variants={item} style={{ filter: 'none' }}>
          {copy.subtitle}
        </motion.p>
        <motion.p className={styles.description} variants={item} style={{ filter: 'none' }}>
          {copy.description}
        </motion.p>
        <motion.div className={styles.actions} variants={item} style={{ filter: 'none' }}>
          <MagneticButton href="#projects">{copy.primary}</MagneticButton>
          <MagneticButton onClick={onContactOpen} variant="secondary">
            {copy.secondary}
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.visualWrap}
        initial={{ opacity: 0, x: 42 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1.45 }}
        style={canUseParallax ? { x: cardX, y: cardY, rotateX, rotateY, filter: 'none' } : { filter: 'none' }}
      >
        {canUseParallax && <motion.div className={styles.sheen} style={{ background: sheen }} />}
        <motion.div
          className={styles.profileCard}
          data-cursor="active"
          animate={canUseParallax ? { y: [0, -14, 0] } : undefined}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className={styles.avatar}>
            <img src={portraitImage} alt="" fetchPriority="high" decoding="async" />
            <div className={styles.avatarInner}>
              <span>LIQ</span>
            </div>
          </div>
          <div className={styles.cardMeta}>
            <span>{copy.cardLabel}</span>
            <h2>{copy.cardTitle}</h2>
            <p>{copy.cardMeta}</p>
          </div>
          <div className={styles.cardFooter}>
            <span>{copy.cardFooterLeft}</span>
            <span>{copy.cardFooterRight}</span>
          </div>
        </motion.div>
        {canUseParallax && (
          <>
            <motion.div className={`${styles.floatPanel} ${styles.floatPanelOne}`} animate={{ y: [0, 18, 0], opacity: [0.42, 0.78, 0.42] }} transition={{ duration: 5.4, repeat: Infinity }} />
            <motion.div className={`${styles.floatPanel} ${styles.floatPanelTwo}`} animate={{ x: [0, -16, 0], opacity: [0.32, 0.7, 0.32] }} transition={{ duration: 6.2, repeat: Infinity }} />
          </>
        )}
      </motion.div>
    </section>
  )
}
