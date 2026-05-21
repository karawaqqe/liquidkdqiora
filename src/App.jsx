import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { PortfolioPage } from './pages/PortfolioPage'
import { Loader } from './components/Loader'
import { CustomCursor } from './components/CustomCursor'
import { BackgroundAtmosphere } from './components/BackgroundAtmosphere'
import { ThemeTransition } from './components/ThemeTransition'
import { translations } from './data/translations'
import './styles/global.css'

function App() {
  const [language, setLanguage] = useState('pl')
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'light'
    document.documentElement.dataset.theme = savedTheme
    return savedTheme
  })
  const [isLoading, setIsLoading] = useState(true)
  const [themeTransition, setThemeTransition] = useState(null)

  useEffect(() => {
    document.documentElement.lang = language

    const loaderTimer = window.setTimeout(() => {
      setIsLoading(false)
    }, 1250)

    return () => window.clearTimeout(loaderTimer)
  }, [language])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const handleThemeChange = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    const transition = {
      id: window.crypto?.randomUUID?.() || String(Date.now()),
      target: nextTheme,
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    }

    document.documentElement.classList.add('theme-is-transitioning')
    setThemeTransition(transition)

    window.setTimeout(() => {
      setTheme(nextTheme)
    }, 120)

    window.setTimeout(() => {
      setThemeTransition(null)
      document.documentElement.classList.remove('theme-is-transitioning')
    }, 640)
  }

  return (
    <>
      <BackgroundAtmosphere />
      <ThemeTransition transition={themeTransition} />
      <CustomCursor />
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>
      <PortfolioPage
        copy={translations[language]}
        language={language}
        theme={theme}
        onLanguageChange={setLanguage}
        onThemeChange={handleThemeChange}
      />
    </>
  )
}

export default App
