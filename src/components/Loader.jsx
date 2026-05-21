import { motion } from 'framer-motion'
import styles from './Loader.module.css'

export function Loader() {
  return (
    <motion.div
      className={styles.loader}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(16px)' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <motion.div
        className={styles.mark}
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <span>LIQ</span>
      </motion.div>
      <motion.div className={styles.line} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1 }} />
    </motion.div>
  )
}
