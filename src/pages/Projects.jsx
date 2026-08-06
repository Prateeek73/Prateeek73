import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Section from '../components/Section'
import MonoLabel from '../components/MonoLabel'
import ProjectCard from '../components/ProjectCard'
import { projectKinds, projects } from '../data'

const PAGE = 5

function KindFilter({ activeKind, tag, count }) {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap items-center gap-2">
        {projectKinds.map((kind) => {
          const isActive = activeKind === kind
          const params = new URLSearchParams()
          if (kind !== 'All') params.set('kind', kind)
          if (tag) params.set('tag', tag)
          const to = params.toString() ? `/projects?${params}` : '/projects'

          return (
            <Link
              key={kind}
              to={to}
              className={[
                'border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors duration-200',
                isActive
                  ? 'border-text text-text'
                  : 'border-transparent text-text-faint hover:text-text-muted',
              ].join(' ')}
            >
              {kind}
            </Link>
          )
        })}
      </div>

      <MonoLabel className="tabular-nums">{String(count).padStart(2, '0')}</MonoLabel>
    </div>
  )
}

export default function Projects() {
  const [searchParams] = useSearchParams()
  const [expanded, setExpanded] = useState(false)
  const tag = searchParams.get('tag')
  const kindParam = searchParams.get('kind')
  const activeKind = projectKinds.includes(kindParam) ? kindParam : 'All'

  // Flat list: the Personal/Professional filter already does the dividing, so
  // group headings on top of it would be a second axis for no extra information.
  const visible = projects.filter(
    (p) =>
      (activeKind === 'All' || p.kind === activeKind) && (!tag || p.tags.includes(tag))
  )

  // Changing the filter should start from the top of a fresh list rather than
  // leaving it expanded from the previous one.
  useEffect(() => {
    setExpanded(false)
  }, [activeKind, tag])

  const shown = expanded ? visible : visible.slice(0, PAGE)
  const hidden = visible.length - shown.length

  return (
    <Section
      title="Projects"
      wide
    >
      <KindFilter activeKind={activeKind} tag={tag} count={visible.length} />

      {tag && (
        <div className="mb-5 flex flex-wrap items-center gap-3 border border-rule bg-bg-elev px-3 py-2">
          <MonoLabel>Tag</MonoLabel>
          <span className="font-mono text-[11px] text-accent">{tag}</span>
          <Link
            to={activeKind === 'All' ? '/projects' : `/projects?kind=${activeKind}`}
            className="ml-auto font-mono text-[10px] uppercase tracking-[0.14em] text-text-faint transition-colors duration-200 hover:text-accent"
          >
            Clear
          </Link>
        </div>
      )}

      {visible.length === 0 ? (
        <p className="py-8 text-[14px] text-text-muted">
          Nothing matches that combination.{' '}
          <Link to="/projects" className="text-accent hover:text-accent-hover">
            Show all {projects.length}
          </Link>
          .
        </p>
      ) : (
        <>
          <div className="border-t border-rule">
            {shown.map((project) => (
              <ProjectCard key={project.id} project={project} activeTag={tag} />
            ))}
          </div>

          {visible.length > PAGE && (
            <div className="mt-5 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                className="border border-rule-strong px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                {expanded ? `Collapse · show first ${PAGE}` : `Show all · +${hidden} more`}
              </button>

              <MonoLabel className="tabular-nums">
                {String(shown.length).padStart(2, '0')} /{' '}
                {String(visible.length).padStart(2, '0')}
              </MonoLabel>
            </div>
          )}
        </>
      )}

      <p className="mt-8 text-[14px] text-text-muted">
        Another thirty-odd repositories are{' '}
        <a
          href="https://github.com/Prateeek73"
          target="_blank"
          rel="noreferrer"
          className="text-text underline decoration-rule-strong underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent"
        >
          on GitHub
        </a>
        .
      </p>
    </Section>
  )
}
