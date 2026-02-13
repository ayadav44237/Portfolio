import { useInView } from '../hooks/useInView'

export default function AnimatedItem({ children, delay = 0, className = '', as: Component = 'div', ...props }) {
  const [ref, isInView] = useInView()

  return (
    <Component
      ref={ref}
      className={`animate-item ${isInView ? 'animate-item--visible' : ''} ${className}`}
      style={{ '--stagger-delay': `${delay}ms` }}
      {...props}
    >
      {children}
    </Component>
  )
}
