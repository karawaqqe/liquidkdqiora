import { motion } from 'framer-motion'
import { skillItems } from '../data/portfolio'
import { Reveal } from './Reveal'
import styles from './Skills.module.css'

export function Skills({ copy }) {
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
      >
        {skillItems.map((skill, index) => (
          <motion.article
            className={styles.skill}
            key={skill}
            variants={{
              hidden: { opacity: 0, y: 24, filter: 'blur(12px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
            }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, scale: 1.025 }}
            data-cursor="active"
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{skill}</h3>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
