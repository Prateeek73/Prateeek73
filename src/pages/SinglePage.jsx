import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import About from './Home'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
import Education from './Education'
import Certifications from './Certifications'
import Testimonials from './Testimonials'
import Contact from './Contact'
import NotFound from './NotFound'
import { sections } from '../data'

// /workexp was the old URL for what is now the Experience section.
const ALIASES = { '/workexp': '/experience' }

/**
 * All eight sections on one scrolling page. The per-section paths still resolve —
 * arriving at /projects jumps straight to that section — but once you are here,
 * moving between sections is scrolling, not navigation.
 */
export default function SinglePage() {
  const { pathname } = useLocation()
  const resolved = ALIASES[pathname] || pathname
  const known = sections.some((s) => s.to === resolved)

  // First mount only. Afterwards the URL is driven *by* scrolling, so re-running
  // this would fight the user for control of the scroll position.
  useEffect(() => {
    if (!known) return
    const meta = sections.find((s) => s.to === resolved)
    if (!meta || meta.to === '/') return

    // 'instant' because this is a deep-link landing, not a movement the user
    // watched happen — animating a scroll they did not initiate is disorienting.
    document.getElementById(meta.id)?.scrollIntoView({ behavior: 'instant', block: 'start' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!known) return <NotFound />

  return (
    <>
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <Testimonials />
      <Contact />
    </>
  )
}
