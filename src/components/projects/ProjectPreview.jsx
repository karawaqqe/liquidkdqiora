import styles from './projectPreview.module.css'
import icecreamImage from '../../assets/projects/icecream.jpg'
import luxecoatImage from '../../assets/projects/luxecoat.jpg'
import marshmallowsImage from '../../assets/projects/marshmallows.jpg'

const projectImages = {
  icecream: icecreamImage,
  luxecoat: luxecoatImage,
  marshmallows: marshmallowsImage,
}

export function ProjectPreview({ visual }) {
  return (
    <div className={`${styles.preview} ${styles[visual.className]}`} aria-hidden="true">
      <div className={styles.browser}>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.canvas}>
        <div className={styles.heroLine} />
        <div className={styles.titleLine} />
        <div className={styles.smallLine} />
        <div className={styles.imageBlock}>
          <img src={projectImages[visual.className]} alt="" loading="lazy" decoding="async" />
        </div>
        <div className={styles.sidePanel}>
          {visual.metrics.map((metric) => (
            <span key={metric}>{metric}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
