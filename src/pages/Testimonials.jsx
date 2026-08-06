import { useState } from 'react'
import Section from '../components/Section'
import MonoLabel from '../components/MonoLabel'
import { references } from '../data'

function StepButton({ children, onClick, disabled, edge }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={[
        'border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors duration-200',
        disabled
          ? 'cursor-default border-transparent text-text-faint/40'
          : 'border-transparent text-text-muted hover:border-text hover:text-text',
      ].join(' ')}
      aria-label={edge === 'prev' ? 'Previous testimonial' : 'Next testimonial'}
    >
      {children}
    </button>
  )
}

export default function Testimonials() {
  const [i, setI] = useState(0)
  const person = references[i]
  const meta = [person.title, person.org].filter(Boolean).join(' · ')

  return (
    <Section
      title="Testimonials"
      description="People I have worked with, and who are happy to speak to the work."
    >
      {/* One at a time, stepped through — the section stays a fixed height
          instead of running to five stacked quotes. */}
      <figure>
        {person.quote ? (
          <blockquote className="max-w-2xl text-[15px] leading-relaxed text-text-muted">
            {person.quote}
          </blockquote>
        ) : (
          <p className="max-w-2xl text-[14px] leading-relaxed text-text-faint">
            No quote yet — {person.name.split(' ')[0]} has not written one. Listed here
            as someone who can speak to the work rather than with words put in their
            mouth.
          </p>
        )}

        <figcaption className="mt-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-rule pt-5">
          <div className="min-w-0">
            <div className="text-[15px] font-medium text-text">
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
            </div>
            {meta && <div className="mt-0.5 text-[13px] text-text-muted">{meta}</div>}
          </div>

          {person.relationship && (
            <MonoLabel className="shrink-0">{person.relationship}</MonoLabel>
          )}
        </figcaption>
      </figure>

      <div className="mt-6 flex items-center justify-between">
        <MonoLabel className="tabular-nums">
          {String(i + 1).padStart(2, '0')} / {String(references.length).padStart(2, '0')}
        </MonoLabel>

        <div className="flex items-center gap-1">
          <StepButton edge="prev" onClick={() => setI(i - 1)} disabled={i === 0}>
            ← Prev
          </StepButton>
          <StepButton
            edge="next"
            onClick={() => setI(i + 1)}
            disabled={i === references.length - 1}
          >
            Next →
          </StepButton>
        </div>
      </div>
    </Section>
  )
}
