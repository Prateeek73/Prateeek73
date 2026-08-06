import { Link } from 'react-router-dom'
import MonoLabel from './MonoLabel'

function ArrowOut() {
  return (
    <svg
      viewBox="0 0 12 12"
      className="h-[11px] w-[11px] shrink-0 translate-y-px opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M1.004 9.166 9.337.833m0 0v8.333m0-8.333H1.004" />
    </svg>
  )
}

function StatusChip({ status }) {
  return (
    <span className="shrink-0 rounded-full border border-rule-strong px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-text-faint">
      {status}
    </span>
  )
}

export default function ProjectCard({ project, activeTag }) {
  const { title, blurb, metric, tags, url, status } = project
  const hasLink = Boolean(url)

  const heading = hasLink ? (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-start gap-1.5 text-[17px] font-medium tracking-tight text-text transition-colors duration-200 hover:text-accent"
    >
      {title}
      <ArrowOut />
    </a>
  ) : (
    <span className="text-[17px] font-medium tracking-tight text-text">{title}</span>
  )

  return (
    <article className="border-b border-rule py-6 first:pt-0">
      <div className="flex items-start justify-between gap-4">
        <h3>{heading}</h3>
        {status && <StatusChip status={status} />}
      </div>

      <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-text-muted">{blurb}</p>

      {metric && (
        <p className="mt-2.5 font-mono text-[12px] text-accent">{metric}</p>
      )}

      <ul className="mt-3.5 flex flex-wrap gap-x-3 gap-y-1.5">
        {tags.map((tag) => (
          <li key={tag}>
            <Link
              to={`/projects?tag=${encodeURIComponent(tag)}`}
              className={[
                'font-mono text-[10px] uppercase tracking-[0.12em] transition-colors duration-200',
                tag === activeTag
                  ? 'text-accent'
                  : 'text-text-faint hover:text-text-muted',
              ].join(' ')}
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  )
}
