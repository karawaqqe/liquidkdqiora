import { motion } from 'framer-motion'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { Reveal } from '../ui/reveal/Reveal'
import styles from './about.module.css'

export function About({ copy }) {
  const isLiteMotion = useMediaQuery('(max-width: 900px), (pointer: coarse)', false)
  const statVariants = {
    hidden: isLiteMotion ? { opacity: 0, y: 16 } : { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="section">
      <div className="sectionHeader">
        <Reveal>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2>{copy.title}</h2>
        </Reveal>
      </div>
      <div className={styles.aboutGrid}>
        <Reveal className={styles.text}>
          <p>{copy.body}</p>
          <p>{copy.bodyTwo}</p>
          <div className={styles.aiNote}>
            <span>AI workflow</span>
            <p>{copy.ai}</p>
          </div>
        </Reveal>
        <motion.div
          className={styles.stats}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          style={{ filter: 'none' }}
        >
          {copy.stats.map(([number, label]) => (
            <motion.div
              className={styles.stat}
              key={label}
              variants={statVariants}
              transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
              style={{ filter: 'none' }}
            >
              <span>{number}</span>
              <p>{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
