import { Reveal } from './Reveal'
import { MagneticButton } from './MagneticButton'
import styles from './Contact.module.css'

export function Contact({ copy, onContactOpen }) {
  return (
    <section id="contact" className={`section ${styles.contactSection}`}>
      <Reveal className={styles.contact}>
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2>{copy.title}</h2>
        <p>{copy.description}</p>
        <div className={styles.contactActions}>
          <MagneticButton onClick={onContactOpen}>{copy.button}</MagneticButton>
          <a className={styles.email} href={`mailto:${copy.email}`}>
            {copy.email}
          </a>
        </div>
      </Reveal>
    </section>
  )
}
