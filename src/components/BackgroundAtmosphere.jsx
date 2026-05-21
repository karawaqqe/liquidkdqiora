import styles from './BackgroundAtmosphere.module.css'

export function BackgroundAtmosphere() {
  return (
    <div className={styles.atmosphere} aria-hidden="true">
      <div className={styles.grid} />
      <div className={styles.lightCurtain} />
      <div className={styles.stageShutters} />
      <div className={styles.luminousHeart} />
      <div className={styles.haloRings} />
      <div className={styles.specularSweep} />
      <div className={styles.glassFrame} />
      <div className={`${styles.light} ${styles.lightOne}`} />
      <div className={`${styles.light} ${styles.lightTwo}`} />
      <div className={`${styles.light} ${styles.lightThree}`} />
      <div className={styles.noise} />
      <div className={styles.vignette} />
    </div>
  )
}
