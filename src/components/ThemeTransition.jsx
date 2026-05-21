import styles from './ThemeTransition.module.css'

export function ThemeTransition({ transition }) {
  if (!transition) {
    return null
  }

  return (
    <div
      key={transition.id}
      className={`${styles.transition} ${transition.target === 'light' ? styles.toLight : styles.toDark}`}
      style={{ '--theme-x': `${transition.x}px`, '--theme-y': `${transition.y}px` }}
      aria-hidden="true"
    />
  )
}
