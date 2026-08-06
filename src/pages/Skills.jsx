import { Link } from 'react-router-dom'
import Section from '../components/Section'
import MonoLabel from '../components/MonoLabel'
import { countForTag, isFilterable, skills } from '../data'

function Skill({ name }) {
  if (!isFilterable(name)) {
    return <li className="text-[14px] text-text-muted">{name}</li>
  }

  const count = countForTag(name)

  return (
    <li>
      <Link
        to={`/projects?tag=${encodeURIComponent(name)}`}
        className="group inline-flex items-baseline gap-1.5 text-[14px] text-text transition-colors duration-200 hover:text-accent"
        title={`Show ${count} project${count === 1 ? '' : 's'} using ${name}`}
      >
        <span className="underline decoration-rule-strong underline-offset-4 transition-colors duration-200 group-hover:decoration-accent">
          {name}
        </span>
        <span className="font-mono text-[10px] text-text-faint transition-colors duration-200 group-hover:text-accent">
          {count}
        </span>
      </Link>
    </li>
  )
}

export default function Skills() {
  return (
    <Section
      title="Skills"
      description="Languages, frameworks, and platforms I work with. Underlined ones link to the projects I have used them on — the number is how many."
    >
      <div className="space-y-10">
        {skills.map((group) => (
          <section key={group.category}>
            <div className="mb-4 flex items-center gap-4">
              <MonoLabel className="shrink-0">{group.category}</MonoLabel>
              <span className="h-px flex-1 bg-rule" aria-hidden="true" />
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2.5">
              {group.items.map((name) => (
                <Skill key={name} name={name} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  )
}
