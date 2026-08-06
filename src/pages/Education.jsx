import Section from '../components/Section'
import MonoLabel from '../components/MonoLabel'
import { education } from '../data'

export default function Education() {
  return (
    <Section title="Education">
      <div className="border-t border-rule">
        {education.map((item) => (
          <article key={item.id} className="border-b border-rule py-5">
            {item.period && <MonoLabel>{item.period}</MonoLabel>}

            <h3 className="mt-1.5 text-[16px] font-medium tracking-tight text-text">
              {item.degree}
            </h3>

            {/* School results have no institution to name, so this whole line
                drops rather than rendering an empty separator. */}
            {(item.school || item.detail) && (
              <p className="mt-1 text-[13.5px] text-text-muted">
                {item.school &&
                  (item.schoolUrl ? (
                    <a
                      href={item.schoolUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-text underline decoration-rule-strong underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent"
                    >
                      {item.school}
                    </a>
                  ) : (
                    // No URL supplied, so this renders as text: an anchor
                    // without an href is not a link and is not focusable.
                    <span className="text-text">{item.school}</span>
                  ))}
                {item.school && item.location && ` · ${item.location}`}
                {item.detail && `${item.school ? ' · ' : ''}${item.detail}`}
              </p>
            )}

            {item.coursework && (
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                {item.coursework.map((course) => (
                  <li
                    key={course}
                    className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-faint"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
