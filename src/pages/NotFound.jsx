import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import MonoLabel from '../components/MonoLabel'
import { sections } from '../data'

export default function NotFound() {
  return (
    <>
      <Seo title="Not found" description="That page does not exist." />

      <div className="mx-auto max-w-3xl px-5 pt-20 sm:px-8 sm:pt-28">
        <MonoLabel>404</MonoLabel>
        <h1 className="mt-3 font-display text-[52px] leading-[0.95] tracking-tight text-text sm:text-[72px]">
          Not found
        </h1>
        <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-text-muted">
          That page does not exist. Everything that does is listed below.
        </p>

        <ul className="mt-10">
          {sections.map((s) => (
            <li key={s.to}>
              <Link
                to={s.to}
                className="group flex items-baseline justify-between gap-4 border-b border-rule py-4"
              >
                <span className="font-display text-[22px] leading-none text-text transition-colors duration-200 group-hover:text-accent">
                  {s.name}
                </span>
                <span
                  className="text-text-faint transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/"
          className="mt-8 inline-block font-mono text-[10px] uppercase tracking-[0.14em] text-accent transition-colors duration-200 hover:text-accent-hover"
        >
          ← Home
        </Link>
      </div>
    </>
  )
}
