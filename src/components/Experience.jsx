import AnimatedSection from './AnimatedSection'
import './Experience.css'

const timeline = [
  { year: '2023', label: 'Crio.do — shipping production apps' },
  { year: '2024', label: 'RBH Solutions — full-stack delivery' },
  { year: '2025–26', label: 'Swageazy — Swayy + core modules' },
]

const experiences = [
  {
    company: 'Swageazy',
    role: 'SDE 1 (Full-Stack)',
    location: 'Gurgaon, Haryana',
    period: 'Mar 2025 – Present',
    highlight: 'Swayy in 2 weeks · 4 modules',
    points: [
      'Shipped Swayy (getswayy.com) end-to-end in ~2 weeks — consumer storefront + Node.js/MySQL APIs across sibling frontend and backend repos.',
      'Built Swagstore self-serve for enterprise clients (store setup, branding, catalog, live preview/publish) so stores can launch without engineering support.',
      'Revamped Inventory Dashboard — 30% faster rendering and cleaner reusable components.',
      'Improved PageSpeed SEO score from 72 to 92 through structure, metadata, and performance fixes.',
      'Owned Campaigns and HRMS redemption flows end-to-end for reliable enterprise gifting and rewards.',
      'Refactored legacy frontend and backend paths — 25% fewer production bugs.',
    ],
    stack: 'Next.js, React, Angular, TypeScript, Node.js, Express, MySQL, REST APIs',
  },
  {
    company: 'RBH Solutions',
    role: 'Full-Stack Developer',
    location: 'Patiala, Punjab',
    period: 'Oct 2024 – Nov 2024',
    highlight: '40% better interactivity',
    points: [
      'Integrated and optimized dashboard flows with live APIs — 40% better real-time interactivity.',
      'Improved HPVNL workflows — 25% faster task completion for end users.',
      'Collaborated across product and backend to ship fixes faster.',
    ],
    stack: 'React, Redux, Node.js, CouchDB, Tailwind CSS, REST APIs',
  },
  {
    company: 'Crio.do',
    role: 'Full-Stack Engineer',
    location: 'Bengaluru, Karnataka',
    period: 'Sep 2023 – Sep 2024',
    highlight: '10+ apps shipped',
    points: [
      'Delivered 10+ production apps with auth, search, and scalable UIs.',
      'Optimized search with debouncing — ~30% better performance.',
      'Deployed and maintained apps on Netlify, Render, and Vercel (99.9% uptime).',
    ],
    stack: 'React, Redux, TypeScript, Node.js, Express, MongoDB, REST APIs',
  },
]

export default function Experience() {
  return (
    <AnimatedSection as="section" className="experience" id="experience" stagger>
      <h2 className="section-title">Experience</h2>
      <p className="experience__intro">
        <strong>3+ years</strong> shipping production work across <strong>3 companies</strong>.
      </p>
      <div className="experience__timeline" aria-label="Career timeline">
        {timeline.map((item) => (
          <div key={item.year} className="experience__timeline-item">
            <span className="experience__timeline-year">{item.year}</span>
            <span className="experience__timeline-label">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="experience__list">
        {experiences.map((exp) => (
          <article key={`${exp.company}-${exp.period}`} className="experience__item">
            <div className="experience__header">
              <div className="experience__header-left">
                <h3 className="experience__company">{exp.company}</h3>
                <p className="experience__role">{exp.role}</p>
                <p className="experience__location">{exp.location}</p>
              </div>
              <div className="experience__header-right">
                <span className="experience__badge">{exp.highlight}</span>
                <span className="experience__period">{exp.period}</span>
              </div>
            </div>
            <ul className="experience__points">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <p className="experience__stack">
              <span className="experience__stack-label">Stack:</span> {exp.stack}
            </p>
          </article>
        ))}
      </div>
    </AnimatedSection>
  )
}
