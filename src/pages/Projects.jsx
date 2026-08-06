import { Link, useSearchParams } from 'react-router-dom'
import Section from '../components/Section'
import MonoLabel from '../components/MonoLabel'
import ProjectCard from '../components/ProjectCard'
import { projectKinds, projects } from '../data'

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
  const tag = searchParams.get('tag')
  const kindParam = searchParams.get('kind')
  const activeKind = projectKinds.includes(kindParam) ? kindParam : 'All'

  // Flat list: the Personal/Professional filter already does the dividing, so
  // group headings on top of it would be a second axis for no extra information.
  const visible = projects.filter(
    (p) =>
      (activeKind === 'All' || p.kind === activeKind) && (!tag || p.tags.includes(tag))
  )

  return (
    <Section
      title="Projects"
      description="Personal and academic work across applied ML, data engineering, and research. Most of what I build is meant to be used by someone who did not write it."
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
        <div className="border-t border-rule">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} activeTag={tag} />
          ))}
        </div>
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
