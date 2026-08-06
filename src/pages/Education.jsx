import Page from '../components/Page'
import MonoLabel from '../components/MonoLabel'
import { education } from '../data'

export default function Education() {
  return (
    <Page
      title="Education"
      description="Formal education and academic background."
      seoDescription="Prateek Singh's education — M.S. in Data Science at Michigan Technological University."
    >
      {education.map((item) => (
        <article key={item.id} className="border-b border-rule py-8 first:pt-0">
          {item.period && <MonoLabel>{item.period}</MonoLabel>}

          <h2 className="mt-2 text-[19px] font-medium tracking-tight text-text">
            {item.degree}
          </h2>

          <p className="mt-1 text-[14px] text-text-muted">
            <a
              href={item.schoolUrl}
              target="_blank"
              rel="noreferrer"
              className="text-text underline decoration-rule-strong underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent"
            >
              {item.school}
            </a>
            {item.detail && ` · ${item.detail}`}
          </p>

          {item.note && (
            <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-text-muted">
              {item.note}
            </p>
          )}

          {item.incomplete && (
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-text-faint">
              Details pending
            </p>
          )}
        </article>
      ))}
    </Page>
  )
}
