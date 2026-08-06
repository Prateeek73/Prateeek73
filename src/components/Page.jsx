import { Link, useLocation } from 'react-router-dom'
import Seo from './Seo'
import MonoLabel from './MonoLabel'
import { sections } from '../data'

function PrevNext({ index }) {
  const prev = index > 0 ? sections[index - 1] : null
  const next = index < sections.length - 1 ? sections[index + 1] : null

  return (
    <nav
      aria-label="Section navigation"
      className="mt-20 grid gap-8 border-t border-rule pt-8 sm:grid-cols-2"
    >
      <div>
        {prev && (
          <Link to={prev.to} className="group block">
            <MonoLabel>← Previous</MonoLabel>
            <span className="mt-1 block font-display text-[22px] italic leading-tight text-text transition-colors duration-200 group-hover:text-accent">
              {prev.name}
            </span>
          </Link>
        )}
      </div>
      <div className="sm:text-right">
        {next && (
          <Link to={next.to} className="group block">
            <MonoLabel>Next →</MonoLabel>
            <span className="mt-1 block font-display text-[22px] italic leading-tight text-text transition-colors duration-200 group-hover:text-accent">
              {next.name}
            </span>
          </Link>
        )}
      </div>
    </nav>
  )
}

/**
 * Shared shell for every route: the numbered header, the display title, and the
 * prev/next pair. `title` doubles as the section name, so the number and the
 * NN/NN counter are derived rather than passed in and kept in sync by hand.
 */
export default function Page({ title, description, seoDescription, children }) {
  const { pathname } = useLocation()
  const index = sections.findIndex((s) => s.to === pathname)
  const number = index + 1
  const total = sections.length

  return (
    <>
      <Seo
        title={pathname === '/' ? undefined : title}
        description={seoDescription || description}
        path={pathname}
      />

      <header>
        <div className="flex items-baseline justify-between gap-4">
          <MonoLabel>
            <span className="text-accent">{String(number).padStart(2, '0')}</span>
            <span className="px-2 text-text-faint">·</span>
            {title}
          </MonoLabel>
          <MonoLabel className="tabular-nums">
            {String(number).padStart(2, '0')}/{String(total).padStart(2, '0')}
          </MonoLabel>
        </div>

        <h1 className="mt-3 font-display text-[44px] italic leading-[1.02] tracking-tight text-text sm:text-[52px]">
          {title}
        </h1>

        <div className="mt-6 h-px w-full bg-rule" aria-hidden="true" />

        {description && (
          <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-text-muted">
            {description}
          </p>
        )}
      </header>

      <div className="pt-10">{children}</div>

      <PrevNext index={index} />
    </>
  )
}
