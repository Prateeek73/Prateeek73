import { useState } from 'react'
import Section from '../components/Section'
import MonoLabel from '../components/MonoLabel'
import { experience } from '../data'

function TermLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-medium text-text underline decoration-rule-strong underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent"
    >
      {children}
    </a>
  )
}

function Highlight({ item }) {
  return (
    <li className="flex gap-3 text-[14px] leading-relaxed text-text-muted">
      <span className="mt-[10px] h-px w-3 shrink-0 bg-rule-strong" aria-hidden="true" />
      <span>
        {/* A highlight can lead with a linked term, or drop one mid-sentence. */}
        {item.term && !item.text?.endsWith(' ') && (
          <TermLink href={item.termUrl}>{item.term}</TermLink>
        )}
        {item.text}
        {item.term && item.text?.endsWith(' ') && (
          <TermLink href={item.termUrl}>{item.term}</TermLink>
        )}
        {item.termAfter}
        {item.metric && (
          <>
            {' '}
            <strong className="font-mono text-[12.5px] font-medium text-accent">
              {item.metric}
            </strong>
          </>
        )}
        {item.after && ` ${item.after}`}
      </span>
    </li>
  )
}

function Role({ role }) {
  const [open, setOpen] = useState(Boolean(role.defaultOpen))
  const panelId = `${role.id}-panel`

  return (
    <div className="border-l border-rule pl-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="group flex w-full items-start justify-between gap-4 py-3 text-left"
      >
        <span className="min-w-0">
          <span className="block text-[16px] font-medium tracking-tight text-text transition-colors duration-200 group-hover:text-accent">
            {role.title}
          </span>
          <span className="mt-1 flex flex-wrap items-center gap-x-2 font-mono text-[10px] uppercase tracking-[0.12em] text-text-faint">
            <span>{role.period}</span>
            {role.mode && (
              <>
                <span>·</span>
                <span>{role.mode}</span>
              </>
            )}
            {role.current && (
              <>
                <span>·</span>
                <span className="flex items-center gap-1.5 text-accent">
                  <span className="txrx-dot tx" aria-hidden="true" />
                  Current
                </span>
              </>
            )}
          </span>
        </span>

        <span className="shrink-0 pt-0.5 font-mono text-[11px] text-text-faint transition-colors duration-200 group-hover:text-accent">
          [{open ? '−' : '+'}]
        </span>
      </button>

      {open && (
        <div id={panelId} className="pb-6 pt-2">
          <ul className="space-y-2.5">
            {role.highlights.map((h, i) => (
              <Highlight key={i} item={h} />
            ))}
          </ul>

          <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5">
            {role.stack.map((tech) => (
              <li
                key={tech}
                className="font-mono text-[10px] uppercase tracking-[0.1em] text-text-faint"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

function Employer({ company }) {
  return (
    <section className="border-b border-rule pb-6 pt-8 first:pt-0">
      <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-[20px] font-medium tracking-tight text-text">
          <a
            href={company.orgUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-200 hover:text-accent"
          >
            {company.org}
          </a>
        </h3>
        <MonoLabel className="shrink-0">{company.period}</MonoLabel>
      </div>

      <p className="mb-4 text-[13px] text-text-muted">{company.location}</p>

      {company.roles.map((role) => (
        <Role key={role.id} role={role} />
      ))}
    </section>
  )
}

export default function Experience() {
  return (
    <Section
      title="Experience"
      description="Michigan Tech and Capgemini — embedded with the people who use what I build, from fintech at scale to research put behind real services."
    >
      {experience.map((company) => (
        <Employer key={company.id} company={company} />
      ))}
    </Section>
  )
}
