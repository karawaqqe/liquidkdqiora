import { motion } from 'framer-motion'
import { skillItems } from '../../data/portfolio'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { Reveal } from '../ui/reveal/Reveal'
import styles from './skills.module.css'

export function Skills({ copy }) {
  const isLiteMotion = useMediaQuery('(max-width: 900px), (pointer: coarse)', false)
  const skillVariants = {
    hidden: isLiteMotion ? { opacity: 0, y: 16 } : { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="section">
      <div className="sectionHeader">
        <Reveal>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2>{copy.title}</h2>
        </Reveal>
      </div>
      <motion.div
        className={styles.skills}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-90px' }}
        variants={{ visible: { transition: { staggerChildren: 0.055 } } }}
        style={{ filter: 'none' }}
      >
        {skillItems.map((skill, index) => (
          <motion.article
            className={styles.skill}
            key={skill}
            variants={skillVariants}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            whileHover={isLiteMotion ? undefined : { y: -8, scale: 1.025 }}
            data-cursor="active"
            style={{ filter: 'none' }}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{skill}</h3>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
