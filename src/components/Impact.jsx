import AnimatedSection from './AnimatedSection'
import './Impact.css'

const stats = [
  {
    value: '3+',
    label: 'Years experience',
    detail: 'Full-stack delivery across Swageazy, RBH & Crio.do',
    accent: 'amber',
  },
  {
    value: '72 → 92',
    label: 'PageSpeed SEO score',
    detail: 'Metadata, structure & performance optimizations',
    accent: 'rose',
  },
  {
    value: '30%',
    label: 'Faster dashboards',
    detail: 'Inventory Dashboard revamp at Swageazy',
    accent: 'cyan',
  },
  {
    value: '25%',
    label: 'Fewer prod bugs',
    detail: 'Legacy refactors across frontend & backend',
    accent: 'green',
  },
  {
    value: '4+',
    label: 'Modules owned',
    detail: 'Inventory, Campaigns, Swagstore, HRMS',
    accent: 'violet',
  },
  {
    value: '10+',
    label: 'Apps shipped',
    detail: 'Production apps at Crio.do & Swageazy',
    accent: 'teal',
  },
]

export default function Impact() {
  return (
    <AnimatedSection as="section" className="impact" id="impact" stagger>
      <h2 className="section-title">Impact at a Glance</h2>
      <div className="impact__grid">
        {stats.map((stat) => (
          <article key={stat.label} className={`impact__card impact__card--${stat.accent}`}>
            <span className="impact__value">{stat.value}</span>
            <h3 className="impact__label">{stat.label}</h3>
            <p className="impact__detail">{stat.detail}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>
  )
}
