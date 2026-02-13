import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">
          © {year} Alok Yadav. Built with React + Vite.
        </p>
        <div className="footer__links">
          <a href="https://github.com/ayadav44237" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/ayadav44237/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:ayadav44237@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
