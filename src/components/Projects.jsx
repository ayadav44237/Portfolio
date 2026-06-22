import AnimatedSection from './AnimatedSection'
import './Projects.css'

const projects = [
  {
    name: 'Swagstore Platform',
    type: 'Production',
    typeClass: 'production',
    desc: 'Self-service e-commerce store builder — clients configure branding, products, and publish live stores without engineering support.',
    tech: 'Angular, Node.js, MySQL, REST APIs',
    highlights: [
      'Architected 4-step setup flow: Store Info, Branding, Product catalog, Live Preview/Publish.',
      'SEO-optimized store pages with semantic markup, metadata, and lazy-loaded assets for faster publish-ready stores.',
    ],
  },
  {
    name: 'Inventory Dashboard',
    type: 'Production',
    typeClass: 'production',
    desc: 'Core inventory management dashboard revamp — faster rendering, reusable components, and improved business logic.',
    tech: 'React, Node.js, MySQL',
    highlights: [
      '30% reduction in rendering time through UI and logic optimization.',
      'Performance-tuned with code splitting and reusable components adopted across modules.',
    ],
  },
  {
    name: 'QKart Express',
    type: 'Full-Stack',
    typeClass: 'fullstack',
    desc: 'E-commerce app with authentication, shopping cart, and checkout — built with React and Node.js.',
    tech: 'React, Node.js, Express, MongoDB, MUI',
    highlights: [
      'Mobile-first UI with auth, cart, and checkout — 20% lower bounce rate, 30% longer sessions.',
      'REST API integration for 40% faster data retrieval; optimized for performance and responsiveness.',
    ],
    github: 'https://github.com/ayadav44237/Qkart-Frontend',
    live: 'https://alok-yadav-criodo-me-qkart-frontend-v2.vercel.app/',
    youtube: 'https://youtu.be/RVAGaNT-GFM',
  },
  {
    name: 'Crio MERN Portfolio',
    type: '7+ Apps',
    typeClass: 'portfolio',
    desc: 'Collection of production-grade MERN applications — auth systems, search optimization, and cloud deployments.',
    tech: 'React, Redux, Node.js, MongoDB, JWT, OAuth',
    highlights: [
      '7+ high-performance UIs with debounced search and secure JWT/OAuth auth.',
      'Deployed on Netlify, Render, and Vercel with 99.9% uptime.',
    ],
    github: 'https://github.com/ayadav44237?tab=repositories',
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
                  {proj.youtube && (
                    <a href={proj.youtube} target="_blank" rel="noopener noreferrer" className="projects__link">
                      Demo
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
