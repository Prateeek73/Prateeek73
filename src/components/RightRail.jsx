import MonoLabel from './MonoLabel'
import { dailyTools, reading } from '../data'

function RailHeading({ children, count }) {
  return (
    <div className="mb-4 flex items-baseline justify-between gap-3 border-b border-rule pb-2">
      <MonoLabel>{children}</MonoLabel>
      <MonoLabel>{String(count).padStart(2, '0')}</MonoLabel>
    </div>
  )
}

export default function RightRail() {
  return (
    <div className="px-7 py-10">
      <section className="mb-12">
        <RailHeading count={reading.length}>Reading ↓</RailHeading>

        <ul className="space-y-6">
          {reading.map((item) => (
            <li key={item.id} className={item.placeholder ? 'opacity-55' : undefined}>
              <MonoLabel>{item.date}</MonoLabel>
              <div className="mt-1 text-[13px] leading-snug text-text">{item.title}</div>
              {item.author && (
                <div className="mt-0.5 text-[12px] text-text-muted">— {item.author}</div>
              )}
              {item.note && (
                <p className="mt-1.5 font-display text-[12.5px] italic leading-snug text-text-muted">
                  {item.note}
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <RailHeading count={dailyTools.length}>Daily tools</RailHeading>

        <ul className="space-y-6">
          {dailyTools.map((tool) => (
            <li key={tool.id} className={tool.placeholder ? 'opacity-55' : undefined}>
              <div className="flex items-baseline justify-between gap-2">
                <MonoLabel>{tool.category}</MonoLabel>
                {tool.url && (
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-text-faint transition-colors duration-200 hover:text-accent"
                    aria-label={`Open ${tool.name}`}
                  >
                    ↗
                  </a>
                )}
              </div>
              <div className="mt-1 text-[13px] text-text">{tool.name}</div>
              {tool.note && (
                <p className="mt-1 font-display text-[12.5px] italic leading-snug text-text-muted">
                  {tool.note}
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
