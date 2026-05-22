import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { sendContactMessage } from '../../services/emailjs'
import styles from './contactModal.module.css'

const emptyForm = {
  name: '',
  email: '',
  projectType: '',
  message: '',
}

export function ContactModal({ copy, isOpen, onClose }) {
  const [values, setValues] = useState(emptyForm)
  const [status, setStatus] = useState('idle')
  const [statusText, setStatusText] = useState('')
  const isLiteMotion = useMediaQuery('(max-width: 900px), (pointer: coarse)', false)

  const selectedOption = useMemo(() => values.projectType || copy.options[0], [copy.options, values.projectType])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  const updateField = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('sending')
    setStatusText('')

    try {
      const result = await sendContactMessage({ ...values, projectType: selectedOption }, copy.directEmail)
      setStatus(result.mode === 'fallback' ? 'fallback' : 'success')
      setStatusText(result.mode === 'fallback' ? copy.fallback : copy.success)
      setValues(emptyForm)
    } catch {
      setStatus('error')
      setStatusText(copy.error)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <motion.button
            className={styles.backdrop}
            type="button"
            aria-label={copy.close}
            onClick={onClose}
            initial={isLiteMotion ? { opacity: 0 } : { backdropFilter: 'blur(0px)' }}
            animate={isLiteMotion ? { opacity: 1 } : { backdropFilter: 'blur(22px)' }}
            exit={isLiteMotion ? { opacity: 0 } : { backdropFilter: 'blur(0px)' }}
          />
          <motion.div
            className={styles.modal}
            initial={isLiteMotion ? { opacity: 0, y: 28, scale: 0.98 } : { opacity: 0, y: 60, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={isLiteMotion ? { opacity: 0, y: 18, scale: 0.99 } : { opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.scanline} aria-hidden="true" />
            <button className={styles.close} type="button" onClick={onClose} aria-label={copy.close}>
              <span>{copy.close}</span>
            </button>
            <div className={styles.intro}>
              <p className="eyebrow">{copy.eyebrow}</p>
              <h2 id="contact-modal-title">{copy.title}</h2>
              <p className={styles.description}>{copy.description}</p>
              <a href={`mailto:${copy.directEmail}`}>{copy.directEmail}</a>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <label>
                <span>{copy.name}</span>
                <input name="name" value={values.name} onChange={updateField} autoComplete="name" required />
              </label>
              <label>
                <span>{copy.email}</span>
                <input name="email" type="email" value={values.email} onChange={updateField} autoComplete="email" required />
              </label>
              <label className={styles.full}>
                <span>{copy.projectType}</span>
                <select name="projectType" value={values.projectType} onChange={updateField}>
                  {copy.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label className={styles.full}>
                <span>{copy.message}</span>
                <textarea name="message" value={values.message} onChange={updateField} rows="5" required />
              </label>
              <div className={styles.footer}>
                <button type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? copy.sending : copy.submit}
                </button>
                {statusText && <p className={styles[status]}>{statusText}</p>}
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
