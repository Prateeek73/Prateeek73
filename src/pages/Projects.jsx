import { Link, useSearchParams } from 'react-router-dom'
import Page from '../components/Page'
import MonoLabel from '../components/MonoLabel'
import ProjectCard from '../components/ProjectCard'
import { projectGroups, projectKinds, projects } from '../data'

function KindFilter({ activeKind, tag, count }) {
  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
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

  const visible = projects.filter(
    (p) =>
      (activeKind === 'All' || p.kind === activeKind) && (!tag || p.tags.includes(tag))
  )

  return (
    <Page
      title="Projects"
      description="Personal and academic work across applied ML, data engineering, and research. Most of what I build is meant to be used by someone who did not write it."
      seoDescription="Projects by Prateek Singh — applied ML services, GPU-accelerated data pipelines, LoRA fine-tuning research, and statistical modelling."
    >
      <KindFilter activeKind={activeKind} tag={tag} count={visible.length} />

      {tag && (
        <div className="mb-8 flex flex-wrap items-center gap-3 border border-rule bg-bg-elev px-4 py-3">
          <MonoLabel>Tag</MonoLabel>
          <span className="font-mono text-[12px] text-accent">{tag}</span>
          <Link
            to={activeKind === 'All' ? '/projects' : `/projects?kind=${activeKind}`}
            className="ml-auto font-mono text-[10px] uppercase tracking-[0.14em] text-text-faint transition-colors duration-200 hover:text-accent"
          >
            Clear
          </Link>
        </div>
      )}

      {visible.length === 0 ? (
        <p className="py-10 text-[14px] text-text-muted">
          Nothing matches that combination.{' '}
          <Link to="/projects" className="text-accent hover:text-accent-hover">
            Show all {projects.length}
          </Link>
          .
        </p>
      ) : (
        projectGroups.map((group) => {
          const inGroup = visible.filter((p) => p.group === group)
          if (inGroup.length === 0) return null

          return (
            <section key={group} className="mb-12 last:mb-0">
              <div className="mb-2 flex items-center gap-4 border-b border-rule pb-2">
                <MonoLabel className="shrink-0">{group}</MonoLabel>
                <span className="h-px flex-1" aria-hidden="true" />
                <MonoLabel className="shrink-0 tabular-nums">
                  {String(inGroup.length).padStart(2, '0')}
                </MonoLabel>
              </div>
              {inGroup.map((project) => (
                <ProjectCard key={project.id} project={project} activeTag={tag} />
              ))}
            </section>
          )
        })
      )}

      <p className="mt-10 text-[14px] text-text-muted">
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
    </Page>
  )
}
