import AnimatedSection from './AnimatedSection'
import './Education.css'

export default function Education() {
  return (
    <AnimatedSection as="section" className="education" id="education" stagger>
      <h2 className="section-title">Education</h2>
      <div className="education__card">
        <div className="education__header">
          <h3 className="education__school">Madan Mohan Malaviya University of Technology</h3>
          <span className="education__year">2019 – 2023</span>
        </div>
        <p className="education__degree">Bachelor of Technology (B.Tech) — Information Technology</p>
        <p className="education__location">Gorakhpur, Uttar Pradesh</p>
      </div>
    </AnimatedSection>
  )
}
