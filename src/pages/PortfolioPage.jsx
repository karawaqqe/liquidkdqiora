import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Header } from '../components/header/Header'
import { Hero } from '../components/hero/Hero'
import { About } from '../components/about/About'
import { Skills } from '../components/skills/Skills'
import { Projects } from '../components/projects/Projects'
import { Workflow } from '../components/workflow/Workflow'
import { Contact } from '../components/contact/Contact'
import { ContactModal } from '../components/contact/ContactModal'
import { Footer } from '../components/footer/Footer'
import { useMediaQuery } from '../hooks/useMediaQuery'
import styles from './PortfolioPage.module.css'

export function PortfolioPage({ copy, language, theme, onLanguageChange, onThemeChange }) {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const isMobileLayout = useMediaQuery('(max-width: 900px)', false)
  const scrollerRef = useRef(null)
  const wheelIntentRef = useRef(0)
  const wheelLockRef = useRef(false)
  const frameRef = useRef(null)

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

      const nextIndex = Math.min(Math.max(index, 0), scenes.length - 1)
      setActiveIndex(nextIndex)
      const targetScene = scroller.children[nextIndex]
      const mobileTop =
        nextIndex === scenes.length - 1
          ? Math.max(scroller.scrollHeight - scroller.clientHeight, 0)
          : targetScene?.offsetTop || nextIndex * scroller.clientHeight

      scroller.scrollTo({
        left: isMobileLayout ? 0 : nextIndex * scroller.clientWidth,
        top: isMobileLayout ? mobileTop : 0,
        behavior: 'smooth',
      })
    },
    [isMobileLayout, scenes.length],
  )

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) {
      return undefined
    }

    const updateActiveScene = () => {
      const nextIndex = isMobileLayout
        ? Array.from(scroller.children).reduce((closestIndex, child, index) => {
            const currentDistance = Math.abs(child.offsetTop - scroller.scrollTop)
            const closestDistance = Math.abs(scroller.children[closestIndex].offsetTop - scroller.scrollTop)
            return currentDistance < closestDistance ? index : closestIndex
          }, 0)
        : Math.round(scroller.scrollLeft / Math.max(scroller.clientWidth, 1))

      setActiveIndex(Math.min(Math.max(nextIndex, 0), scenes.length - 1))
    }

    const requestActiveSceneUpdate = () => {
      if (frameRef.current) {
        return
      }

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null
        updateActiveScene()
      })
    }

    requestActiveSceneUpdate()
    scroller.addEventListener('scroll', requestActiveSceneUpdate, { passive: true })
    window.addEventListener('resize', updateActiveScene)

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }

      scroller.removeEventListener('scroll', requestActiveSceneUpdate)
      window.removeEventListener('resize', updateActiveScene)
    }
  }, [isMobileLayout, scenes.length])

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) {
      return undefined
    }

    const handleNativeWheel = (event) => {
      if (isMobileLayout || Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        return
      }

      if (event.target.closest('[role="dialog"], textarea, select, input')) {
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
      const currentIndex = Math.round(scroller.scrollLeft / Math.max(scroller.clientWidth, 1))
      const nextIndex = Math.min(Math.max(currentIndex + direction, 0), scenes.length - 1)
      wheelIntentRef.current = 0

      if (nextIndex === currentIndex) {
        return
      }

      wheelLockRef.current = true
      scrollToScene(nextIndex)

      window.setTimeout(() => {
        wheelLockRef.current = false
      }, 520)
    }

    window.addEventListener('wheel', handleNativeWheel, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleNativeWheel)
    }
  }, [isMobileLayout, scenes.length, scrollToScene])

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
