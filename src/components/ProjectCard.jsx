import { Link } from 'react-router-dom'

function CodeLink({ url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group/code flex shrink-0 items-center gap-1 font-mono text-[10px] uppercase tracking-[0.12em] text-text-faint transition-colors duration-200 hover:text-accent"
    >
      <span aria-hidden="true">↗</span>
      code
    </a>
  )
}

export default function ProjectCard({ project, activeTag }) {
  const { title, kind, blurb, metric, tags, url, status } = project

  return (
    <article className="border-b border-rule py-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="min-w-0">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="text-[16px] font-medium tracking-tight text-text transition-colors duration-200 hover:text-accent"
            >
              {title}
            </a>
          ) : (
            <span className="text-[16px] font-medium tracking-tight text-text">{title}</span>
          )}
        </h3>

        {url ? (
          <CodeLink url={url} />
        ) : (
          // A hollow dot stands in where there is no repo, so the right edge
          // still reads as a column rather than as a missing link.
          <span
            className="mt-1.5 h-[6px] w-[6px] shrink-0 rounded-full border border-rule-strong"
            aria-hidden="true"
          />
        )}
      </div>

      <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-faint">
          {kind}
        </span>
        {status && (
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-faint">
            · {status}
          </span>
        )}
      </div>

      <p className="mt-2.5 max-w-2xl text-[14px] leading-relaxed text-text-muted">{blurb}</p>

      {metric && <p className="mt-2 font-mono text-[12px] text-accent">{metric}</p>}

      <ul className="mt-3.5 flex flex-wrap gap-x-4 gap-y-1.5">
        {tags.map((tag) => (
          <li key={tag}>
            <Link
              to={`/projects?tag=${encodeURIComponent(tag)}`}
              className={[
                'font-mono text-[10px] tracking-[0.1em] transition-colors duration-200',
                tag === activeTag ? 'text-accent' : 'text-text-faint hover:text-text-muted',
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
