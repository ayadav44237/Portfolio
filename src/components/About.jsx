import AnimatedSection from './AnimatedSection'
import './About.css'

const cards = [
  {
    title: 'What I do',
    content:
      'I own product work end-to-end — interfaces, APIs, and data. At Swageazy that covers SaaS modules (Inventory, Campaigns, Swagstore, HRMS) and shipping Swayy as a separate consumer product.',
  },
  {
    title: 'How I work',
    content:
      'Clear goals, clean architecture, measurable results. I move fast when needed, use modern tooling where it helps, and stay accountable for quality and delivery.',
  },
  {
    title: 'What I care about',
    content:
      'Work that ships and sticks — faster experiences, fewer production issues, and features teams can use without constant engineering support.',
  },
]

export default function About() {
  return (
    <AnimatedSection as="section" className="about" id="about" stagger>
      <h2 className="section-title">About</h2>
      <p className="about__lead">
        Full-stack developer with <strong>3+ years</strong> in production. I focus on owning outcomes — not collecting tools.
      </p>
      <div className="about__grid">
        {cards.map((card) => (
          <div key={card.title} className="about__card">
            <h3 className="about__card-title">{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
      <p className="about__footer">
        Open to full-stack / SDE roles with real ownership and impact.
      </p>
    </AnimatedSection>
  )
}
