import Page from '../components/Page'
import MonoLabel from '../components/MonoLabel'
import { certifications } from '../data'

function Certification({ cert }) {
  const hasLink = Boolean(cert.url)

  return (
    <article className="border-b border-rule py-7 first:pt-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h2 className="text-[17px] font-medium tracking-tight text-text">
          {hasLink ? (
            <a
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-200 hover:text-accent"
            >
              {cert.name}
            </a>
          ) : (
            cert.name
          )}
        </h2>
        {cert.issued && <MonoLabel>{cert.issued}</MonoLabel>}
      </div>

      <p className="mt-1 text-[14px] text-text-muted">{cert.issuer}</p>

      {cert.credentialId && (
        <p className="mt-2 font-mono text-[11px] text-text-faint">
          Credential ID {cert.credentialId}
        </p>
      )}

      {hasLink ? (
        <a
          href={cert.url}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.14em] text-accent transition-colors duration-200 hover:text-accent-hover"
        >
          Verify →
        </a>
      ) : (
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-text-faint">
          Details pending
        </p>
      )}
    </article>
  )
}

export default function Certifications() {
  const allPlaceholder = certifications.every((c) => c.placeholder)

  return (
    <Page
      title="Certifications"
      description="Cloud and platform credentials."
      seoDescription="Professional certifications held by Prateek Singh."
    >
      {allPlaceholder && (
        <div className="mb-8 border border-rule bg-bg-elev px-4 py-3">
          <MonoLabel tone="muted">
            Placeholder entries — real names, issuers, and verification links to be
            filled in.
          </MonoLabel>
        </div>
      )}

      {certifications.map((cert) => (
        <Certification key={cert.id} cert={cert} />
      ))}
    </Page>
  )
}
