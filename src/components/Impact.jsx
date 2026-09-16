import AnimatedSection from './AnimatedSection'
import './Impact.css'

const stats = [
  {
    value: '2 wks',
    label: 'Swayy shipped live',
    detail: 'getswayy.com — brand storefront',
    accent: 'amber',
  },
  {
    value: '4+',
    label: 'Modules owned',
    detail: 'Inventory, Campaigns, Swagstore, HRMS',
    accent: 'violet',
  },
  {
    value: '72 → 92',
    label: 'PageSpeed SEO',
    detail: 'Structure, metadata & performance',
    accent: 'rose',
  },
  {
    value: '30%',
    label: 'Faster dashboards',
    detail: 'Inventory Dashboard revamp',
    accent: 'cyan',
  },
  {
    value: '25%',
    label: 'Fewer prod bugs',
    detail: 'Legacy frontend & backend refactors',
    accent: 'green',
  },
  {
    value: '3+',
    label: 'Years experience',
    detail: 'Swageazy, RBH & Crio.do',
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
