import Section from '../components/Section'
import MonoLabel from '../components/MonoLabel'
import { references } from '../data'

function Reference({ person }) {
  const meta = [person.title, person.org].filter(Boolean).join(' · ')

  return (
    <figure className="border-b border-rule py-6">
      {person.quote && (
        <blockquote className="mb-4 max-w-2xl font-display text-[19px] leading-[1.45] text-text sm:text-[21px]">
          <span className="text-accent" aria-hidden="true">
            “
          </span>
          {person.quote}
          <span className="text-accent" aria-hidden="true">
            ”
          </span>
        </blockquote>
      )}

      <figcaption className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-[15px] font-medium text-text">{person.name}</div>
          {meta && <div className="mt-0.5 text-[13px] text-text-muted">{meta}</div>}
          {person.relationship && (
            <MonoLabel className="mt-2">{person.relationship}</MonoLabel>
          )}
        </div>

        {person.url && (
          <a
            href={person.url}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-text-faint transition-colors duration-200 hover:text-accent"
          >
            <span aria-hidden="true">↗</span> LinkedIn
          </a>
        )}
      </figcaption>
    </figure>
  )
}

export default function Testimonials() {
  const anyQuotes = references.some((p) => p.quote)

  return (
    <Section
      title="Testimonials"
      description="People I have worked with, and who are happy to speak to the work."
    >
      {!anyQuotes && (
        <p className="mb-8 max-w-xl text-[14px] leading-relaxed text-text-muted">
          Quotes go here once each person has supplied their own. Until then this is
          simply who they are and how we worked together — no words are attributed to
          anyone who did not write them.
        </p>
      )}

      {references.map((person) => (
        <Reference key={person.id} person={person} />
      ))}
    </Section>
  )
}
