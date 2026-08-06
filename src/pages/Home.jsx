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
    // hideTitle: the name below is the heading — an "About" serif title above it
    // would be a second, weaker one saying the same thing.
    <Section title="About" hideTitle>
      <h2
        id="about-heading"
        className="font-display text-[52px] leading-[0.94] tracking-tight text-text sm:text-[66px]"
      >
        <span className="italic">{site.firstName}</span>
        <br />
        <span className="accent-cursor">{site.lastName}</span>
      </h2>

      <p className="mt-6 text-[14.5px] leading-relaxed text-text-muted">
        {site.role}.
        <br />
        {site.location}.
      </p>

      <div className="mt-8 space-y-4 text-[14.5px] leading-relaxed text-text-muted">
        <p>
          Most people meet AI as a demo. I meet it as a deployment — the requirements
          nobody wrote down, the client call where the real problem shows up, and the
          service that still has to be up at 2am.
        </p>

        <p>
          I started on ERP systems at{' '}
          <InlineLink href="https://www.kiet.edu/">KIET</InlineLink> while still an
          undergrad — access provisioning, grade modules, the unglamorous kind where being
          wrong means somebody else cannot do their job. I leveraged that straight into{' '}
          <InlineLink href="https://www.capgemini.com/">Capgemini</InlineLink> in
          Bangalore, where three projects filled close to three years: an internal
          attendance platform for the NA and EU workforce, EMS microservices for a
          Mercedes in-car system, and a fintech platform that had run on a mainframe for
          the better part of two decades — there I owned the offer delivery microservices,
          personalized recommendations and automated payment, scaled to{' '}
          <strong className="font-mono text-[12.5px] font-medium text-accent">
            1M+ requests/min at 99.99% uptime
          </strong>
          .
        </p>

        <p>
          I kept getting pulled toward the ML side of those systems, so I went and did a
          Master's in Data Science at{' '}
          <InlineLink href="https://www.mtu.edu/">Michigan Tech</InlineLink>, finishing in
          April 2026. Alongside it I ran the engineering for a research lab there —{' '}
          <InlineLink href="https://kaushallab.mtu.edu/fragberta/">FragBERTa</InlineLink>,
          a fine-tuned BERT model for molecular property prediction that researchers could
          finally query themselves, and{' '}
          <InlineLink href="https://kaushallab.mtu.edu/nugan/">nuGAN</InlineLink>, a
          cosmological simulator that had only ever existed as research code. Both owned
          end to end — the service, the frontend, and the deployment onto the university
          HPC cluster — and a couple of undergrad and grad students trained to take it
          over before I left.
        </p>

        <p>
          Right now I am architecting a multi-agent code-refactoring system with a
          professor, with a paper to come out of it.
        </p>

        <p>
          When I am not deep in a deployment, I am playing chess in the park with the
          uncles.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-rule pt-5">
        <JumpLink to="contact">Get in touch</JumpLink>
        <JumpLink to="projects">See the work</JumpLink>
      </div>
    </Section>
  )
}
