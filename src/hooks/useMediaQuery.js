import { useEffect, useState } from 'react'

export function useMediaQuery(query, defaultValue = false) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') {
      return defaultValue
    }

    return window.matchMedia(query).matches
  })

  useEffect(() => {
    const media = window.matchMedia(query)
    const updateMatches = () => setMatches(media.matches)

    updateMatches()
    media.addEventListener('change', updateMatches)

    return () => {
      media.removeEventListener('change', updateMatches)
    }
  }, [query])

  return matches
}

