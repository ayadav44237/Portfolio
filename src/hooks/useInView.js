import { useState, useEffect, useRef } from 'react'

const defaultOptions = {
  rootMargin: '0px 0px -60px 0px',
  threshold: 0.1,
  triggerOnce: true,
}

export function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const opts = { ...defaultOptions, ...options }

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (opts.triggerOnce && el) observer.unobserve(el)
        } else if (!opts.triggerOnce) {
          setIsInView(false)
        }
      },
      { rootMargin: opts.rootMargin, threshold: opts.threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [opts.rootMargin, opts.threshold, opts.triggerOnce])

  return [ref, isInView]
}
