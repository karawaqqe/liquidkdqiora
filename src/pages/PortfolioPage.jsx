import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { Projects } from '../components/Projects'
import { Workflow } from '../components/Workflow'
import { Contact } from '../components/Contact'
import { ContactModal } from '../components/ContactModal'
import { Footer } from '../components/Footer'
import styles from './PortfolioPage.module.css'

export function PortfolioPage({ copy, language, theme, onLanguageChange, onThemeChange }) {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollerRef = useRef(null)
  const wheelIntentRef = useRef(0)
  const wheelLockRef = useRef(false)

  const scenes = useMemo(
    () => [
      { id: 'hero', label: 'Intro' },
      { id: 'about', label: copy.nav[0] },
      { id: 'skills', label: copy.nav[1] },
      { id: 'projects', label: copy.nav[2] },
      { id: 'workflow', label: copy.nav[3] },
      { id: 'contact', label: copy.nav[4] },
    ],
    [copy.nav],
  )

  const scrollToScene = useCallback(
    (index) => {
      const scroller = scrollerRef.current
      if (!scroller) {
        return
      }

      const isMobile = window.matchMedia('(max-width: 900px)').matches
      const nextIndex = Math.min(Math.max(index, 0), scenes.length - 1)
      scroller.scrollTo({
        left: isMobile ? 0 : nextIndex * scroller.clientWidth,
        top: isMobile ? nextIndex * scroller.clientHeight : 0,
        behavior: 'smooth',
      })
    },
    [scenes.length],
  )

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) {
      return undefined
    }

    const updateActiveScene = () => {
      const isMobile = window.matchMedia('(max-width: 900px)').matches
      const position = isMobile ? scroller.scrollTop : scroller.scrollLeft
      const size = isMobile ? scroller.clientHeight : scroller.clientWidth
      const nextIndex = Math.round(position / Math.max(size, 1))
      setActiveIndex(Math.min(Math.max(nextIndex, 0), scenes.length - 1))
    }

    updateActiveScene()
    scroller.addEventListener('scroll', updateActiveScene, { passive: true })
    window.addEventListener('resize', updateActiveScene)

    return () => {
      scroller.removeEventListener('scroll', updateActiveScene)
      window.removeEventListener('resize', updateActiveScene)
    }
  }, [scenes.length])

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) {
      return undefined
    }

    const handleNativeWheel = (event) => {
      if (window.matchMedia('(max-width: 900px)').matches || Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        return
      }

      if (event.target.closest('[role="dialog"], textarea, select, input')) {
        return
      }

      const activeScene = scroller.children[activeIndex]
      const canScrollScene =
        activeScene &&
        window.matchMedia('(max-width: 900px)').matches &&
        activeScene.scrollHeight > activeScene.clientHeight + 2 &&
        ((event.deltaY > 0 && activeScene.scrollTop < activeScene.scrollHeight - activeScene.clientHeight - 2) ||
          (event.deltaY < 0 && activeScene.scrollTop > 2))

      if (canScrollScene) {
        return
      }

      event.preventDefault()

      if (wheelLockRef.current) {
        return
      }

      wheelIntentRef.current += event.deltaY

      if (Math.abs(wheelIntentRef.current) < 70) {
        return
      }

      const direction = wheelIntentRef.current > 0 ? 1 : -1
      wheelIntentRef.current = 0
      wheelLockRef.current = true
      scrollToScene(activeIndex + direction)

      window.setTimeout(() => {
        wheelLockRef.current = false
      }, 620)
    }

    scroller.addEventListener('wheel', handleNativeWheel, { passive: false })

    return () => {
      scroller.removeEventListener('wheel', handleNativeWheel)
    }
  }, [activeIndex, scrollToScene])

  return (
    <div className={styles.page}>
      <Header
        copy={copy}
        language={language}
        theme={theme}
        onLanguageChange={onLanguageChange}
        onThemeChange={onThemeChange}
        activeIndex={activeIndex}
        onNavigate={scrollToScene}
      />
      <main className={styles.scroller} ref={scrollerRef}>
        <Hero copy={copy.hero} onContactOpen={() => setIsContactOpen(true)} />
        <About copy={copy.about} />
        <Skills copy={copy.skills} />
        <Projects copy={copy.projects} />
        <Workflow copy={copy.workflow} />
        <Contact copy={copy.contact} onContactOpen={() => setIsContactOpen(true)} />
      </main>
      <div className={styles.sideNav} aria-label="Section navigation">
        {scenes.map((scene, index) => (
          <button
            key={scene.id}
            type="button"
            className={activeIndex === index ? styles.activeScene : ''}
            onClick={() => scrollToScene(index)}
            aria-label={scene.label}
            aria-current={activeIndex === index ? 'true' : undefined}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
          </button>
        ))}
      </div>
      <div className={styles.progress} aria-hidden="true">
        <span style={{ transform: `scaleX(${(activeIndex + 1) / scenes.length})` }} />
      </div>
      <div className={styles.scrollHint} aria-hidden="true">
        <span>{activeIndex === scenes.length - 1 ? 'END' : 'SCROLL'}</span>
        <i />
      </div>
      <Footer copy={copy.footer} activeIndex={activeIndex} />
      <ContactModal copy={copy.contactModal} isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  )
}
