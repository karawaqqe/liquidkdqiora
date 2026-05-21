import { motion, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion'
import { MagneticButton } from './MagneticButton'
import portraitImage from '../assets/me.jpg'
import styles from './Hero.module.css'

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
  hidden: { opacity: 0, y: 34, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Hero({ copy, onContactOpen }) {
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
      <motion.div className={styles.copy} variants={container} initial="hidden" animate="visible">
        <motion.p className="eyebrow" variants={item}>
          {copy.eyebrow}
        </motion.p>
        <motion.h1 variants={item}>{copy.title}</motion.h1>
        <motion.div className={styles.animatedLine} variants={item} />
        <motion.p className={styles.subtitle} variants={item}>
          {copy.subtitle}
        </motion.p>
        <motion.p className={styles.description} variants={item}>
          {copy.description}
        </motion.p>
        <motion.div className={styles.actions} variants={item}>
          <MagneticButton href="#projects">{copy.primary}</MagneticButton>
          <MagneticButton onClick={onContactOpen} variant="secondary">
            {copy.secondary}
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.visualWrap}
        initial={{ opacity: 0, x: 42, filter: 'blur(18px)' }}
        animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1.45 }}
        style={{ x: cardX, y: cardY, rotateX, rotateY }}
      >
        <motion.div className={styles.sheen} style={{ background: sheen }} />
        <motion.div className={styles.profileCard} data-cursor="active" animate={{ y: [0, -14, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
          <div className={styles.avatar}>
            <img src={portraitImage} alt="" />
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
            <span>2026</span>
            <span>Remote / EU</span>
          </div>
        </motion.div>
        <motion.div className={`${styles.floatPanel} ${styles.floatPanelOne}`} animate={{ y: [0, 18, 0], opacity: [0.42, 0.78, 0.42] }} transition={{ duration: 5.4, repeat: Infinity }} />
        <motion.div className={`${styles.floatPanel} ${styles.floatPanelTwo}`} animate={{ x: [0, -16, 0], opacity: [0.32, 0.7, 0.32] }} transition={{ duration: 6.2, repeat: Infinity }} />
      </motion.div>
    </section>
  )
}
