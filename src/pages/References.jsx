import Section from '../components/Section'
import MonoLabel from '../components/MonoLabel'
import { references } from '../data'

function Reference({ person }) {
  const meta = [person.title, person.org].filter(Boolean).join(' · ')

  return (
    <article className="border-b border-rule py-4">
      <h3 className="text-[15px] font-medium tracking-tight text-text">
        {person.url ? (
          <a
            href={person.url}
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-200 hover:text-accent"
          >
            {person.name}
          </a>
        ) : (
          person.name
        )}
      </h3>

      {meta && <p className="mt-0.5 text-[13px] text-text-muted">{meta}</p>}

      {person.relationship && <MonoLabel className="mt-2">{person.relationship}</MonoLabel>}

      {/* Only words the person has approved. Drafts stay in the data file and
          never render, so nothing here is put in anyone's mouth. */}
      {person.quote && (
        <blockquote className="mt-3 max-w-2xl text-[14px] leading-relaxed text-text-muted">
          {person.quote}
        </blockquote>
      )}
    </article>
  )
}

export default function References() {
  return (
    <Section
      title="References"
      description="People I have worked with closely, who can speak to the work."
    >
      <div className="border-t border-rule">
        {references.map((person) => (
          <Reference key={person.id} person={person} />
        ))}
      </div>
    </Section>
  )
}
