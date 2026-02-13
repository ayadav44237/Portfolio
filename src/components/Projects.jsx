import AnimatedSection from './AnimatedSection'
import './Projects.css'

const projects = [
  {
    name: 'QKart Express',
    desc: 'E-commerce app with authentication, shopping cart, and checkout. Built with React and Node.js.',
    tech: 'React.js, Node.js, Express, MongoDB, MUI',
    highlights: [
      'Implemented authentication, shopping cart, and checkout logic with mobile-first UI.',
      'Optimized UI responsiveness, reducing bounce rate by 20% and improving session duration by 30%.',
      'Integrated REST APIs for 40% faster data retrieval and smoother checkout flows.',
    ],
    github: 'https://github.com/ayadav44237/Qkart-Frontend',
    live: 'https://alok-yadav-criodo-me-qkart-frontend-v2.vercel.app/',
    youtube: 'https://youtu.be/RVAGaNT-GFM',
  },
]

export default function Projects() {
  return (
    <AnimatedSection as="section" className="projects" id="projects" stagger>
      <h2 className="section-title">Projects</h2>
      <div className="projects__list">
        {projects.map((proj) => (
          <article key={proj.name} className="projects__card">
            <div className="projects__card-inner">
              <h3 className="projects__name">{proj.name}</h3>
              <p className="projects__tech">{proj.tech}</p>
              <p className="projects__desc">{proj.desc}</p>
              <ul className="projects__highlights">
                {proj.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
              <div className="projects__links">
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="projects__link">
                  GitHub
                </a>
                <a href={proj.live} target="_blank" rel="noopener noreferrer" className="projects__link">
                  Live
                </a>
                {proj.youtube && (
                  <a href={proj.youtube} target="_blank" rel="noopener noreferrer" className="projects__link">
                    Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
        <div className="projects__more">
          <a href="https://github.com/ayadav44237?tab=repositories" target="_blank" rel="noopener noreferrer" className="projects__more-link">
            View more on GitHub →
          </a>
        </div>
      </div>
    </AnimatedSection>
  )
}
