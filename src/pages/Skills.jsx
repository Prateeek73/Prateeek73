import { Link } from 'react-router-dom'
import Section from '../components/Section'
import MonoLabel from '../components/MonoLabel'
import { countForTag, isFilterable, skills } from '../data'

function Skill({ name }) {
  if (!isFilterable(name)) {
    return <li className="text-[13.5px] text-text-muted">{name}</li>
  }

  const count = countForTag(name)

  return (
    <li>
      <Link
        to={`/projects?tag=${encodeURIComponent(name)}`}
        className="group inline-flex items-baseline gap-1 text-[13.5px] text-text transition-colors duration-200 hover:text-accent"
        title={`Show ${count} project${count === 1 ? '' : 's'} using ${name}`}
      >
        <span className="underline decoration-rule-strong underline-offset-4 transition-colors duration-200 group-hover:decoration-accent">
          {name}
        </span>
        <span className="font-mono text-[9px] text-text-faint transition-colors duration-200 group-hover:text-accent">
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
      wide
      description="Underlined ones link to the projects I used them on."
    >
      <div className="border-t border-rule">
        {skills.map((group) => (
          <div
            key={group.category}
            className="grid gap-x-8 gap-y-2 border-b border-rule py-4 sm:grid-cols-[150px_1fr]"
          >
            <MonoLabel className="pt-[3px]">{group.category}</MonoLabel>
            <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
              {group.items.map((name) => (
                <Skill key={name} name={name} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
