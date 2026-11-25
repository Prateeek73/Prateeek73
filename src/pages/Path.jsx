import Section from '../components/Section'

// The charts are the same files the profile README uses, kept at the repo root
// in graphs/ (dark) and graphs/light/. Importing them from there means the site
// and the README can never show different versions.
import timelineDark from '../../graphs/01_career_timeline.svg'
import timelineLight from '../../graphs/light/01_career_timeline.svg'
import areaDark from '../../graphs/05_area_share.svg'
import areaLight from '../../graphs/light/05_area_share.svg'
import testsDark from '../../graphs/14_test_ratio.svg'
import testsLight from '../../graphs/light/14_test_ratio.svg'
import chaptersDark from '../../graphs/20_research_to_production.svg'
import chaptersLight from '../../graphs/light/20_research_to_production.svg'
import languagesDark from '../../graphs/languages_recent.svg'
import languagesLight from '../../graphs/light/languages_recent.svg'

// `alt` carries what the chart shows, for a reader who cannot see it; `caption`
// is the sentence a sighted reader gets underneath. `private` marks charts drawn
// from the private Pareto repository.
const charts = [
  {
    id: 'timeline',
    heading: 'Career timeline',
    dark: timelineDark,
    light: timelineLight,
    width: 940,
    height: 480,
    alt: 'Career timeline, 2018 to today. Education: B.Tech in IT at KIET, 2018 to 2022, and an MS in Data Science at Michigan Tech, 2024 to 2026. Work: full-stack developer at KIET, software engineer then senior software engineer at Capgemini, graduate research engineer at Michigan Tech, and founding ML researcher intern at Pareto Labs since August 2026. Internships: Spaceboat in 2019; IBM, Cureya and TwoWaits in 2021.',
    caption:
      'College projects and internships; backend services kept running at scale at Capgemini; research models turned into tools at Michigan Tech; open LLMs served in production at Pareto Labs.',
  },
  {
    id: 'chapters',
    heading: 'From research code to production',
    dark: chaptersDark,
    light: chaptersLight,
    width: 940,
    height: 300,
    alt: 'What each chapter fed into the next. Capgemini: backend microservices, event-driven pipelines, cloud deploys and rollbacks, monitoring and alerting. Michigan Tech: research models behind APIs, batch jobs for researchers, RefAgent self-hosted agents, fine-tuning language models. Pareto Labs: open LLMs behind an OpenAI-compatible API; private, serving numbers withheld.',
    caption:
      'What each chapter fed into the next: production habits from Capgemini, research-to-tool work at Michigan Tech, and LLM serving at Pareto Labs.',
  },
  {
    id: 'area',
    heading: 'Where the work goes',
    private: true,
    dark: areaDark,
    light: areaLight,
    width: 940,
    height: 300,
    alt: 'Share of my code changes by part of the platform. Product UI 38 percent, backend services 36 percent, tests 7 percent, hosting and build 5 percent, docs 5 percent, other 8 percent.',
    caption:
      'Share of my code changes by part of the platform. The backend bucket (36%) includes the serving work; the others are product UI, tests, hosting and build, docs and other.',
  },
  {
    id: 'tests',
    heading: 'Tests shipped with the code',
    private: true,
    dark: testsDark,
    light: testsLight,
    width: 940,
    height: 300,
    alt: 'Test lines per 100 lines of application code changes, per week. Week of Sep 28: 14. Oct 5: 12. Oct 12: 0. Oct 19: 20. Oct 26: 19. Nov 9: 9. Nov 16: 25.',
    caption:
      'For every 100 lines of application code changes in a week, how many lines of tests went in with them. A zero is a week of code changes with no new tests.',
  },
]

// Both themes are in the DOM and CSS shows the one matching data-theme (see
// .chart-dark / .chart-light in index.css). That keeps the charts in step with
// the site's own toggle, which prefers-color-scheme alone would not.
function ThemedImage({ dark, light, alt, width, height, className = '' }) {
  return (
    <>
      <img
        src={dark}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className={`chart-dark h-auto w-full ${className}`}
      />
      <img
        src={light}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className={`chart-light h-auto w-full ${className}`}
      />
    </>
  )
}

function Chart({ chart }) {
  return (
    <figure className="border-b border-rule py-8 first:pt-0">
      {/* The chart carries its own title, so no heading is repeated above it —
          only the note that says where the numbers come from. */}
      <h3 className="sr-only">{chart.heading}</h3>

      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-text-faint empty:hidden">
        {chart.private && <p>Private repo · my commits only</p>}
        {/* The chart keeps a 720px minimum, so on narrower screens it runs off
            the right edge — say so, or it just looks cropped. */}
        <p className="ml-auto md:hidden" aria-hidden="true">
          Scroll sideways →
        </p>
      </div>

      {/* Below ~720px the chart text would shrink past reading size, so the
          chart keeps a minimum width and scrolls sideways inside its own box
          instead. tabIndex makes that box reachable by keyboard. */}
      <div
        className="overflow-x-auto"
        tabIndex={0}
        role="group"
        aria-label={`${chart.heading} chart`}
      >
        <div className="min-w-[720px]">
          <ThemedImage
            dark={chart.dark}
            light={chart.light}
            alt={chart.alt}
            width={chart.width}
            height={chart.height}
          />
        </div>
      </div>

      <figcaption className="mt-3 max-w-[68ch] text-[14px] leading-relaxed text-text-muted">
        {chart.caption}
      </figcaption>
    </figure>
  )
}

export default function Path() {
  return (
    <Section
      title="Path"
      wide
      description="The career so far, and how I work, in four charts and a languages breakdown. Two charts count only my own commits in the private Pareto Labs repository."
    >
      <div className="border-t border-rule pt-8">
        {charts.map((chart) => (
          <Chart key={chart.id} chart={chart} />
        ))}

        <figure className="grid items-start gap-x-10 gap-y-4 py-8 sm:grid-cols-[minmax(0,400px)_1fr]">
          <ThemedImage
            dark={languagesDark}
            light={languagesLight}
            alt="Languages across my GitHub by bytes of code, private Pareto Labs work included."
            width={400}
            height={235}
          />
          <figcaption className="text-[14px] leading-relaxed text-text-muted">
            <h3 className="mb-1 text-[16px] font-medium tracking-tight text-text">Languages</h3>
            Every repository I have written to, by bytes of code, including the private
            Pareto Labs one.
          </figcaption>
        </figure>
      </div>
    </Section>
  )
}
