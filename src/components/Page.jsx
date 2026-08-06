import { Link, useLocation } from 'react-router-dom'
import Seo from './Seo'
import MonoLabel from './MonoLabel'
import RevealText from './RevealText'
import { sections } from '../data'

function PrevNext() {
  const { pathname } = useLocation()
  const i = sections.findIndex((s) => s.to === pathname)
  if (i === -1) return null

  const prev = i > 0 ? sections[i - 1] : null
  const next = i < sections.length - 1 ? sections[i + 1] : null

  return (
    <nav
      aria-label="Section navigation"
      className="mt-20 grid gap-px border-t border-rule pt-8 sm:grid-cols-2"
    >
      <div>
        {prev && (
          <Link to={prev.to} className="group block">
            <MonoLabel>← Previous</MonoLabel>
            <span className="mt-1 block font-display text-[22px] leading-tight text-text transition-colors duration-200 group-hover:text-accent">
              {prev.name}
            </span>
          </Link>
        )}
      </div>
      <div className="sm:text-right">
        {next && (
          <Link to={next.to} className="group block">
            <MonoLabel>Next →</MonoLabel>
            <span className="mt-1 block font-display text-[22px] leading-tight text-text transition-colors duration-200 group-hover:text-accent">
              {next.name}
            </span>
          </Link>
        )}
      </div>
    </nav>
  )
}

/**
 * Shared shell for every route below the home page: SEO tags, the container,
 * the revealed page title, and the prev/next pair.
 */
export default function Page({ title, description, seoDescription, children }) {
  const { pathname } = useLocation()
  const number = sections.findIndex((s) => s.to === pathname) + 1

  return (
    <>
      <Seo title={title} description={seoDescription || description} path={pathname} />

      <div className="mx-auto max-w-3xl px-5 pt-14 sm:px-8 sm:pt-20">
        <header className="border-b border-rule pb-8">
          {number > 0 && <MonoLabel>{String(number).padStart(2, '0')} / Section</MonoLabel>}
          <RevealText
            as="h1"
            text={title}
            className="mt-3 block font-display text-[44px] leading-[0.95] tracking-tight text-text sm:text-[60px]"
          />
          {description && (
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-text-muted">
              {description}
            </p>
          )}
        </header>

        <div className="pt-10">{children}</div>

        <PrevNext />
      </div>
    </>
  )
}
