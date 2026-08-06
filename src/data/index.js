import { projects } from './projects'

export { site, sections, colophon } from './site'
export { experience, internships } from './experience'
export { projects, projectGroups, projectKinds } from './projects'
export { reading, dailyTools } from './rail'
export { skills } from './skills'
export { education } from './education'
export { certifications } from './certifications'
export { testimonials } from './testimonials'

// Every tag actually used by at least one project. Skills outside this set render
// as plain text rather than a filter link, so the Skills page can never offer a
// filter that returns nothing.
const usedTags = new Set(projects.flatMap((p) => p.tags))

export function isFilterable(skill) {
  return usedTags.has(skill)
}

export function projectsByTag(tag) {
  if (!tag) return projects
  return projects.filter((p) => p.tags.includes(tag))
}

export function countForTag(tag) {
  return projects.filter((p) => p.tags.includes(tag)).length
}
