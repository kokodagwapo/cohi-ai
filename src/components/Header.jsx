import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const NAV_LINKS = [
  { href: '/#hero', label: 'Home' },
  { href: '/#cohi-in-action', label: 'The Stats' },
  { href: '/#outcomes', label: 'The Edge' },
  { href: '/#about-coheus', label: 'The Playbook' },
  { href: '/#contact', label: 'Contact' },
]

export default function Header({ theme, onThemeToggle }) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const closeDrawer = () => setDrawerOpen(false)

  useEffect(() => {
    document.body.classList.toggle('drawer-open', drawerOpen)
  }, [drawerOpen])

  return (
    <header className="header" role="banner">
      <div className="header__inner">
        <Link to="/" className="header__logo" aria-label="Coheus home">
          <img src="/coheus-logo.png" alt="Coheus" width="140" height="40" />
        </Link>

        <button
          type="button"
          className="header__menu-btn"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
          aria-expanded={drawerOpen}
        >
          ☰
        </button>

        <div className={`header__drawer ${drawerOpen ? 'header__drawer--open' : ''}`}>
          <nav className="header__nav" aria-label="Main navigation">
            <ul className="header__nav-list">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="header__nav-link" onClick={closeDrawer}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <button
          type="button"
          className={`header__theme-toggle ${theme === 'dark' ? 'header__theme-toggle--dark' : ''}`}
          onClick={onThemeToggle}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <div className="header__theme-toggle-track">
            <span className="header__theme-icon sun">☀</span>
            <span className="header__theme-icon moon">☾</span>
            <div className="header__theme-toggle-thumb" />
          </div>
        </button>
      </div>

      {drawerOpen && (
        <div
          className="header__overlay"
          onClick={closeDrawer}
          aria-hidden="true"
        />
      )}
    </header>
  )
}
