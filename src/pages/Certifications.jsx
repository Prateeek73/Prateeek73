import Section from '../components/Section'
import { certifications } from '../data'

function Certification({ cert }) {
  const meta = [
    cert.issuer,
    cert.issued && `Issued ${cert.issued}`,
    cert.expires && `Expires ${cert.expires}`,
  ].filter(Boolean)

  return (
    <article className="border-b border-rule py-4">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-[15px] font-medium tracking-tight text-text">
            {cert.url ? (
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
          </h3>

          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-text-faint">
            {meta.join(' · ')}
          </p>

          {cert.credentialId && (
            <p className="mt-1 break-all font-mono text-[10px] text-text-faint">
              ID {cert.credentialId}
            </p>
          )}
        </div>

        {cert.url && (
          <a
            href={cert.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Verify ${cert.name}`}
            className="shrink-0 pt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-text-faint transition-colors duration-200 hover:text-accent"
          >
            <span aria-hidden="true">↗</span> verify
          </a>
        )}
      </div>
    </article>
  )
}

export default function Certifications() {
  return (
    <Section title="Certifications" wide>
      <div className="border-t border-rule">
        {certifications.map((cert) => (
          <Certification key={cert.id} cert={cert} />
        ))}
      </div>
    </Section>
  )
}
