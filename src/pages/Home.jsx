import Page from '../components/Page'
import { site } from '../data'

export default function Home() {
  return (
    <Page
      title="About"
      seoDescription="Prateek Singh is a forward-deployed engineer who ships systems end-to-end — production backends at scale and research models put in front of real users."
    >
      <h2 className="font-display text-[44px] leading-[0.95] tracking-tight text-text sm:text-[64px]">
        <span className="italic">{site.firstName}</span>
        <br />
        {site.lastName}
      </h2>

      <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-text-muted">
        {site.role}. {site.location}.
      </p>

      <div className="mt-10 space-y-5 text-[15px] leading-relaxed text-text-muted">
        <p>
          Most of what I build is meant to be used by someone who did not write it. That is
          the part I care about — not the model or the service on its own, but whether the
          person on the other end can actually get their work done with it.
        </p>

        <p>
          I learned that at{' '}
          <a
            href="https://www.capgemini.com/"
            target="_blank"
            rel="noreferrer"
            className="text-text underline decoration-rule-strong underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent"
          >
            Capgemini
          </a>
          , embedded with a fintech client for close to three years on the Spring Boot
          microservices behind their personalized-offer platform. Scaling it to{' '}
          <strong className="font-mono text-[13px] font-medium text-accent">
            1M+ requests/min at 99.99% uptime
          </strong>{' '}
          meant async pipelines on Kafka and SQS, multi-layer caching, and dashboards that
          pulled mean time to detect down from hours to minutes.
        </p>

        <p>
          Now at{' '}
          <a
            href="https://www.mtu.edu/"
            target="_blank"
            rel="noreferrer"
            className="text-text underline decoration-rule-strong underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent"
          >
            Michigan Technological University
          </a>
          , I own the productionization of lab research — taking models that work in a
          notebook and putting them behind services other people can use. FragBERTa screens{' '}
          <strong className="font-mono text-[13px] font-medium text-accent">
            1k+ compounds in under 90 seconds
          </strong>{' '}
          over FastAPI and React on HPC infrastructure; nuGAN does the same for cosmology. I
          also mentor two graduate students on ML deployment.
        </p>

        <p>
          I am finishing an M.S. in Data Science at Michigan Tech in April 2026, and I am
          looking for forward-deployed engineering work — the kind where you sit with the
          people who need the system, understand the problem properly, and then own it all
          the way to production.
        </p>
      </div>

      <div className="mt-10 flex items-center gap-3 border-t border-rule pt-6">
        <span className="flex items-center gap-1" aria-hidden="true">
          <span className="txrx-dot tx" />
          <span className="txrx-dot rx" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">
          {site.availability.status} — {site.availability.detail}
        </span>
      </div>
    </Page>
  )
}
