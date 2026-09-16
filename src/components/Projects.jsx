import AnimatedSection from './AnimatedSection'
import './Projects.css'

const projects = [
  {
    name: 'Swayy — getswayy.com',
    type: 'Live Product',
    typeClass: 'production',
    desc: 'Consumer brand storefront for premium carry gear. Owned the full stack — Next.js frontend and Node/Express/MySQL backend — through production.',
    tech: 'Next.js, TypeScript, Node.js, Express, MySQL, React Query',
    highlights: [
      'Storefront: auth, catalog, cart/checkout, orders, and profile.',
      'Backend: catalog admin APIs, variants, audit logs, and order emails.',
    ],
    live: 'https://getswayy.com',
  },
  {
    name: 'Swagstore Platform',
    type: 'Production',
    typeClass: 'production',
    desc: 'Self-serve branded store builder for Swageazy enterprise clients — separate from Swayy. Clients set up, brand, stock, and publish without engineering support.',
    tech: 'Angular, Node.js, MySQL, REST APIs',
    highlights: [
      'Setup flow: Store Info → Branding → Catalog → Live Preview/Publish.',
      'End-to-end ownership across UI and API integrations.',
    ],
  },
  {
    name: 'Inventory Dashboard',
    type: 'Production',
    typeClass: 'production',
    desc: 'Inventory dashboard revamp for Swageazy ops teams — cleaner UI, reusable components, and snappier rendering.',
    tech: 'React, Node.js, MySQL',
    highlights: [
      'UI and logic cleanup for smoother day-to-day ops workflows.',
      'Reusable components adopted across modules.',
    ],
  },
  {
    name: 'QKart Express',
    type: 'Full-Stack',
    typeClass: 'fullstack',
    desc: 'E-commerce app with authentication, cart, and checkout.',
    tech: 'React, Node.js, Express, MongoDB, MUI',
    highlights: [
      'Mobile-first auth, cart, and checkout flows.',
      'REST API integration for faster data retrieval.',
    ],
    github: 'https://github.com/ayadav44237/Qkart-Frontend',
    live: 'https://alok-yadav-criodo-me-qkart-frontend-v2.vercel.app/',
  },
]

export default function Projects() {
  return (
    <AnimatedSection as="section" className="projects" id="projects" stagger>
      <h2 className="section-title">Things I've Built</h2>
      <div className="projects__grid">
        {projects.map((proj) => (
          <article key={proj.name} className="projects__card">
            <div className="projects__card-inner">
              <div className="projects__card-top">
                <h3 className="projects__name">{proj.name}</h3>
                <span className={`projects__type projects__type--${proj.typeClass}`}>
                  {proj.type}
                </span>
              </div>
              <p className="projects__tech">{proj.tech}</p>
              <p className="projects__desc">{proj.desc}</p>
              <ul className="projects__highlights">
                {proj.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
              {(proj.github || proj.live) && (
                <div className="projects__links">
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="projects__link">
                      GitHub
                    </a>
                  )}
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noopener noreferrer" className="projects__link">
                      Live
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  )
}
