import { motion } from 'framer-motion'
import { projectVisuals } from '../data/portfolio'
import { ProjectPreview } from './ProjectPreview'
import { Reveal } from './Reveal'
import styles from './Projects.module.css'

export function Projects({ copy }) {
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
            initial={{ opacity: 0, y: 42, filter: 'blur(14px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
            whileHover={{ y: -10 }}
            data-cursor="active"
          >
            <ProjectPreview visual={projectVisuals[project.key]} />
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
