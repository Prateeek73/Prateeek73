import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import MonoLabel from './MonoLabel'
import { colophon, sections, site } from '../data'

function Wordmark({ onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="group shrink-0"
      aria-label="Home"
    >
      {/* Name only — with seven nav items there isn't room for the role as well,
          and it wraps into them. The role leads the home hero instead. */}
      <span className="whitespace-nowrap text-[15px] font-medium tracking-tight text-text transition-colors duration-200 group-hover:text-accent">
        {site.name}
      </span>
    </Link>
  )
}

const navLinkClass = ({ isActive }) =>
  [
    'text-[13px] tracking-tight transition-colors duration-200',
    isActive ? 'text-accent' : 'text-text-muted hover:text-text',
  ].join(' ')

export default function Layout() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  // Client-side navigation preserves scroll position by default, which lands you
  // mid-page on a route you've never seen.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // A fixed overlay still lets the page behind it scroll on touch devices.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-bg-elev focus:px-3 focus:py-2 focus:text-[13px] focus:text-text"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-rule bg-bg/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between gap-4 px-5 sm:px-8">
          <Wordmark />

          <div className="flex items-center gap-5">
            <nav aria-label="Sections" className="hidden items-center gap-4 lg:flex">
              {sections.map((s) => (
                <NavLink key={s.to} to={s.to} className={navLinkClass}>
                  {s.name}
                </NavLink>
              ))}
            </nav>

            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="grid h-8 w-8 place-items-center rounded-full border border-rule text-text-faint transition-colors duration-200 hover:border-accent hover:text-accent lg:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[14px] w-[14px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {menuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 top-14 z-30 bg-bg lg:hidden">
          <nav aria-label="Sections" className="mx-auto max-w-3xl px-5 py-6 sm:px-8">
            {sections.map((s, i) => (
              <NavLink
                key={s.to}
                to={s.to}
                className={({ isActive }) =>
                  [
                    'flex items-baseline justify-between border-b border-rule py-4 transition-colors duration-200',
                    isActive ? 'text-accent' : 'text-text hover:text-accent',
                  ].join(' ')
                }
              >
                <span className="font-display text-[24px] leading-none">{s.name}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-faint">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </NavLink>
            ))}
          </nav>
        </div>
      )}

      <main id="main" className="flex-1">
        <Outlet />
      </main>

      <footer className="mt-24 border-t border-rule">
        <div className="mx-auto max-w-3xl px-5 py-10 sm:px-8">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
                className="text-[13px] text-text-muted transition-colors duration-200 hover:text-accent"
              >
                {s.label}
              </a>
            ))}
            {site.resumeUrl && (
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[13px] text-text-muted transition-colors duration-200 hover:text-accent"
              >
                Résumé
              </a>
            )}
          </div>

          <div className="mt-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <MonoLabel>
              © {new Date().getFullYear()} {site.name} · {site.location}
            </MonoLabel>
            <MonoLabel>{colophon.note}</MonoLabel>
          </div>
        </div>
      </footer>
    </div>
  )
}
