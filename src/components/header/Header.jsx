import { motion } from 'framer-motion'
import styles from './header.module.css'

export function Header({ copy, language, theme, onLanguageChange, onThemeChange, activeIndex, onNavigate }) {
  const activeLabel = activeIndex === 0 ? 'Intro' : copy.nav[activeIndex - 1]

  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.15 }}
    >
      <button className={styles.logo} type="button" onClick={() => onNavigate(0)} aria-label="Portfolio home">
        <span>LIQ</span>
      </button>
      <nav className={styles.nav} aria-label="Main navigation">
        {copy.nav.map((item, index) => (
          <button
            key={item}
            type="button"
            className={activeIndex === index + 1 ? styles.current : ''}
            onClick={() => onNavigate(index + 1)}
            aria-current={activeIndex === index + 1 ? 'page' : undefined}
          >
            {item}
          </button>
        ))}
      </nav>
      <span className={styles.sectionMarker} aria-hidden="true">
        {activeLabel}
      </span>
      <div className={styles.controls}>
        <button
          className={styles.theme}
          type="button"
          onClick={(event) => onThemeChange(event)}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          aria-pressed={theme === 'light'}
        >
          {theme === 'light' ? 'LT' : 'DK'}
        </button>
        <div className={styles.language} aria-label="Language switcher">
          {['pl', 'ru'].map((item) => (
            <button
              key={item}
              type="button"
              className={language === item ? styles.active : ''}
              onClick={() => onLanguageChange(item)}
              aria-pressed={language === item}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </motion.header>
  )
}
