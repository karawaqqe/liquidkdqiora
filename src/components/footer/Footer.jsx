import styles from './footer.module.css'

export function Footer({ copy }) {
  return (
    <footer className={styles.footer}>
      <p>{copy.signature}</p>
      <span>{copy.location}</span>
    </footer>
  )
}
