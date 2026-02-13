import AnimatedSection from './AnimatedSection'
import './Skills.css'

const skillGroups = [
  {
    title: 'Languages',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'C', 'C++', 'SQL'],
  },
  {
    title: 'Technologies',
    items: ['React', 'Redux', 'Angular', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL', 'CouchDB', 'MongoDB', 'REST API', 'Jest', 'JWT'],
  },
  {
    title: 'Tools',
    items: ['Git', 'MongoDB Compass', 'Linux', 'Jira', 'Bitbucket'],
  },
]

export default function Skills() {
  return (
    <AnimatedSection as="section" className="skills" id="skills" stagger>
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills__grid">
        {skillGroups.map((group) => (
          <div key={group.title} className="skills__group">
            <h3 className="skills__group-title">{group.title}</h3>
            <div className="skills__tags">
              {group.items.map((skill) => (
                <span key={skill} className="skills__tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
