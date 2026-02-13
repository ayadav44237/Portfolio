import AnimatedSection from './AnimatedSection'
import './About.css'

export default function About() {
  return (
    <AnimatedSection as="section" className="about" id="about" stagger>
      <h2 className="section-title">About</h2>
      <div className="about__grid">
        <div className="about__card">
          <h3 className="about__card-title">Who I am</h3>
          <p>
            I'm a Software Development Engineer who enjoys building reliable, user-centric products by combining clean code, thoughtful architecture, and practical problem-solving.
          </p>
        </div>
        <div className="about__card">
          <h3 className="about__card-title">What I do</h3>
          <p>
            I turn product and business needs into shipped features—owning the full flow from UI and APIs to databases. I like improving existing systems: clearer code, faster interfaces, and workflows that scale. I work closely with product, design, and backend in Agile setups so what we build is usable and maintainable.
          </p>
        </div>
        <div className="about__card">
          <h3 className="about__card-title">My approach</h3>
          <ul className="about__list">
            <li>Strong fundamentals in software engineering and problem-solving</li>
            <li>Focus on performance, code quality, and long-term maintainability</li>
            <li>Comfortable working across the stack and understanding systems end-to-end</li>
            <li>Ability to adapt quickly to new tools, frameworks, and domains</li>
            <li>Actively learning and using <strong>AI</strong> to speed up development—well-versed in AI-assisted coding and shipping faster without compromising quality</li>
          </ul>
        </div>
        <div className="about__card about__card--hobby">
          <h3 className="about__card-title">Beyond code</h3>
          <p>
            I love <strong>chess</strong> and <strong>cricket</strong>—both keep me sharp on strategy, patience, and thinking a few moves ahead.
          </p>
        </div>
      </div>
      <p className="about__footer">
        Open to opportunities where I can work on challenging problems, build impactful products, and grow as a well-rounded software engineer.
      </p>
    </AnimatedSection>
  )
}
