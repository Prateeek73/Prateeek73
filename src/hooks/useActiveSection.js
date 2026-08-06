import { useEffect, useState } from 'react'
import { sections } from '../data'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

/**
 * Tracks which section is in view and keeps the URL and document title in step,
 * via replaceState so scrolling never fills the back button with eight entries.
 *
 * Reads positions on scroll rather than holding IntersectionObserver handles:
 * the node list is re-queried every frame, so a re-render that replaces the
 * section elements can't leave this watching detached nodes.
 */
export default function useActiveSection() {
  const [active, setActive] = useState(sections[0].to)

  useEffect(() => {
    let last = 0

    const scroller = () => {
      const main = document.getElementById('main')
      // Below lg the window scrolls; at lg and up #main does.
      return main && getComputedStyle(main).overflowY !== 'visible' ? main : window
    }

    const compute = () => {
      const nodes = Array.from(document.querySelectorAll('[data-section]'))
      if (nodes.length === 0) return

      // A section becomes current once its heading passes the upper quarter of
      // the viewport — roughly where you are actually reading.
      const line = window.innerHeight * 0.25

      let current = nodes[0]
      for (const node of nodes) {
        if (node.getBoundingClientRect().top <= line) current = node
      }

      // At the very bottom the last section may never cross the line, so make
      // hitting the end always select it.
      const target = scroller()
      const atEnd =
        target === window
          ? window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
          : target.scrollTop + target.clientHeight >= target.scrollHeight - 2
      if (atEnd) current = nodes[nodes.length - 1]

      setActive(current.dataset.section)
    }

    // Time-based throttle rather than requestAnimationFrame: reading eight
    // bounding boxes is cheap, and rAF would tie this to frame production.
    const onScroll = () => {
      const now = Date.now()
      if (now - last < 60) return
      last = now
      compute()
    }

    const target = scroller()
    target.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    compute()

    return () => {
      target.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    const meta = sections.find((s) => s.to === active)
    if (!meta) return

    const path = `${BASE}${meta.to}`
    if (window.location.pathname !== path) {
      window.history.replaceState(null, '', path + window.location.search)
    }
    document.title =
      meta.to === '/'
        ? 'Prateek Singh — Forward-Deployed Engineer'
        : `${meta.name} — Prateek Singh`
  }, [active])

  return active
}
