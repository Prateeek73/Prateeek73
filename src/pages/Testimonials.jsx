import Page from '../components/Page'
import MonoLabel from '../components/MonoLabel'
import { testimonials } from '../data'

function Testimonial({ item }) {
  return (
    <figure className="border-b border-rule py-8 first:pt-0">
      <blockquote className="max-w-2xl font-display text-[20px] leading-[1.45] text-text sm:text-[22px]">
        <span className="text-accent" aria-hidden="true">
          “
        </span>
        {item.quote}
        <span className="text-accent" aria-hidden="true">
          ”
        </span>
      </blockquote>

      <figcaption className="mt-5">
        <div className="text-[14px] font-medium text-text">{item.name}</div>
        <div className="mt-0.5 text-[13px] text-text-muted">
          {item.title}
          {item.org && ` · ${item.org}`}
        </div>
        {item.relationship && (
          <MonoLabel className="mt-2">{item.relationship}</MonoLabel>
        )}
      </figcaption>
    </figure>
  )
}

export default function Testimonials() {
  const anyPlaceholder = testimonials.some((t) => t.placeholder)

  return (
    <Page
      title="Testimonials"
      description="From people I have worked with."
      seoDescription="Recommendations for Prateek Singh from colleagues and collaborators."
    >
      {anyPlaceholder && (
        <div className="mb-8 border border-rule bg-bg-elev px-4 py-3">
          <MonoLabel tone="muted">
            Draft quotes written as placeholders — each person still needs to supply
            and approve their own words before this page goes live.
          </MonoLabel>
        </div>
      )}

      {testimonials.map((item) => (
        <Testimonial key={item.id} item={item} />
      ))}
    </Page>
  )
}
