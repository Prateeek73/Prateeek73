import Section from '../components/Section'
import { site } from '../data'

function InlineLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-text underline decoration-rule-strong underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent"
    >
      {children}
    </a>
  )
}

function JumpLink({ to, children }) {
  const go = (e) => {
    e.preventDefault()
    document.getElementById(to)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <a
      href={`#${to}`}
      onClick={go}
      className="text-[14px] font-medium text-text transition-colors duration-200 hover:text-accent"
    >
      {children}
    </a>
  )
}

export default function Home() {
  return (
    <Section title="About">
      <h2 className="font-display text-[44px] leading-[0.95] tracking-tight text-text sm:text-[64px]">
        <span className="italic">{site.firstName}</span>
        <br />
        <span className="accent-cursor">{site.lastName}</span>
      </h2>

      <p className="mt-6 text-[15px] leading-relaxed text-text-muted">
        {site.role}.
        <br />
        {site.location}.
      </p>

      <div className="mt-10 space-y-5 text-[15px] leading-relaxed text-text-muted">
        <p>
          Most people meet AI as a demo. I meet it as a deployment — the requirements
          nobody wrote down, the client call where the real problem finally shows up, and
          the service that still has to be up at 2am. I'd rather understand why something
          is being built before I argue about how.
        </p>

        <p>
          I started with ERP systems at{' '}
          <InlineLink href="https://www.kiet.edu/">KIET</InlineLink>, provisioning access
          for 1,500+ students and 50+ faculty while I was still an undergrad. Unglamorous
          work, but it was the first time being wrong meant somebody else could not do
          their job.
        </p>

        <p>
          That took me to <InlineLink href="https://www.capgemini.com/">Capgemini</InlineLink>{' '}
          in Bangalore. I built an internal attendance portal off the back of that ERP
          experience, then moved onto a banking platform where I sat with the client to
          pull requirements out of ambiguity and turn them around fast — personalized
          recommendations, automated billing and subscription management. We scaled it to{' '}
          <strong className="font-mono text-[13px] font-medium text-accent">
            1M+ requests/min at 99.99% uptime
          </strong>
          .
        </p>

        <p>
          I kept getting pulled toward the ML side of those systems, so I stopped hedging
          and went to do a Master's in Data Science at{' '}
          <InlineLink href="https://www.mtu.edu/">Michigan Tech</InlineLink>.
        </p>

        <p>
          Now I run the engineering for a research lab there. BERT and GAN models for
          actual research, owned end to end — the full stack around them and deployment
          onto the university HPC cluster, by me. I have also trained a couple of
          undergrad and grad students to take the role over when I leave.
        </p>

        <p>
          Currently architecting a multi-agent code-refactoring system with a professor as
          a research project, with a paper to come out of it.
        </p>

        <p>
          When I am not deep in a deployment, I am playing chess in the park with the
          uncles — losing more often than I would like.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-rule pt-6">
        <JumpLink to="contact">Get in touch</JumpLink>
        <JumpLink to="projects">See the work</JumpLink>
      </div>
    </Section>
  )
}
