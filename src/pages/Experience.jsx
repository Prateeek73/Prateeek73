import Page from '../components/Page'
import MonoLabel, { RuledLabel } from '../components/MonoLabel'
import { experience, internships } from '../data'

function Highlight({ item }) {
  return (
    <li className="flex gap-3 text-[14px] leading-relaxed text-text-muted">
      <span className="mt-[9px] h-px w-3 shrink-0 bg-rule-strong" aria-hidden="true" />
      <span>
        {item.text}
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

function Role({ job }) {
  return (
    <article className="border-b border-rule py-10 first:pt-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <MonoLabel>{job.period}</MonoLabel>
        {job.current && (
          <span className="flex items-center gap-1.5">
            <span className="txrx-dot tx" aria-hidden="true" />
            <MonoLabel tone="accent">Current</MonoLabel>
          </span>
        )}
      </div>

      <h2 className="mt-3 text-[19px] font-medium tracking-tight text-text">{job.role}</h2>

      <p className="mt-1 text-[14px] text-text-muted">
        <a
          href={job.orgUrl}
          target="_blank"
          rel="noreferrer"
          className="text-text underline decoration-rule-strong underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent"
        >
          {job.org}
        </a>
        {job.location && ` · ${job.location}`}
        {job.note && (
          <span className="text-text-faint"> · {job.note}</span>
        )}
      </p>

      <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-text-muted">
        {job.summary}
      </p>

      <ul className="mt-5 space-y-2.5">
        {job.highlights.map((h, i) => (
          <Highlight key={i} item={h} />
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5">
        {job.stack.map((tech) => (
          <li
            key={tech}
            className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-faint"
          >
            {tech}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function Experience() {
  return (
    <Page
      title="Experience"
      description="Michigan Tech, Capgemini, KIET — embedded with the people who use what I build, from fintech at scale to research put behind real services."
      seoDescription="Prateek Singh's work experience: graduate research engineer at Michigan Tech, senior software engineer at Capgemini, and ERP systems administrator at KIET."
    >
      {experience.map((job) => (
        <Role key={job.id} job={job} />
      ))}

      <section className="mt-14">
        <RuledLabel>Internships</RuledLabel>
        <ul className="mt-2">
          {internships.map((job) => (
            <li
              key={job.id}
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule py-4"
            >
              <span className="min-w-0">
                <span className="text-[15px] text-text">{job.role}</span>
                <span className="text-[14px] text-text-muted">
                  {' · '}
                  {job.orgUrl ? (
                    <a
                      href={job.orgUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-rule-strong underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent"
                    >
                      {job.org}
                    </a>
                  ) : (
                    job.org
                  )}
                  {job.location && ` · ${job.location}`}
                </span>
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.12em] text-text-faint">
                  {job.stack.join(' · ')}
                </span>
              </span>
              <MonoLabel className="shrink-0">
                {job.period}
                {job.duration && ` · ${job.duration}`}
              </MonoLabel>
            </li>
          ))}
        </ul>
      </section>
    </Page>
  )
}
