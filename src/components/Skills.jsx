import AnimatedSection from './AnimatedSection'
import './Skills.css'

const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'Angular', 'TypeScript', 'JavaScript', 'Redux', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive UI'],
  },
  {
    title: 'Backend & Data',
    items: ['Node.js', 'Express', 'REST APIs', 'MySQL', 'MongoDB', 'SQL', 'JWT', 'OAuth', 'CouchDB'],
  },
  {
    title: 'Performance & Tools',
    items: ['SEO', 'Web Performance', 'Lighthouse', 'Core Web Vitals', 'Git', 'Agile / Jira', 'Cursor', 'GitHub Copilot'],
  },
]

const highlightSkills = new Set(['React', 'Angular', 'Node.js', 'TypeScript', 'SEO'])

export default function Skills() {
  return (
    <AnimatedSection as="section" className="skills" id="skills" stagger>
      <h2 className="section-title">Technical Skills</h2>
      <p className="skills__lead">
        Full-stack with depth in <strong>React, Angular & TypeScript</strong> and production experience across <strong>Node.js, REST APIs, and SQL/NoSQL databases</strong>.
      </p>
      <div className="skills__grid">
        {skillGroups.map((group) => (
          <div key={group.title} className="skills__group">
            <h3 className="skills__group-title">{group.title}</h3>
            <div className="skills__tags">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className={`skills__tag${highlightSkills.has(skill) ? ' skills__tag--highlight' : ''}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
