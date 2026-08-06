import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import RightRail from './RightRail'
import ThemeToggle from './ThemeToggle'
import { site } from '../data'

export default function Layout() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  // Client-side navigation preserves scroll position by default, which lands you
  // mid-page on a route you have never seen. The centre column scrolls, not the
  // window, so reset that element rather than window.
  useEffect(() => {
    document.getElementById('main')?.scrollTo(0, 0)
    window.scrollTo(0, 0)
    setMenuOpen(false)
  }, [pathname])

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

      {/* Mobile bar — the rails collapse away below lg. */}
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
          <Sidebar onNavigate={() => setMenuOpen(false)} />
        </div>
      )}

      {/* Left rail */}
      <aside className="hidden w-[300px] shrink-0 overflow-y-auto border-r border-rule lg:block xl:w-[330px]">
        <Sidebar />
      </aside>

      {/* Centre column — the only thing that scrolls on desktop */}
      <main id="main" className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-[760px] px-5 py-10 sm:px-10 lg:py-14">
          <Outlet />
        </div>
      </main>

      {/* Right rail — first thing to go as width runs out */}
      <aside className="hidden w-[290px] shrink-0 overflow-y-auto border-l border-rule 2xl:block">
        <RightRail />
      </aside>
    </div>
  )
}
