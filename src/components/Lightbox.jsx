import { useEffect, useRef } from 'react'
import MonoLabel from './MonoLabel'

const BASE = import.meta.env.BASE_URL

/**
 * Full-size viewer. Escape closes, arrows step, and focus is held inside while
 * open so tabbing cannot wander into the page behind it.
 */
export default function Lightbox({ photos, index, onClose, onStep }) {
  const closeRef = useRef(null)
  const photo = photos[index]

  useEffect(() => {
    closeRef.current?.focus()
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        onStep(1)
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        onStep(-1)
      } else if (e.key === 'Tab') {
        // Only two controls to cycle between, so trapping is just a matter of
        // keeping Tab from leaving the dialog at all.
        e.preventDefault()
      }
    }
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  }, [onClose, onStep])

  // The page behind must not scroll while this is open.
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  if (!photo) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${photos.length}`}
      className="fixed inset-0 z-50 flex flex-col bg-bg/97 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-5 py-4 sm:px-8">
        <MonoLabel className="tabular-nums">
          {String(index + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
        </MonoLabel>

        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted transition-colors duration-200 hover:text-accent"
        >
          Close ✕
        </button>
      </div>

      {/* Clicks on the image itself should not fall through to the backdrop. */}
      <div
        className="flex min-h-0 flex-1 items-center justify-center px-5 pb-4 sm:px-8"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={`${BASE}${photo.full}`}
          alt=""
          width={photo.width}
          height={photo.height}
          className="max-h-full w-auto max-w-full object-contain"
        />
      </div>

      <div
        className="flex items-center justify-center gap-2 px-5 pb-6 sm:px-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => onStep(-1)}
          className="border border-transparent px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted transition-colors duration-200 hover:border-text hover:text-text"
        >
          ← Prev
        </button>
        <button
          type="button"
          onClick={() => onStep(1)}
          className="border border-transparent px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted transition-colors duration-200 hover:border-text hover:text-text"
        >
          Next →
        </button>
      </div>
    </div>
  )
}
