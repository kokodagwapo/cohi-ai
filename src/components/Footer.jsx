import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <p className="footer__disclaimer">
          Results may vary by user and circumstances. Consult qualified professionals for advice specific to your situation.
        </p>
        <div className="footer__bottom">
          <span className="footer__legal">© {currentYear} TVMA, Inc. trading as Teraverde®</span>
          <nav className="footer__nav" aria-label="Footer navigation">
            <Link to="/#privacy" className="footer__link">Privacy</Link>
            <Link to="/#terms" className="footer__link">Terms</Link>
            <Link to="/#contact" className="footer__link">Accessibility</Link>
            <a href="https://www.ada.gov/" target="_blank" rel="noopener noreferrer" className="footer__link">ADA</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
