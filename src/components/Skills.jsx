import AnimatedSection from './AnimatedSection'
import './Skills.css'

const skillGroups = [
  {
    title: 'Frontend',
    items: [
      'Next.js',
      'React',
      'Angular',
      'TypeScript',
      'JavaScript',
      'React Query',
      'Redux',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
    ],
  },
  {
    title: 'Backend & Data',
    items: ['Node.js', 'Express', 'REST APIs', 'MySQL', 'MongoDB', 'SQL', 'Zod', 'JWT', 'OAuth'],
  },
  {
    title: 'Performance & Tools',
    items: [
      'SEO',
      'Web Performance',
      'Lighthouse',
      'Git',
      'Agile / Jira',
      'Bitbucket',
      'Debugging',
    ],
  },
]

const highlightSkills = new Set(['Next.js', 'React', 'Node.js', 'TypeScript'])

export default function Skills() {
  return (
    <AnimatedSection as="section" className="skills" id="skills" stagger>
      <h2 className="section-title">Technical Skills</h2>
      <p className="skills__lead">
        Stack I use in production day to day.
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
