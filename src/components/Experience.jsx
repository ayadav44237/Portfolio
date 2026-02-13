import AnimatedSection from './AnimatedSection'
import './Experience.css'

const experiences = [
  {
    company: 'Swageazy',
    role: 'SDE 1',
    location: 'Gurgaon, Haryana',
    period: 'Mar 2025 – Present',
    points: [
      'Owned and delivered end-to-end product modules across Inventory, Campaigns, Swagstore, and HRMS Redemption using React, Angular, Node.js, and MySQL.',
      'Revamped the Inventory Dashboard UI and business logic, reducing rendering time by 30% and improving component reusability.',
      'Designed and implemented the Swagstore setup flow in Angular: Store Info, Branding, Product catalog, Live Preview/Publish—enabling self-service store creation.',
      'Built Campaign management workflows and integrated REST APIs to streamline setup and reporting.',
      'Implemented HRMS Redemption flows and API integrations for enterprise clients.',
      'Refactored legacy frontend and backend codebases, reducing production bugs by 25%.',
      'Collaborated in Agile sprints with product, design, and backend teams.',
    ],
    stack: 'HTML, CSS, JavaScript, TypeScript, React.js, Angular, Node.js, MySQL, REST APIs, Git, Bitbucket, Jira',
  },
  {
    company: 'RBH Solutions',
    role: 'Fullstack Developer',
    location: 'Patiala, Punjab',
    period: 'Oct 2024 – Nov 2024',
    points: [
      'Integrated & optimized key features (Other PTW, Event Log, Xen Dashboard) with backend APIs, enhancing real-time system interactivity by 40%.',
      'Enhanced user experience & workflows in the HPVNL project, reducing task completion time by 25%.',
      'Collaborated with cross-functional teams, leading to a 20% faster development cycle.',
    ],
    stack: 'React, Redux, Javascript, SASS, CouchDB, Node.js, Tailwind CSS, Git',
  },
  {
    company: 'Crio.do',
    role: 'Project Engineer',
    location: 'Bengaluru, Karnataka',
    period: 'Sep 2023 – Sep 2024',
    points: [
      'Engineered high-performance UIs for 7+ projects using the MERN stack, enhancing user satisfaction by 25%.',
      'Optimized search functionality with debouncing, boosting performance by 30%.',
      'Strengthened authentication systems with JWT & OAuth for secure access control.',
      'Developed & deployed scalable applications on Netlify, Render, and Vercel, maintaining 99.9% uptime.',
      'Led cross-functional collaboration to deliver 10+ JavaScript & React projects.',
    ],
    stack: 'React, Redux, Javascript, TypeScript, Tailwind CSS, Node.js, MongoDB, Git, REST APIs',
  },
]

export default function Experience() {
  return (
    <AnimatedSection as="section" className="experience" id="experience" stagger>
      <h2 className="section-title">Experience</h2>
      <div className="experience__list">
        {experiences.map((exp) => (
          <article key={`${exp.company}-${exp.period}`} className="experience__item">
            <div className="experience__header">
              <div className="experience__header-left">
                <h3 className="experience__company">{exp.company}</h3>
                <p className="experience__role">{exp.role}</p>
                <p className="experience__location">{exp.location}</p>
              </div>
              <span className="experience__period">{exp.period}</span>
            </div>
            <ul className="experience__points">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <p className="experience__stack">
              <span className="experience__stack-label">Tech stack:</span> {exp.stack}
            </p>
          </article>
        ))}
      </div>
    </AnimatedSection>
  )
}
