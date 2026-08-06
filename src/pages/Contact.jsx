import Page from '../components/Page'
import MonoLabel from '../components/MonoLabel'
import { site } from '../data'

function ContactRow({ label, handle, href }) {
  const external = !href.startsWith('mailto:')

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="group flex items-baseline justify-between gap-4 border-b border-rule py-5"
    >
      <span className="flex min-w-0 flex-col">
        <MonoLabel>{label}</MonoLabel>
        <span className="mt-1 truncate text-[15px] text-text transition-colors duration-200 group-hover:text-accent">
          {handle}
        </span>
      </span>
      <span
        className="shrink-0 text-text-faint transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent"
        aria-hidden="true"
      >
        →
      </span>
    </a>
  )
}

export default function Contact() {
  return (
    <Page
      title="Contact"
      description="Inbox is open — questions, opportunities, or a hello. I'll get back to you."
      seoDescription="Get in touch with Prateek Singh by email, LinkedIn, or GitHub."
    >
      <div className="flex items-center gap-3 pb-6">
        <span className="flex items-center gap-1" aria-hidden="true">
          <span className="txrx-dot tx" />
          <span className="txrx-dot rx" />
        </span>
        <MonoLabel tone="muted">
          {site.availability.status} — {site.availability.detail}
        </MonoLabel>
      </div>

      {site.socials.map((s) => (
        <ContactRow key={s.label} label={s.label} handle={s.handle} href={s.href} />
      ))}

      {site.resumeUrl && (
        <ContactRow label="Résumé" handle="Download (PDF)" href={site.resumeUrl} />
      )}

      <p className="mt-10 max-w-xl text-[14px] leading-relaxed text-text-muted">
        Based in {site.location}. Email is the surest way to reach me — if you would
        like my résumé and it is not linked above yet, just ask and I will send it
        across.
      </p>
    </Page>
  )
}
