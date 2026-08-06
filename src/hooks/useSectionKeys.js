import { useEffect } from 'react'
import { sections } from '../data'

const TYPING = new Set(['INPUT', 'TEXTAREA', 'SELECT'])

/**
 * Arrow Down / Arrow Up step between sections.
 *
 * Only the arrow keys are taken. PageUp/PageDown, Home/End, space and the wheel
 * stay native, so a section taller than the viewport — Projects, Experience —
 * can still be read through at your own pace rather than jumped past.
 */
export default function useSectionKeys(active) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return

      const el = document.activeElement
      if (el && (TYPING.has(el.tagName) || el.isContentEditable)) return

      const i = sections.findIndex((s) => s.to === active)
      if (i === -1) return

      const next = e.key === 'ArrowDown' ? i + 1 : i - 1
      if (next < 0 || next >= sections.length) return

      e.preventDefault()
      document
        .getElementById(sections[next].id)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])
}
