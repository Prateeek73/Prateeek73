import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import ThemeToggle from './ThemeToggle'
import useActiveSection from '../hooks/useActiveSection'
import useSectionKeys from '../hooks/useSectionKeys'
import { site } from '../data'

// Routes that are their own page rather than part of the scrolling index.
const STANDALONE = ['/gallery']

export default function Layout() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  // Off the single page there are no sections to track, and leaving the spy
  // running would rewrite the URL back to '/'.
  const onSinglePage = !STANDALONE.includes(pathname)
  const active = useActiveSection(onSinglePage)
  useSectionKeys(active, onSinglePage)

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
    <div className="min-h-screen lg:flex lg:h-screen lg:overflow-hidden">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-bg-elev focus:px-3 focus:py-2 focus:text-[13px] focus:text-text"
      >
        Skip to content
      </a>

      {/* Mobile bar — the sidebar collapses behind it below lg. */}
      <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-rule bg-bg/90 px-5 backdrop-blur-md lg:hidden">
        <Link to="/" className="font-display text-[19px] leading-none text-text">
          <span className="italic">{site.firstName}</span> {site.lastName}
        </Link>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="grid h-8 w-8 place-items-center rounded-full border border-rule text-text-faint transition-colors duration-200 hover:border-accent hover:text-accent"
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
      </header>

      {menuOpen && (
        <div className="fixed inset-0 top-14 z-30 overflow-y-auto bg-bg lg:hidden">
          <Sidebar active={onSinglePage ? active : null} onNavigate={() => setMenuOpen(false)} />
        </div>
      )}

      <aside className="hidden w-[300px] shrink-0 overflow-y-auto border-r border-rule lg:block xl:w-[330px]">
        <Sidebar active={onSinglePage ? active : null} />
      </aside>

      {/* The scroll container on desktop; below lg the window scrolls instead.
          On desktop the column sits just past the sidebar rather than centring in
          the space beside it — centring let it drift right as the viewport grew.
          Below lg there is no sidebar, so it centres normally. */}
      {/* Width lives on each Section rather than here, so a list-heavy section
          like Projects can run wider than a prose one without dragging the
          reading measure of About and Experience out with it. */}
      <main id="main" className="flex-1 lg:overflow-y-auto">
        <div className="px-5 py-10 sm:px-10 lg:py-14 lg:pl-12">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
