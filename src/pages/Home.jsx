import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import RevealText from '../components/RevealText'
import MonoLabel, { RuledLabel } from '../components/MonoLabel'
import { colophon, sections, site } from '../data'

function Availability() {
  return (
    <div className="mt-8 flex items-center gap-3">
      <span className="flex items-center gap-1" aria-hidden="true">
        <span className="txrx-dot tx" />
        <span className="txrx-dot rx" />
      </span>
      <MonoLabel tone="muted">
        {site.availability.status} — {site.availability.detail}
      </MonoLabel>
    </div>
  )
}

function Index() {
  return (
    <section className="mt-20" aria-labelledby="index-heading">
      <RuledLabel>
        <span id="index-heading">Index</span>
      </RuledLabel>

      <ul className="mt-2">
        {sections.map((s, i) => (
          <li key={s.to}>
            <Link
              to={s.to}
              className="group flex items-baseline gap-4 border-b border-rule py-5"
            >
              <span className="w-6 shrink-0 font-mono text-[10px] text-text-faint">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-[26px] leading-[0.98] tracking-tight text-text transition-colors duration-200 group-hover:text-accent">
                  {s.name}
                </span>
                <span className="mt-1 block text-[13px] leading-relaxed text-text-muted">
                  {s.blurb}
                </span>
              </span>
              <span
                className="shrink-0 text-text-faint transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Colophon() {
  return (
    <section className="mt-20" aria-labelledby="colophon-heading">
      <RuledLabel>
        <span id="colophon-heading">Colophon</span>
      </RuledLabel>

      <dl className="mt-4 space-y-2 text-[13px]">
        <div className="flex items-baseline justify-between gap-3">
          <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-faint">
            Display
          </dt>
          <dd className="font-display text-text">{colophon.display}</dd>
        </div>
        <div className="flex items-baseline justify-between gap-3">
          <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-faint">
            Text
          </dt>
          <dd className="text-text">{colophon.text}</dd>
        </div>
        <div className="flex items-baseline justify-between gap-3">
          <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-faint">
            Mono
          </dt>
          <dd className="font-mono text-text">{colophon.mono}</dd>
        </div>
      </dl>

      <p className="mt-4 text-[11px] leading-relaxed text-text-faint">{colophon.note}</p>
    </section>
  )
}

export default function Home() {
  // One continuous reveal across both lines, so the surname keeps counting from
  // where the given name stopped rather than restarting at zero.
  const firstLen = site.firstName.length

  return (
    <>
      <Seo path="/" />

      <div className="mx-auto max-w-3xl px-5 pt-20 sm:px-8 sm:pt-28">
        <MonoLabel>{site.location}</MonoLabel>

        <h1 className="mt-4 font-display text-[clamp(3rem,13vw,6.5rem)] leading-[0.88] tracking-tight text-text">
          <RevealText as="span" text={site.firstName} cinematic className="block" />
          <RevealText
            as="span"
            text={site.lastName}
            cinematic
            startIndex={firstLen}
            className="block italic text-accent"
          />
        </h1>

        <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-text">
          {site.role}
          <span className="accent-cursor" aria-hidden="true" />
        </p>

        <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-text-muted">
          {site.tagline}
        </p>

        <Availability />
        <Index />
        <Colophon />
      </div>
    </>
  )
}
