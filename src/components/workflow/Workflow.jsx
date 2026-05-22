import { motion } from 'framer-motion'
import { workflowSteps } from '../../data/portfolio'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { Reveal } from '../ui/reveal/Reveal'
import styles from './workflow.module.css'

export function Workflow({ copy }) {
  const isLiteMotion = useMediaQuery('(max-width: 900px), (pointer: coarse)', false)
  const revealState = isLiteMotion
    ? {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0 },
      }

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
          initial={revealState.hidden}
          whileInView={revealState.visible}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ filter: 'none' }}
        >
          <span>{copy.featureLabel}</span>
          <strong>{copy.featureTitle}</strong>
        </motion.div>
        {workflowSteps.map((step, index) => (
          <motion.article
            className={styles.step}
            key={step}
            initial={revealState.hidden}
            whileInView={revealState.visible}
            viewport={{ once: true, margin: '-90px' }}
            transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
            whileHover={isLiteMotion ? undefined : { y: -6, scale: 1.015 }}
            data-cursor="active"
            style={{ filter: 'none' }}
          >
            <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{copy.items[step]}</h3>
              <p>{copy.stageLabels[index < 2 ? 'define' : index < 4 ? 'shape' : index < 6 ? 'build' : 'launch']}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
