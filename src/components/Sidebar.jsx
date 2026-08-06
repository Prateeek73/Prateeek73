import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import MonoLabel from './MonoLabel'
import { sections, site } from '../data'

/** Counts up from page load, as HH:MM:SS. */
function useUptime() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(id)
  }, [])

  const pad = (n) => String(n).padStart(2, '0')
  return `${pad(Math.floor(seconds / 3600))}:${pad(Math.floor((seconds % 3600) / 60))}:${pad(seconds % 60)}`
}

function Avatar() {
  // Tries each candidate in turn and falls back to the monogram if none exist,
  // so dropping the photo into public/ works whatever extension it happens to
  // have — and a missing file is never a broken image.
  const [attempt, setAttempt] = useState(0)
  const candidates = site.avatarCandidates

  if (attempt >= candidates.length) {
    return (
      <span className="grid h-[52px] w-[52px] shrink-0 place-items-center border border-rule-strong font-display text-[20px] text-text-muted">
        {site.monogram}
      </span>
    )
  }

  return (
    <img
      src={`${import.meta.env.BASE_URL}${candidates[attempt]}`}
      alt={site.name}
      onError={() => setAttempt((n) => n + 1)}
      className="h-[52px] w-[52px] shrink-0 object-cover grayscale transition-[filter] duration-500 hover:grayscale-0"
    />
  )
}

function Identity() {
  const uptime = useUptime()

  return (
    <div className="mb-10">
      <div className="mb-5 flex items-start gap-4">
        <Link to="/" className="block shrink-0" aria-label="Home">
          <Avatar />
        </Link>

        <div className="min-w-0 flex-1">
          <Link
            to="/"
            className="block font-display text-[26px] leading-[0.98] tracking-tight text-text transition-colors duration-200 hover:text-accent"
          >
            <span className="italic">{site.firstName}</span>
            <br />
            {site.lastName}
          </Link>
        </div>

        <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.15em] text-text-faint">
          {site.locationCode}
        </span>
      </div>

      <div className="mb-1.5 flex items-center gap-3">
        <span className="inline-flex items-center gap-1">
          <span className="txrx-dot tx" aria-hidden="true" />
          <span className="txrx-dot rx" aria-hidden="true" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
          {site.statusLine}
        </span>
      </div>

      <div className="flex items-center gap-3 pl-[14px]">
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-faint">
          uptime
        </span>
        <span className="font-mono text-[10px] tabular-nums text-text-faint">{uptime}</span>
      </div>
    </div>
  )
}

function SectionNav({ onNavigate }) {
  return (
    <nav className="mb-10" aria-label="Sections">
      <MonoLabel className="mb-4">Sections</MonoLabel>

      <ul>
        {sections.map((s, i) => (
          <li key={s.to}>
            <NavLink
              to={s.to}
              end={s.to === '/'}
              onClick={onNavigate}
              className={({ isActive }) =>
                [
                  'group flex items-center gap-3 py-[7px] text-[14px] transition-colors duration-200',
                  isActive ? 'text-text' : 'text-text-muted hover:text-text',
                ].join(' ')
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={[
                      'font-mono text-[10px] tabular-nums',
                      isActive ? 'text-accent' : 'text-text-faint',
                    ].join(' ')}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1">{s.name}</span>
                  {/* The active row grows a rule out to the edge. */}
                  <span
                    className={[
                      'h-px bg-accent transition-all duration-300',
                      isActive ? 'w-6' : 'w-0',
                    ].join(' ')}
                    aria-hidden="true"
                  />
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function Sidebar({ onNavigate }) {
  return (
    <div className="flex h-full flex-col justify-between px-8 py-10">
      <div>
        <Identity />
        <SectionNav onNavigate={onNavigate} />

        <div>
          <MonoLabel className="mb-3">Elsewhere</MonoLabel>
          <ul>
            {site.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="group flex items-center gap-2 py-[5px] text-[13px] text-text-muted transition-colors duration-200 hover:text-accent"
                >
                  <span
                    className="text-text-faint transition-colors duration-200 group-hover:text-accent"
                    aria-hidden="true"
                  >
                    →
                  </span>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-between pt-8">
        <MonoLabel>
          © {new Date().getFullYear()} {site.lastName}
        </MonoLabel>
        <ThemeToggle />
      </div>
    </div>
  )
}
