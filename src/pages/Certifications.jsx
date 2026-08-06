import Section from '../components/Section'
import { certifications } from '../data'

function Certification({ cert }) {
  const meta = [cert.issuer, cert.context, cert.issued].filter(Boolean)

  return (
    <article className="border-b border-rule py-5">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-[16px] font-medium tracking-tight text-text">
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

          <p className="mt-1.5 flex flex-wrap items-center gap-x-2 font-mono text-[10px] uppercase tracking-[0.12em] text-text-faint">
            {meta.map((bit, i) => (
              <span key={bit}>
                {i > 0 && <span className="pr-2">·</span>}
                {bit}
              </span>
            ))}
            {cert.status && (
              <span className="text-accent">
                <span className="pr-2 text-text-faint">·</span>
                {cert.status}
              </span>
            )}
          </p>
        </div>

        {cert.url && (
          <a
            href={cert.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${cert.name} from ${cert.issuer}`}
            className="shrink-0 pt-1 text-[11px] text-text-faint transition-colors duration-200 hover:text-accent"
          >
            ↗
          </a>
        )}
      </div>
    </article>
  )
}

export default function Certifications() {
  return (
    <Section
      title="Certifications"
      description="Certificates and letters from the internships, held on LinkedIn."
    >
      {certifications.map((cert) => (
        <Certification key={cert.id} cert={cert} />
      ))}
    </Section>
  )
}
