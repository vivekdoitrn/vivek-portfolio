import { useEffect, useState } from 'react'
import { NAV_ITEMS, SECTION_IDS, SITE } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { Icon } from './Icon'

export function Header() {
  const active = useActiveSection(SECTION_IDS)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth > 860) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`site-header${scrolled || open ? ' is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a className="brand" href="#home" onClick={close} aria-label={`${SITE.name} — back to top`}>
          <span className="brand-mark" aria-hidden="true">
            V
          </span>
          <span className="brand-name">Vivek R. Upadhyay</span>
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link${active === item.id ? ' is-active' : ''}`}
              aria-current={active === item.id ? 'location' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            className="btn btn-outline btn-sm header-resume"
            href={SITE.resumeViewUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
            <Icon name="external" size={14} />
          </a>
          <button
            type="button"
            className="menu-button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="nav-mobile" aria-label="Mobile">
          <div className="container nav-mobile-inner">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={close}
                className={`nav-mobile-link${active === item.id ? ' is-active' : ''}`}
                aria-current={active === item.id ? 'location' : undefined}
              >
                {item.label}
              </a>
            ))}
            <a
              className="btn btn-primary nav-mobile-resume"
              href={SITE.resumeViewUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
            >
              Resume
              <Icon name="external" size={16} />
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
