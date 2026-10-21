import { useState, useEffect } from 'react'

const links = [
  { href: '#hero',       label: 'Home' },
  { href: '#events',     label: 'Events' },
  { href: '#gallery',    label: 'Gallery' },
  { href: '#venue',      label: 'Venue' },
  { href: '#family',     label: 'Family' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo" onClick={close}>P &amp; B</a>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>

        <button
          className={`nav-toggle${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <ul className={`nav-mobile${open ? ' open' : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={close}>{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
