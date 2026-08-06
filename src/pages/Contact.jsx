import Section from '../components/Section'
import MonoLabel from '../components/MonoLabel'
import { site } from '../data'

/** Strips the scheme so the row reads as an identity, not a URL. */
function displayValue(href, handle) {
  if (href.startsWith('mailto:')) return href.slice(7)
  return href.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '') || handle
}

function ContactRow({ label, href, handle }) {
  const external = !href.startsWith('mailto:')

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="group flex items-center gap-6 border-b border-rule py-4"
    >
      <MonoLabel className="w-[76px] shrink-0">{label}</MonoLabel>
      <span className="min-w-0 flex-1 truncate text-[14px] text-text transition-colors duration-200 group-hover:text-accent">
        {displayValue(href, handle)}
      </span>
      <span
        className="shrink-0 text-[11px] text-text-faint transition-colors duration-200 group-hover:text-accent"
        aria-hidden="true"
      >
        ↗
      </span>
    </a>
  )
}

export default function Contact() {
  return (
    <Section
      title="Contact"
      description="Inbox is open — questions, opportunities, or a hello. I'll get back to you."
    >
      <div className="mb-8 flex items-center gap-3">
        <span className="flex items-center gap-1" aria-hidden="true">
          <span className="txrx-dot tx" />
          <span className="txrx-dot rx" />
        </span>
        <MonoLabel tone="muted">
          {site.availability.status} — {site.availability.detail}
        </MonoLabel>
      </div>

      {site.socials.map((s) => (
        <ContactRow key={s.label} label={s.label} href={s.href} handle={s.handle} />
      ))}

      {site.resumeUrl && (
        <ContactRow label="Résumé" href={site.resumeUrl} handle="Download (PDF)" />
      )}

      <a
        href={`mailto:${site.email}`}
        className="mt-10 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted transition-colors duration-200 hover:text-accent"
      >
        Send an email
        <span aria-hidden="true">→</span>
      </a>
    </Section>
  )
}
