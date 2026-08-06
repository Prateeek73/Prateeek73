import MonoLabel from './MonoLabel'
import { sections } from '../data'

/**
 * One section of the single scrolling page: the numbered header, the display
 * title, and its content. Position is derived from the shared `sections` list by
 * title, so the number and the NN/NN counter can never drift out of sync with
 * the nav.
 *
 * scroll-mt keeps the header clear of the sticky mobile bar when a nav click
 * scrolls a section to the top.
 */
export default function Section({ title, description, children }) {
  const index = sections.findIndex((s) => s.name === title)
  const meta = sections[index]
  const number = index + 1
  const total = sections.length

  return (
    <section
      id={meta?.id}
      data-section={meta?.to}
      aria-labelledby={`${meta?.id}-heading`}
      className="scroll-mt-20 border-t border-rule pb-24 pt-16 first:border-t-0 first:pt-0 lg:scroll-mt-8"
    >
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

      <h2
        id={`${meta?.id}-heading`}
        className="mt-3 font-display text-[44px] italic leading-[1.02] tracking-tight text-text sm:text-[52px]"
      >
        {title}
      </h2>

      <div className="mt-6 h-px w-full bg-rule" aria-hidden="true" />

      {description && (
        <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-text-muted">
          {description}
        </p>
      )}

      <div className="pt-10">{children}</div>
    </section>
  )
}
