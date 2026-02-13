import { useInView } from '../hooks/useInView'

export default function AnimatedSection({
  children,
  className = '',
  stagger = false,
  delay = 0,
  as: Component = 'section',
  ...props
}) {
  const [ref, isInView] = useInView()

  return (
    <Component
      ref={ref}
      className={`animate-in ${isInView ? 'animate-in--visible' : ''} ${stagger ? 'animate-stagger' : ''} ${className}`.trim()}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </Component>
  )
}
