import { motion } from 'framer-motion'
import { projectVisuals } from '../../data/projects'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { ProjectPreview } from './ProjectPreview'
import { Reveal } from '../ui/reveal/Reveal'
import styles from './projects.module.css'

export function Projects({ copy }) {
  const isLiteMotion = useMediaQuery('(max-width: 900px), (pointer: coarse)', false)
  const revealState = isLiteMotion
    ? {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 42 },
        visible: { opacity: 1, y: 0 },
      }

  return (
    <section id="projects" className="section">
      <div className="sectionHeader">
        <Reveal>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2>{copy.title}</h2>
        </Reveal>
      </div>
      <div className={styles.projects}>
        {copy.items.map((project, index) => (
          <motion.article
            className={styles.project}
            key={project.title}
            initial={revealState.hidden}
            whileInView={revealState.visible}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
            whileHover={isLiteMotion ? undefined : { y: -10 }}
            data-cursor="active"
            style={{ filter: 'none' }}
          >
            <ProjectPreview visual={{ ...projectVisuals[project.key], metrics: project.metrics }} />
            <div className={styles.projectBody}>
              <div>
                <span className={styles.count}>{String(index + 1).padStart(2, '0')}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className={styles.tags}>
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <a href={project.url} className={styles.projectLink} target="_blank" rel="noreferrer">
                {copy.cta}
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
