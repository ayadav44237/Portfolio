import AnimatedSection from './AnimatedSection'
import './About.css'

const cards = [
  {
    icon: '⚡',
    title: 'What I do',
    content: 'Full-stack developer with 3+ years in production. I build React & Angular interfaces, wire them to Node.js APIs, and work with MySQL and MongoDB — owning features from UI through the data layer.',
  },
  {
    icon: '🧠',
    title: 'How I work',
    content: 'Strong fundamentals in JavaScript, TypeScript, system design, and clean architecture. I ship fast in Agile teams, optimize for performance and SEO, and use AI tools to accelerate delivery without compromising code quality.',
  },
  {
    icon: '🎯',
    title: 'Proof of impact',
    content: '4 live modules at Swageazy, 10+ apps at Crio.do, SEO score 72→92 on PageSpeed Insights, 30% faster dashboards, and 25% fewer production bugs after refactors.',
  },
]

export default function About() {
  return (
    <AnimatedSection as="section" className="about" id="about" stagger>
      <h2 className="section-title">About</h2>
      <p className="about__lead">
        Full-stack developer with <strong>3+ years</strong> of experience building production web applications — strong on the frontend with React & Angular, equally comfortable on Node.js backends, APIs, and databases.
      </p>
      <div className="about__grid">
        {cards.map((card) => (
          <div key={card.title} className="about__card">
            <span className="about__icon" aria-hidden="true">{card.icon}</span>
            <h3 className="about__card-title">{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
      <p className="about__footer">
        Currently SDE 1 at Swageazy. Open to full-stack and SDE opportunities where I can own features end-to-end and deliver measurable results.
      </p>
    </AnimatedSection>
  )
}
