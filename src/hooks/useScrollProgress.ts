import { useEffect, useRef, useState } from 'react'

/**
 * Tracks the scroll progress of an element through the viewport.
 * Returns a ref to attach to the element and a `progress` value (0–1).
 *
 * progress = 0  → element just enters viewport from bottom
 * progress = 1  → element has fully scrolled past the top
 *
 * Useful for parallax translations, opacity fades, etc.
 */
export function useScrollProgress<T extends Element = HTMLDivElement>(): [
  React.RefObject<T>,
  number,
] {
  const ref = useRef<T>(null!)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      // Fraction: 0 when bottom of element touches bottom of viewport, 1 when top touches top
      const raw = 1 - rect.bottom / (vh + rect.height)
      setProgress(Math.min(1, Math.max(0, raw)))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return [ref, progress]
}
