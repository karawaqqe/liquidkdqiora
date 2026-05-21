import { motion } from 'framer-motion'
import { workflowSteps } from '../data/portfolio'
import { Reveal } from './Reveal'
import styles from './Workflow.module.css'

export function Workflow({ copy }) {
  return (
    <section id="workflow" className={`section ${styles.workflowSection}`}>
      <div className="sectionHeader">
        <Reveal>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2>{copy.title}</h2>
        </Reveal>
      </div>
      <div className={styles.timeline}>
        <motion.div
          className={styles.feature}
          initial={{ opacity: 0, y: 28, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>Pipeline</span>
          <strong>From signal to shipped interface</strong>
        </motion.div>
        {workflowSteps.map((step, index) => (
          <motion.article
            className={styles.step}
            key={step}
            initial={{ opacity: 0, y: 28, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-90px' }}
            transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
            whileHover={{ y: -6, scale: 1.015 }}
            data-cursor="active"
          >
            <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{copy.items[step]}</h3>
              <p>{index < 2 ? 'Define' : index < 4 ? 'Shape' : index < 6 ? 'Build' : 'Launch'}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
