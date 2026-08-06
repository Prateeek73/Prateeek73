import { Link, useSearchParams } from 'react-router-dom'
import Page from '../components/Page'
import MonoLabel from '../components/MonoLabel'
import ProjectCard from '../components/ProjectCard'
import { projectGroups, projects, projectsByTag } from '../data'

function FilterBar({ tag }) {
  if (!tag) return null

  return (
    <div className="mb-8 flex flex-wrap items-center gap-3 border border-rule bg-bg-elev px-4 py-3">
      <MonoLabel>Filtered by</MonoLabel>
      <span className="font-mono text-[12px] text-accent">{tag}</span>
      <Link
        to="/projects"
        className="ml-auto font-mono text-[10px] uppercase tracking-[0.14em] text-text-faint transition-colors duration-200 hover:text-accent"
      >
        Clear
      </Link>
    </div>
  )
}

export default function Projects() {
  const [searchParams] = useSearchParams()
  const tag = searchParams.get('tag')
  const visible = projectsByTag(tag)

  return (
    <Page
      title="Projects"
      description="Personal and academic work across applied ML, infrastructure, and research. Most of what I build is meant to be used by someone who did not write it."
      seoDescription="Projects by Prateek Singh — applied ML services, GPU-accelerated data infrastructure, LoRA fine-tuning research, and statistical modelling."
    >
      <FilterBar tag={tag} />

      {visible.length === 0 ? (
        <p className="py-10 text-[14px] text-text-muted">
          No projects match that filter.{' '}
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
            <section key={group} className="mb-14 last:mb-0">
              <div className="mb-6 flex items-center gap-4">
                <MonoLabel className="shrink-0">{group}</MonoLabel>
                <span className="h-px flex-1 bg-rule" aria-hidden="true" />
                <MonoLabel className="shrink-0">
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
