import AnimatedSection from './AnimatedSection'
import './Experience.css'

const timeline = [
  { year: '2023', label: 'Crio.do — MERN full-stack foundations' },
  { year: '2024', label: 'RBH Solutions — production features' },
  { year: '2025–26', label: 'Swageazy — SDE 1, 4 modules owned' },
]

const experiences = [
  {
    company: 'Swageazy',
    role: 'SDE 1',
    location: 'Gurgaon, Haryana',
    period: 'Mar 2025 – Present',
    highlight: '4 modules · SEO 72→92',
    points: [
      'Own end-to-end delivery across Inventory, Campaigns, Swagstore, and HRMS — React & Angular UIs, Node.js APIs, and MySQL.',
      'Improved Google PageSpeed Insights SEO score from 72 to 92 through metadata optimization, semantic HTML, lazy loading, and bundle splitting.',
      'Revamped Inventory Dashboard — 30% faster rendering; refactored API layer and business logic for better maintainability.',
      'Architected Swagstore self-service flow in Angular with Node.js/MySQL backend — store setup, catalog, and live publish.',
      'Built Campaign workflows and HRMS redemption with REST API integrations for enterprise clients.',
      'Refactored legacy frontend and backend codebases — 25% reduction in production bugs.',
    ],
    stack: 'React, Angular, TypeScript, Node.js, MySQL, REST APIs, Redux, SEO',
  },
  {
    company: 'RBH Solutions',
    role: 'Full-Stack Developer',
    location: 'Patiala, Punjab',
    period: 'Oct 2024 – Nov 2024',
    highlight: '40% better UI interactivity',
    points: [
      'Built React dashboards for PTW, Event Log, and Xen with Node.js/CouchDB API integrations — 40% boost in real-time interactivity.',
      'Redesigned HPVNL workflows in React + Redux — 25% faster task completion for end users.',
      'Delivered responsive, component-driven UIs with Tailwind CSS and SASS alongside backend data flow optimization.',
    ],
    stack: 'React, Redux, Node.js, CouchDB, Tailwind CSS, SASS, REST APIs',
  },
  {
    company: 'Crio.do',
    role: 'Full-Stack Engineer',
    location: 'Bengaluru, Karnataka',
    period: 'Sep 2023 – Sep 2024',
    highlight: '10+ apps shipped',
    points: [
      'Delivered 10+ MERN stack projects — React frontends with Node.js/Express APIs and MongoDB.',
      'Built Redux state management, debounced search, JWT/OAuth auth, and mobile-first responsive layouts.',
      'Deployed production apps on Netlify, Render, and Vercel; optimized Core Web Vitals and API response times.',
    ],
    stack: 'React, Redux, TypeScript, Node.js, Express, MongoDB, Tailwind CSS, REST APIs',
  },
]

export default function Experience() {
  return (
    <AnimatedSection as="section" className="experience" id="experience" stagger>
      <h2 className="section-title">Experience</h2>
      <p className="experience__intro">
        <strong>3+ years</strong> across <strong>3 companies</strong> — from intensive MERN delivery at Crio.do to owning production modules at Swageazy. I build interfaces, APIs, and data layers that ship and scale.
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
